import type { Locale } from './guides';

type Localized = Record<Locale, string>;
type VisitorFacts = {
  address: string;
  kind: Localized;
  hours: Localized;
  admission: Localized;
  access: Localized;
  visit: Localized;
  photo: Localized;
};
const tr = (en:string, zh:string, th:string):Localized => ({en,zh,th});

// Street-level addresses are supplied only where the destination is reliably
// identifiable. Hours, fees and live ratings are deliberately not invented.
export const nearbyVisitorFacts: Record<string,VisitorFacts> = {
  'clock-tower': {
    address:'Chiang Rai Clock Tower, Banphaprakan Road, Wiang, Mueang Chiang Rai, Chiang Rai 57000, Thailand',
    kind:tr('Public clock tower and civic landmark','市中心公共钟楼与城市地标','หอนาฬิกาและสัญลักษณ์เมือง'),
    hours:tr('Visible from surrounding public streets at any time; any light-show programme is separate.','周边公共道路可随时观赏；灯光表演以现场公告为准。','ชมได้จากถนนสาธารณะตลอดเวลา ส่วนรอบการแสดงไฟตรวจประกาศหน้างาน'),
    admission:tr('No ticket to view from public sidewalks.','从公共人行道观赏无需门票。','ชมจากทางเท้าสาธารณะไม่เสียค่าเข้า'),
    access:tr('Walk from central-city hotels or Bus Terminal 1; approach from pedestrian crossings, not the traffic island.','从市中心住宿区或第一巴士站步行前往，使用人行横道，不要进入车流中的钟楼环岛。','เดินจากย่านกลางเมืองหรือสถานีขนส่งแห่งที่ 1 ใช้ทางข้าม ไม่ลงเกาะกลางวงเวียน'),
    visit:tr('First find a safe corner with a full view, observe the golden ornament, then continue on foot to the Night Bazaar.','先在安全街角观察钟楼全景和金色装饰，再步行前往夜市。','เริ่มที่มุมทางเท้าปลอดภัย ชมลวดลายสีทอง แล้วเดินต่อไปไนท์บาซาร์'),
    photo:tr('Use a wide shot from a sidewalk corner; dusk gives contrast between the golden tower and evening streets.','从人行道街角拍摄全景，黄昏适合呈现金色钟楼与暮色街道的对比。','ถ่ายมุมกว้างจากทางเท้า ช่วงพลบค่ำเห็นสีทองตัดกับถนนได้ชัด')
  },
  'wat-jed-yod': {
    address:'Wat Jed Yod, Jetyod Road, Wiang, Mueang Chiang Rai, Chiang Rai 57000, Thailand',
    kind:tr('Active Buddhist temple','仍在使用的佛教寺院','วัดพุทธที่ประกอบศาสนกิจ'),
    hours:tr('Visit in daylight; access to prayer buildings follows temple arrangements.','建议白天参访；佛殿开放依寺方安排。','แนะนำเที่ยวกลางวัน อาคารศาสนสถานเปิดตามระเบียบวัด'),
    admission:tr('Ask the temple about any special-area charge; donations are separate.','一般参访与捐献分开，特殊区域收费请向寺方查询。','สอบถามค่าเข้าพื้นที่พิเศษจากวัด การบริจาคเป็นอีกส่วนหนึ่ง'),
    access:tr('Walk from the Night Bazaar area along central-city streets; use the named temple pin.','可从夜市周边沿市中心道路步行，导航请使用寺庙专属地点。','เดินจากย่านไนท์บาซาร์ตามถนนในเมืองและใช้หมุดชื่อวัด'),
    visit:tr('Pause at the entrance, walk the public courtyard, then observe roof and stupa details without disturbing worship.','从入口观察，再沿允许进入的庭院慢行，欣赏屋顶与佛塔细节，不打扰礼佛。','เริ่มที่ทางเข้า เดินลานที่เปิดให้ชม ดูหลังคาและเจดีย์โดยไม่รบกวนผู้มาทำบุญ'),
    photo:tr('Frame the layered roofs from the courtyard; ask before photographing worshippers.','从庭院拍摄层叠屋顶，拍摄信众前先征求同意。','ถ่ายหลังคาซ้อนชั้นจากลานวัด และขออนุญาตก่อนถ่ายผู้มาทำบุญ')
  },
  'wat-phra-kaew': {
    address:'Wat Phra Kaew, Trairat Road, Wiang, Mueang Chiang Rai, Chiang Rai 57000, Thailand',
    kind:tr('Historic royal Buddhist temple','历史悠久的皇家佛寺','พระอารามหลวงเก่าแก่'),
    hours:tr('Plan for a daytime visit; confirm temple buildings and museum access on arrival.','建议白天参观，佛殿与馆室以现场开放安排为准。','แนะนำเที่ยวกลางวัน ตรวจเวลาอาคารและพิพิธภัณฑ์หน้างาน'),
    admission:tr('Check any exhibition-specific charges at the site; donations are optional.','展览空间如有单独收费以现场为准，捐献自愿。','ตรวจค่าเข้าชมนิทรรศการเฉพาะพื้นที่หน้างาน บริจาคตามสมัครใจ'),
    access:tr('Reach the temple on Trairat Road by walking or a short city ride from the Clock Tower.','位于 Trairat Road，可从钟楼步行或乘短程市区交通抵达。','อยู่ถนนไตรรัตน์ เดินหรือนั่งรถระยะสั้นจากหอนาฬิกา'),
    visit:tr('Begin with the temple grounds, read the Emerald Buddha history, then inspect Lanna roofs and the permitted exhibition spaces.','先游寺院庭院、了解玉佛历史，再看兰纳屋顶和开放展示空间。','เริ่มจากลานวัด ศึกษาประวัติพระแก้ว แล้วชมหลังคาล้านนาและพื้นที่จัดแสดงที่เปิด'),
    photo:tr('Use the entrance axis and temple gables; avoid photographing inside restricted sacred rooms.','从入口轴线拍摄山墙与寺院屋顶，禁拍的宗教室内空间不要拍摄。','ถ่ายหน้าบันจากแนวทางเข้า งดถ่ายในห้องศักดิ์สิทธิ์ที่ห้ามถ่าย')
  },
  'wat-phra-singh': {
    address:'Wat Phra Singh, Tha Luang Road, Wiang, Mueang Chiang Rai, Chiang Rai 57000, Thailand',
    kind:tr('Historic Lanna Buddhist temple','兰纳历史佛寺','วัดเก่าแก่ศิลปะล้านนา'),
    hours:tr('Daylight is best for architecture; religious halls may close for ceremonies.','白天较适合看建筑；佛殿可能因宗教活动限制参观。','เหมาะชมสถาปัตยกรรมกลางวัน วิหารอาจปิดระหว่างพิธี'),
    admission:tr('Check any special access rules with the temple; voluntary offerings are separate.','特殊参观安排请向寺方了解，随喜捐献另计。','ตรวจเงื่อนไขเข้าชมพิเศษกับวัด การบริจาคเป็นความสมัครใจ'),
    access:tr('Approach via Tha Luang Road; pair with Wat Phra Kaew in the old-town area.','经 Tha Luang Road 抵达，可与旧城区玉佛寺串联。','เข้าทางถนนท่าหลวงและเที่ยวต่อวัดพระแก้วในย่านเมืองเก่า'),
    visit:tr('Examine the entrance gateway, continue to the courtyard, then compare timber work and roof details.','先看门楼，再进庭院，对比木作与屋顶细部。','ชมซุ้มประตู เดินเข้าลาน และสังเกตงานไม้กับรายละเอียดหลังคา'),
    photo:tr('The gateway and rooflines work well as architectural frames, especially in soft morning light.','门楼和屋脊适合建筑构图，早晨柔和光线更利于拍摄。','ซุ้มประตูและแนวหลังคาเหมาะจัดภาพ โดยเฉพาะแสงเช้านุ่ม')
  },
  'blue-temple': {
    address:'Wat Rong Suea Ten, Rim Kok, Mueang Chiang Rai, Chiang Rai 57100, Thailand',
    kind:tr('Contemporary Buddhist art temple','当代佛教艺术寺院','วัดพุทธศิลป์ร่วมสมัย'),
    hours:tr('Visit during the day and confirm current hall access with the temple.','建议白天参观，殿内开放以寺方安排为准。','เที่ยวกลางวันและตรวจการเปิดอุโบสถกับวัด'),
    admission:tr('Check notices at the entrance for any current charges or donation guidance.','入场是否收费及捐献方式以寺院入口公告为准。','ตรวจป้ายทางเข้าสำหรับค่าเข้าหรือการบริจาค'),
    access:tr('North of central Chiang Rai across the Kok River; use a taxi, hired car or suitable local transport.','位于市中心以北的 Kok 河对岸，适合乘出租车、包车或合适的当地交通。','อยู่เหนือใจกลางเมืองข้ามแม่น้ำกก เดินทางด้วยแท็กซี่ รถเหมา หรือรถท้องถิ่น'),
    visit:tr('Start with the blue naga entrance, circle the exterior reliefs, then enter the hall quietly if open.','先看蓝色那伽入口，再观察建筑外墙浮雕，开放时安静入殿。','เริ่มจากพญานาคสีน้ำเงิน ชมปูนปั้นรอบอาคาร แล้วเข้าวิหารอย่างสงบหากเปิด'),
    photo:tr('The central approach frames the blue-and-gold facade; respect indoor photography notices.','从中央入口轴线拍蓝金立面，室内依拍照告示行事。','ถ่ายหน้าวิหารสีน้ำเงินทองจากแนวทางเข้า และทำตามป้ายเรื่องภาพภายใน')
  },
  'white-temple': {
    address:'Wat Rong Khun, Pa O Don Chai, Mueang Chiang Rai, Chiang Rai 57000, Thailand',
    kind:tr('Contemporary art and Buddhist-themed complex','当代佛教主题艺术建筑群','กลุ่มอาคารพุทธศิลป์ร่วมสมัย'),
    hours:tr('A daytime ticketed attraction; confirm current gate hours before the trip.','适合白天参观的景点，出发前确认当日开门时间。','เป็นสถานที่เที่ยวกลางวัน ตรวจเวลาเปิดประตูก่อนเดินทาง'),
    admission:tr('Paid admission may apply, with different rates by visitor category; check the current ticket board.','可能按游客类别收取不同门票，请以售票处当日价目为准。','อาจมีค่าเข้าตามประเภทผู้ชม ตรวจราคาปัจจุบันที่จุดจำหน่ายบัตร'),
    access:tr('South of Chiang Rai city; arrange a return car or taxi rather than walking from the bazaar.','位于清莱市区以南，应安排往返汽车或出租车，无法从夜市步行抵达。','อยู่ทางใต้ของเมือง ควรจัดรถไปกลับหรือแท็กซี่ ไม่ใช่ระยะเดินจากไนท์บาซาร์'),
    visit:tr('Begin with the main white facade and bridge, follow the designated visitor flow, then explore permitted surrounding art areas.','先看白色主建筑和桥梁，按现场动线行走，再游览允许进入的艺术空间。','เริ่มที่อาคารสีขาวและสะพาน เดินตามเส้นทางที่กำหนด แล้วชมพื้นที่ศิลป์ที่เปิด'),
    photo:tr('Frame the white complex from the approach; photography restrictions can apply inside.','从入口通道拍摄白色建筑整体，室内可能有限制摄影规定。','ถ่ายภาพรวมจากแนวทางเข้า ภายในอาจมีข้อห้ามถ่ายภาพ')
  },
  'baandam-museum': {
    address:'Baan Dam Museum, Nang Lae, Mueang Chiang Rai, Chiang Rai 57100, Thailand',
    kind:tr('Art museum and multi-building estate','艺术博物馆与多栋木构园区','พิพิธภัณฑ์ศิลปะและกลุ่มอาคาร'),
    hours:tr('Visit in daytime; verify museum opening and any temporary gallery closure.','建议白天前往，并核实馆舍开放和临时闭馆信息。','เที่ยวกลางวัน ตรวจเวลาเปิดและการปิดอาคารชั่วคราว'),
    admission:tr('Museum admission is subject to the current posted ticket price.','博物馆票价以现场公布的当日标准为准。','ค่าเข้าพิพิธภัณฑ์ตามราคาที่ประกาศหน้างาน'),
    access:tr('North of the city near Nang Lae; arrange a taxi, car or organized transport with return pickup.','位于市区以北 Nang Lae 一带，宜安排出租车、汽车或带返程接送的交通。','อยู่ทางเหนือใกล้นางแล ควรเตรียมแท็กซี่ รถยนต์ หรือรถรับกลับ'),
    visit:tr('Start at the principal dark-wood building, follow the open paths, compare roofs and art objects across the estate.','先游主要深色木构建筑，再沿开放道路比较园区屋顶与艺术陈设。','เริ่มอาคารไม้สีเข้มหลัก เดินตามทางเปิด และเปรียบเทียบหลังคากับงานศิลป์'),
    photo:tr('Wide shots show the black roof silhouettes; look for the relationship between buildings and green grounds.','广角呈现黑色屋顶轮廓，也可拍建筑与草地的空间关系。','มุมกว้างเห็นเงารูปหลังคาสีดำและความสัมพันธ์กับพื้นที่สีเขียว')
  },
  'singha-park': {
    address:'Singha Park Chiang Rai, Mae Kon, Mueang Chiang Rai, Chiang Rai 57000, Thailand',
    kind:tr('Agricultural landscape and leisure park','农业景观与休闲公园','สวนท่องเที่ยวเชิงเกษตรและพักผ่อน'),
    hours:tr('Grounds and paid activities may operate on different schedules; verify the day’s programme.','园区与收费活动时间可能不同，请查看当天活动安排。','พื้นที่สวนและกิจกรรมเสียเงินอาจเปิดต่างเวลา ตรวจตารางวันนั้น'),
    admission:tr('Entry and individual activities can have different conditions or prices; check at the park.','园区入场与各活动可能有不同收费规则，具体以园方公告为准。','การเข้าและกิจกรรมแต่ละประเภทอาจมีค่าใช้จ่ายต่างกัน ตรวจที่สวน'),
    access:tr('Outside central Chiang Rai toward Mae Kon; go by car or hired transport and plan the return.','位于市区外 Mae Kon 方向，建议乘车并提前安排回程。','อยู่นอกเมืองทางแม่กรณ์ ควรเดินทางด้วยรถและวางแผนขากลับ'),
    visit:tr('Begin at the entrance and lion sculpture, choose a viewpoint route, then add only activities running that day.','从入口和狮子雕像开始，串联观景点，再按当天实际运营情况选择活动。','เริ่มที่ทางเข้าและรูปปั้นสิงห์ เลือกเส้นทางจุดชมวิว แล้วเพิ่มกิจกรรมที่เปิดวันนั้น'),
    photo:tr('The lion landmark and long planting rows give strong foregrounds and leading lines.','狮子地标与绵延种植带适合作为前景和引导线。','รูปปั้นสิงห์และแถวพืชยาวเหมาะเป็นฉากหน้าและเส้นนำสายตา')
  },
  'saturday-walking-street': {
    address:'Thanalai Road, Wiang, Mueang Chiang Rai, Chiang Rai 57000, Thailand',
    kind:tr('Saturday evening pedestrian street market','周六晚间步行市集','ตลาดถนนคนเดินเย็นวันเสาร์'),
    hours:tr('Saturday evenings; timing and road closures can shift for weather or events.','主要在周六傍晚至夜间举办，封街与结束时间可能因天气活动调整。','เปิดช่วงเย็นถึงค่ำวันเสาร์ เวลาและการปิดถนนอาจเปลี่ยนตามอากาศหรืองาน'),
    admission:tr('No general market entry ticket; pay individual vendors for purchases.','市集通常无统一入场票，摊位购物单独支付。','โดยทั่วไปไม่มีบัตรเข้า ซื้อสินค้าจ่ายกับร้านค้า'),
    access:tr('On Thanalai Road in central Chiang Rai, distinct from the daily bazaar by Bus Terminal 1.','位于市中心 Thanalai Road，与第一巴士站旁每日夜市不是同一地点。','อยู่ถนนธนาลัยกลางเมือง คนละแห่งกับไนท์บาซาร์ข้างสถานีขนส่งแห่งที่ 1'),
    visit:tr('Enter from an active end of Thanalai Road, browse crafts and food, then return along the designated pedestrian route.','从 Thanalai Road 当晚开放的一端进入，浏览手作和小吃后沿步行区域返回。','เริ่มที่ปลายถนนธนาลัยที่เปิด เดินชมงานฝีมือและอาหาร แล้วกลับตามทางคนเดิน'),
    photo:tr('Capture a wide view of temporary stalls and lantern-lit street scenes while keeping the walking lane clear.','拍摄连续摊位与街道灯光，注意不要挡住人流。','ถ่ายมุมกว้างแนวร้านและแสงไฟ โดยไม่กีดขวางทางเดิน')
  },
  'sunday-happy-street': {
    address:'Sankhongnoi Road, Rop Wiang, Mueang Chiang Rai, Chiang Rai 57000, Thailand',
    kind:tr('Sunday neighbourhood walking-street market','周日社区步行街市集','ตลาดถนนคนม่วนวันอาทิตย์'),
    hours:tr('Sunday evenings, commonly around 16:00–23:00; check that the street market is operating.','通常周日约16:00–23:00举办，实际是否开市以当地公告为准。','โดยทั่วไปวันอาทิตย์ราว 16:00–23:00 ควรตรวจว่าจัดตลาดตามปกติ'),
    admission:tr('No general walking-street admission; food and shopping are paid separately.','通常无需统一入场费，餐饮购物自行付费。','โดยทั่วไปไม่เก็บค่าเข้าถนนคนเดิน ค่าอาหารและสินค้าแยกต่างหาก'),
    access:tr('Go to Sankhongnoi Road, not the Night Bazaar or Saturday Thanalai Road market.','导航至 Sankhongnoi Road，不要误去夜市或周六 Thanalai Road。','ไปถนนสันโค้งน้อย ไม่ใช่ไนท์บาซาร์หรือถนนธนาลัยวันเสาร์'),
    visit:tr('Locate the active market section, browse local food first, then walk the neighbourhood stalls at an easy pace.','先找到当晚开放的路段，尝试本地小吃，再慢慢逛社区摊位。','หาช่วงถนนที่จัดตลาด ชิมอาหารพื้นถิ่น แล้วเดินชมร้านในชุมชน'),
    photo:tr('Neighbourhood food stalls and the pedestrian street work well for street scenes; ask before close-up portraits.','社区小吃摊和步行人流适合街拍，人物特写先征求同意。','ร้านอาหารชุมชนและผู้เดินตลาดเหมาะถ่ายบรรยากาศ ขออนุญาตก่อนถ่ายบุคคลใกล้ ๆ')
  }
};
