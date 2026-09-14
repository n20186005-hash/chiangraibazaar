// Server-side weather data layer for Chiang Rai Night Bazaar.
// Data source: Open-Meteo Forecast API (https://open-meteo.com), licensed CC BY 4.0.
// Results are cached in-module for 30 minutes so the upstream API is only
// contacted a handful of times per hour regardless of visitor traffic.

const LAT = 19.907;
const LON = 99.8325;
const TTL_MS = 30 * 60 * 1000;

export interface CurrentWeather {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  precipitation: number;
  weatherCode: number;
  windSpeed: number;
  uvIndex: number | null;
}

export interface DailyForecast {
  date: string;
  weatherCode: number;
  tempMax: number;
  tempMin: number;
  rainProbability: number | null;
  uvIndexMax: number | null;
}

export interface WeatherData {
  current: CurrentWeather;
  daily: DailyForecast[];
  fetchedAt: number;
}

let cache: WeatherData | null = null;

const API_URL =
  `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
  '&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,uv_index' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max' +
  '&timezone=Asia%2FBangkok&forecast_days=7&wind_speed_unit=kmh';

export async function getWeather(): Promise<WeatherData | null> {
  if (cache && Date.now() - cache.fetchedAt < TTL_MS) return cache;

  try {
    // `cf` is honoured on Cloudflare Workers (edge cache); ignored elsewhere.
    const res = await fetch(API_URL, { cf: { cacheTtl: 1800, cacheEverything: true } } as any);
    if (!res.ok) return cache;

    const json: any = await res.json();
    if (!json?.current || !json?.daily?.time?.length) return cache;

    const data: WeatherData = {
      current: {
        temperature: json.current.temperature_2m,
        apparentTemperature: json.current.apparent_temperature,
        humidity: json.current.relative_humidity_2m,
        precipitation: json.current.precipitation,
        weatherCode: json.current.weather_code,
        windSpeed: json.current.wind_speed_10m,
        uvIndex: json.current.uv_index ?? null,
      },
      daily: json.daily.time.map((date: string, i: number) => ({
        date,
        weatherCode: json.daily.weather_code[i],
        tempMax: json.daily.temperature_2m_max[i],
        tempMin: json.daily.temperature_2m_min[i],
        rainProbability: json.daily.precipitation_probability_max?.[i] ?? null,
        uvIndexMax: json.daily.uv_index_max?.[i] ?? null,
      })),
      fetchedAt: Date.now(),
    };

    cache = data;
    return data;
  } catch {
    // Network failure — fall back to the last successful payload if available.
    return cache;
  }
}

// ---------------------------------------------------------------------------
// Weather classification (WMO codes -> plain-language categories)
// ---------------------------------------------------------------------------

export type Category =
  | 'clear' | 'partlyCloudy' | 'cloudy' | 'fog' | 'drizzle'
  | 'rain' | 'shower' | 'snow' | 'thunder';

export function weatherCategory(code: number): Category {
  if (code === 0) return 'clear';
  if (code === 1 || code === 2) return 'partlyCloudy';
  if (code === 3) return 'cloudy';
  if (code === 45 || code === 48) return 'fog';
  if (code >= 51 && code <= 57) return 'drizzle';
  if (code >= 61 && code <= 67) return 'rain';
  if (code >= 71 && code <= 77) return 'snow';
  if (code >= 80 && code <= 82) return 'shower';
  if (code >= 95) return 'thunder';
  return 'cloudy';
}

/** Plain-language sun exposure level (today's peak UV). */
export function uvLevel(uv: number | null): 'strong' | 'moderate' | 'low' {
  if (uv == null) return 'low';
  if (uv >= 6) return 'strong';
  if (uv >= 3) return 'moderate';
  return 'low';
}

/** Plain-language wind level from km/h. */
export function windLevel(kmh: number): 'calm' | 'breeze' | 'windy' {
  if (kmh >= 29) return 'windy';
  if (kmh >= 12) return 'breeze';
  return 'calm';
}

// ---------------------------------------------------------------------------
// Smart advice engine
//
// Rule-based, visitor-first recommendations derived from live data.
// Each rule returns a translation key; the UI only renders triggered rules
// (no generic all-in-one advice block) and hides empty categories entirely.
//
// Thresholds (per product spec):
//   rain probability >= 60        -> umbrella / rain planning
//   heavy rain codes / >= 4 mm/h  -> risk warning + waterproof gear
//   thunder codes >= 95           -> top-priority risk warning
//   wind >= 50 km/h (force 7+)    -> risk warning; 29–49 (force 5–6) -> outfit note
//   apparent temp >= 32 / max >= 32 -> heat advice
//   day-night range >= 8 or min <= 20 -> layer-up advice
//   peak UV >= 5                  -> sun protection kit
// ---------------------------------------------------------------------------

export type AdviceGroup = 'alerts' | 'outfit' | 'activity' | 'items';

export interface SmartAdvice {
  alerts: string[];
  outfit: string[];
  activity: string[];
  items: string[];
}

const RAINY_CATEGORIES: Category[] = ['drizzle', 'rain', 'shower', 'thunder'];

export function buildAdvice(data: WeatherData): SmartAdvice {
  const cur = data.current;
  const today = data.daily[0];
  const cat = weatherCategory(cur.weatherCode);

  const rainy = RAINY_CATEGORIES.includes(cat) || cur.precipitation > 0;
  const rainProb = today?.rainProbability ?? 0;
  const wind = cur.windSpeed;
  const heavyRain =
    [65, 67, 82, 86].includes(cur.weatherCode) || cur.precipitation >= 4;
  const tMax = today?.tempMax ?? cur.temperature;
  const tMin = today?.tempMin ?? cur.temperature;
  const peakUv = today?.uvIndexMax ?? cur.uvIndex;

  const alerts: string[] = [];
  const outfit: string[] = [];
  const activity: string[] = [];
  const items: string[] = [];

  // --- Risk warnings (top priority) ---
  if (cat === 'thunder') alerts.push('thunder');
  if (heavyRain) alerts.push('heavyRain');
  if (wind >= 50) alerts.push('strongWind');
  if (cat === 'fog') alerts.push('fog');
  if (tMax >= 40) alerts.push('extremeHeat');

  // --- Outfit ---
  if (heavyRain || rainProb >= 60) outfit.push('waterproof');
  if (cur.apparentTemperature >= 32) outfit.push('lightClothes');
  if (tMax - tMin >= 8 || tMin <= 20) outfit.push('jacket');
  if (tMin <= 12) outfit.push('warmClothes');
  if (wind >= 29 && wind < 50) outfit.push('windWear');

  // --- Activity planning (night-market first) ---
  if (rainy || rainProb >= 60) activity.push('marketIndoor');
  if (tMax >= 32) activity.push('avoidNoon');
  if (rainy && !heavyRain) activity.push('slippery');
  if (!rainy && rainProb < 40 && tMax >= 20) activity.push('niceEvening');
  if (!rainy && (cat === 'cloudy' || cat === 'partlyCloudy')) activity.push('photoSoft');

  // --- What to bring ---
  if (rainy || rainProb >= 60) items.push('umbrella');
  if (heavyRain && wind >= 29) items.push('raincoat');
  if (peakUv != null && peakUv >= 5) items.push('sunKit');
  if (tMax >= 32) items.push('water');
  if (cat === 'fog') items.push('mask');

  return { alerts, outfit, activity, items };
}
