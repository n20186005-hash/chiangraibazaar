import type { Locale } from './guides';
type Topic = Record<Locale,[string,string]>;
// Additional original, topic-specific guidance in every supported language.
export const topicDetails:Record<string,Topic> = {
 'night-bazaar-food-court':{
  en:['The shared dining area differs from a single restaurant: companions can buy from separate vendors and meet at one table. It is a convenient dinner stop after arriving at Bus Terminal 1.','First locate seating, then compare dishes being cooked fresh. Order in small rounds, leave space for dessert and clear the table for the next visitors.'],
  zh:['共享美食广场与单一餐厅不同，同伴可以各自点餐后共用一张桌子，适合从第一巴士站抵达后的第一顿晚餐。','先找座位，再比较现场制作的餐点；分批购买，留胃口给甜点，用餐后整理桌面。'],
  th:['ศูนย์อาหารเป็นพื้นที่นั่งร่วมกัน เพื่อนในกลุ่มซื้อจากร้านต่างกันแล้วมารวมโต๊ะได้ เหมาะกับมื้อเย็นหลังมาถึงสถานีขนส่งแห่งที่ 1','หาที่นั่งก่อน สำรวจอาหารปรุงสด สั่งทีละน้อย เหลือที่สำหรับขนมและเก็บโต๊ะให้คนถัดไป']},
 'khao-soi-guide':{
  en:['Khao soi blends a rich northern curry broth, soft egg noodles and crisp fried noodles. The contrasting textures are as important as the spices.','Chicken and beef versions may vary by stall. Taste the broth first, then add lime, pickled greens and chilli gradually.'],
  zh:['泰北咖喱面结合浓郁咖喱汤、软蛋面与脆炸面，口感层次与香料同样重要。','鸡肉、牛肉版本因店而异。先尝原汤，再逐渐加入青柠、酸菜与辣椒。'],
  th:['ข้าวซอยผสมน้ำแกงเข้มข้น เส้นไข่นุ่ม และเส้นทอดกรอบ ความต่างของเนื้อสัมผัสสำคัญไม่แพ้เครื่องเทศ','สูตรไก่หรือเนื้อแตกต่างกันตามร้าน ควรชิมก่อนเติมมะนาว ผักกาดดอง และพริกทีละน้อย']},
 'handicrafts-shopping':{
  en:['Northern Thai fabrics may reflect Lanna patterns and the skills of different communities, but handmade pieces and mass-produced souvenirs are often displayed side by side.','Check the back of a woven bag, edge stitching and material. Ask about the maker and care instructions when origin matters to you.'],
  zh:['泰北织品可能融合兰纳纹样及不同族群手艺，但手作与工厂纪念品会并列销售。','观察织包背面、收边与材质；若在意产地，可直接询问制作人和保养方式。'],
  th:['ผ้าภาคเหนือสะท้อนลายล้านนาและฝีมือหลายชุมชน แต่ของทำมือกับของผลิตโรงงานอาจวางขายร่วมกัน','ดูด้านหลังกระเป๋าทอ ตะเข็บ และวัสดุ ถามผู้ขายเรื่องผู้ผลิตและการดูแลเมื่อสนใจแหล่งที่มา']},
 'cultural-performances':{
  en:['The bazaar’s dining and live entertainment areas interact: music or dance may form part of a relaxed meal rather than a fixed-ticket theatre programme.','Check the stage notice after arrival. Keep performers’ paths clear and photograph from your seat without obstructing other diners.'],
  zh:['夜市美食与表演相互交织，音乐或舞蹈可能伴随晚餐，而非固定售票的剧院节目。','抵达后查看舞台公告，不挡表演者通道；从座位拍照，避免影响其他食客。'],
  th:['พื้นที่อาหารและการแสดงเชื่อมกัน ดนตรีหรือการรำอาจเป็นส่วนหนึ่งของมื้อเย็น ไม่ใช่รายการโรงละครขายบัตร','ดูประกาศเวทีเมื่อมาถึง ไม่กีดขวางนักแสดง และถ่ายจากที่นั่งโดยไม่บังคนอื่น']},
 'night-photography':{
  en:['Build a night-photo story from the entrance sign through layered merchandise displays, food preparation and people enjoying dinner. Each scene captures a different aspect of the bazaar.','On a phone, tap the brightest sign and lower exposure slightly. Avoid flash at stalls and ask permission for close-up portraits.'],
  zh:['夜景拍摄可按入口招牌、货架层次、现场料理与晚餐人群的顺序叙事，每张照片呈现不同侧面。','手机可点亮部略降曝光；避免直打闪光灯，近拍人物先征得同意。'],
  th:['เล่าเรื่องภาพจากป้ายทางเข้า ร้านสินค้าที่เรียงซ้อน การปรุงอาหาร และคนกินมื้อเย็น แต่ละฉากสื่อคนละมุม','ใช้มือถือแตะจุดสว่างแล้วลดแสงเล็กน้อย เลี่ยงแฟลชใส่ร้านและขออนุญาตก่อนถ่ายคนใกล้ ๆ']},
 'first-time-visit':{
  en:['For a first visit, divide the market into shopping lanes, dining seats and possible stage entertainment. Walk a loop before choosing where to spend time.','Remember the entrance you used from the bus-station side, set a shopping budget and confirm your route back to the hotel before late evening.'],
  zh:['首次游览可将市场分为购物摊道、餐饮座位及可能开放的表演区，先走一圈再决定停留重点。','记住巴士站一侧入口，设置购物预算，并在夜深前确认回酒店的路线。'],
  th:['ครั้งแรกให้แบ่งตลาดเป็นทางร้านค้า ที่นั่งอาหาร และเวทีที่อาจมีการแสดง เดินสำรวจก่อนเลือกจุดพัก','จำทางเข้าฝั่งสถานีขนส่ง ตั้งงบซื้อของ และตรวจเส้นทางกลับที่พักก่อนดึก']},
 'rainy-season-visit':{
  en:['Evening rain in Chiang Rai may be sudden. Crowded paths become slower when umbrellas open, and some stall edges remain wet despite covered areas.','Use a flexible order: eat under shelter during rain and browse open-air stalls when it eases. Wear shoes with grip and protect electronics.'],
  zh:['清莱傍晚可能突然下雨，大家撑伞后摊道通行变慢，即使有棚架边缘仍可能积水。','路线保持弹性：下雨先到遮棚用餐，雨缓再逛露天摊；穿防滑鞋并保护电子设备。'],
  th:['ฝนเย็นเชียงรายอาจมาเร็ว ทางเดินช้าลงเมื่อคนกางร่มและขอบร้านอาจเปียกแม้มีหลังคา','ยืดหยุ่นโดยกินใต้หลังคาระหว่างฝนแล้วค่อยเดินร้านกลางแจ้ง ใส่รองเท้ากันลื่นและดูแลอุปกรณ์']},
 'families-with-children':{
  en:['A short family circuit often works better than a complete market lap: choose one food stop, one craft lane and an easy-to-recognise meeting point.','Keep children away from cooking stoves and roadside motorcycles. Strollers can be awkward during peak crowds, so inspect aisle widths first.'],
  zh:['亲子路线不必走遍全场，选择一个用餐点、一段工艺摊道与明显的集合地标即可。','远离热炉与道路边的机车；高峰时婴儿车较难通行，先观察通道宽度。'],
  th:['ครอบครัวอาจเลือกเดินสั้น ๆ ผ่านจุดอาหาร ร้านหัตถกรรม และจุดนัดพบที่จำง่าย แทนการเดินทั่วตลาด','ดูแลเด็กห่างเตาร้อนและรถริมถนน รถเข็นเดินลำบากช่วงคนมาก ควรดูทางก่อน']},
 'getting-from-bus-terminal':{
  en:['Chiang Rai has two bus terminals. Terminal 1 is beside the bazaar downtown; Terminal 2 is farther away and serves some intercity journeys.','Read the terminal number on the ticket. For onward travel, confirm the departure terminal even if you arrived at Terminal 1.'],
  zh:['清莱有两座巴士站，第一站在夜市旁的市中心，第二站较远并承担部分城际班次。','查看车票站号；转车时必须再次确认出发站，不能假设与抵达站相同。'],
  th:['เชียงรายมีสถานีขนส่งสองแห่ง แห่งที่ 1 อยู่ข้างตลาดกลางเมือง ส่วนแห่งที่ 2 ไกลออกไปและรับบางเส้นทางระหว่างเมือง','ตรวจเลขสถานีบนตั๋ว และยืนยันสถานีขาออกอีกครั้งแม้จะมาถึงแห่งที่ 1']},
 'night-bazaar-vs-walking-street':{
  en:['The daily bazaar by Terminal 1 is distinct from the Saturday pedestrian market on Thanalai Road and Sunday Happy Street on Sankhongnoi Road.','Search each full market name on Maps. Weekday travellers should not expect the weekend events to be open; weekend visitors need travel time between separate sites.'],
  zh:['第一巴士站旁的每日夜市不同于 Thanalai Road 周六步行街和 Sankhongnoi Road 周日市集。','地图请搜完整市场名称。平日不可期待周末市集开门；周末连逛两处要预留交通时间。'],
  th:['ไนท์บาซาร์ข้างสถานีแห่งที่ 1 ต่างจากถนนคนเดินวันเสาร์บนถนนธนาลัยและถนนคนม่วนวันอาทิตย์บนสันโค้งน้อย','ค้นชื่อเต็มแต่ละตลาด วันธรรมดาอย่าคาดว่าตลาดวันหยุดเปิด และเผื่อเวลาเดินทางระหว่างแห่ง']},
 'airport-to-night-bazaar':{
  en:['The airport is north of central Chiang Rai while the bazaar is near the old city bus terminal. Travelling directly with luggage can simplify arrival.','Allow for baggage collection and hotel check-in before planning dinner. Confirm the driver is going to Chiang Rai Night Bazaar, not a weekend street market.'],
  zh:['清莱机场位于市中心以北，夜市靠近旧巴士站。带行李时直达车辆往往更方便。','将取行李与酒店入住计入时间；确认司机前往的是 Chiang Rai Night Bazaar 而不是周末步行街。'],
  th:['สนามบินอยู่เหนือกลางเมือง ส่วนตลาดใกล้สถานีขนส่งเก่า การเดินทางตรงเมื่อมีสัมภาระสะดวกกว่า','เผื่อเวลารับกระเป๋าและเช็กอิน ยืนยันกับคนขับว่าไปไนท์บาซาร์ ไม่ใช่ถนนคนเดินวันหยุด']},
 'vegetarian-food':{
  en:['Northern Thai vegetable dishes may contain fish sauce, shrimp paste or meat broth even when no meat is visible.','Ask individual vendors about ingredients; travellers with serious allergies should request explicit confirmation and avoid uncertain dishes.'],
  zh:['泰北蔬菜菜肴即使看不到肉，也可能加入鱼露、虾酱或肉汤。','向具体摊商询问原料，严重过敏者须明确确认，无法确定时避免食用。'],
  th:['อาหารผักภาคเหนืออาจมีน้ำปลา กะปิ หรือน้ำซุปเนื้อแม้มองไม่เห็นเนื้อ','ถามส่วนผสมจากผู้ขาย ผู้แพ้อาหารรุนแรงควรยืนยันชัดเจนและหลีกเลี่ยงอาหารที่ไม่แน่ใจ']},
};
