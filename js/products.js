// 鞋類產品資料庫 (Centralized Products Database)
const PRODUCTS = [
  // --- 運動休閒鞋 (sports-casual) ---
  {
    id: "sport-1",
    name: "Apex 飛織輕盈慢跑鞋",
    category: "sports-casual",
    categoryName: "運動休閒鞋",
    price: 3280,
    image: "images/products/郭以樂鞋子專賣店-1號運動鞋.png",
    description: "採用最新飛織高彈力鞋面，結合超輕量避震大底，為您的雙足提供極致的包覆性與彈性支撐，不論是長距離慢跑或日常通勤皆能輕鬆駕馭。",
    specs: {
      "鞋面材質": "高彈力科技飛織網布",
      "鞋底材質": "高回彈 EVA 減震防滑大底",
      "單隻重量": "240g (以 US9 為準)",
      "特色功能": "超高透氣、極致輕量、動態緩震"
    }
  },
  {
    id: "sport-2",
    name: "Classic 簡約小白鞋",
    category: "sports-casual",
    categoryName: "運動休閒鞋",
    price: 2680,
    image: "images/products/郭以樂鞋子專賣店-2號運動鞋.png",
    description: "精選頂級牛皮打造，金屬質感細節點綴，搭配耐磨橡膠平底，修飾腳型且百搭舒適，是您衣櫃中不可或缺的日常時尚單品。",
    specs: {
      "鞋面材質": "特級軟牛皮",
      "鞋底材質": "耐磨耐壓高分子橡膠平底",
      "單隻重量": "310g",
      "特色功能": "經典百搭、防潑水鞋面、記憶海綿鞋墊"
    }
  },
  {
    id: "sport-3",
    name: "Street High-Top 街頭潮流高筒板鞋",
    category: "sports-casual",
    categoryName: "運動休閒鞋",
    price: 3680,
    image: "images/products/郭以樂鞋子專賣店-3號運動鞋.png",
    description: "紅黑撞色麂皮拼接，極具個性的潮流外觀，厚底設計拉長腿部線條，專為街頭時尚與滑板愛好者打造的吸睛鞋款。",
    specs: {
      "鞋面材質": "進口麂皮與高級合成皮拼接",
      "鞋底材質": "加厚防震生膠大底",
      "單隻重量": "420g",
      "特色功能": "街頭潮流高筒、加厚腳踝防護、防滑耐磨"
    }
  },
  {
    id: "sport-4",
    name: "AirWalk 輕量健走懶人鞋",
    category: "sports-casual",
    categoryName: "運動休閒鞋",
    price: 2280,
    image: "images/products/郭以樂鞋子專賣店-4號運動鞋.png",
    description: "一腳蹬設計，極致輕盈且穿脫便利，深橡膠針織鞋面完美貼合腳背，搭配超柔軟透氣乳膠鞋墊，走再多路也不易疲累。",
    specs: {
      "鞋面材質": "高彈性透氣針織棉",
      "鞋底材質": "極致柔軟彎折橡膠底",
      "單隻重量": "190g",
      "特色功能": "無綁帶免穿脫、超輕踩屎感、超高透氣性"
    }
  },

  // --- 皮鞋 (leather) ---
  {
    id: "leather-1",
    name: "Royal Premium 經典紳士雕花牛皮鞋",
    category: "leather",
    categoryName: "皮鞋",
    price: 5800,
    image: "images/products/郭以樂鞋子專賣店-1號皮鞋.png",
    description: "經典德比與雕花 Oxford 翼紋設計，深邃復古棕色牛皮展現匠人手工擦色質感，是正式商務與隆重場合的精緻尊榮之選。",
    specs: {
      "鞋面材質": "義大利進口手工擦色牛皮",
      "鞋底材質": "耐磨橡膠與木質複合底",
      "單隻重量": "450g",
      "特色功能": "手工巴洛克雕花、復古漸層擦色、商務正裝必備"
    }
  },
  {
    id: "leather-2",
    name: "Luxury Noir 漆皮商務德比鞋",
    category: "leather",
    categoryName: "皮鞋",
    price: 5200,
    image: "images/products/郭以樂鞋子專賣店-2號皮鞋.png",
    description: "經典商務德比鞋型，優雅黑色亮面皮革，搭配吸濕排汗全真皮內裡與減壓氣墊鞋墊，讓您在商務談判中盡顯不凡氣度。",
    specs: {
      "鞋面材質": "頂級亮面漆皮牛皮",
      "鞋底材質": "複合減壓橡膠防滑大底",
      "單隻重量": "430g",
      "特色功能": "鏡面光澤、減壓氣墊、全真皮舒適內裡"
    }
  },
  {
    id: "leather-3",
    name: "Suede Comfort 麂皮樂福鞋",
    category: "leather",
    categoryName: "皮鞋",
    price: 4500,
    image: "images/products/郭以樂鞋子專賣店-3號皮鞋.png",
    description: "精選柔軟小牛麂皮，手縫馬克線工藝，免鞋帶 Slip-on 設計，散發隨性優雅的歐式休閒氣息，完美演繹 Smart Casual 精神。",
    specs: {
      "鞋面材質": "頂級小牛麂皮 (Suede)",
      "鞋底材質": "豆豆造型防滑橡膠大底",
      "單隻重量": "350g",
      "特色功能": "免綁帶穿脫、輕量柔軟、雅痞休閒"
    }
  },
  {
    id: "leather-4",
    name: "Chelsea Elite 精英切爾西皮靴",
    category: "leather",
    categoryName: "皮鞋",
    price: 6200,
    image: "images/products/郭以樂鞋子專賣店-4號皮鞋.png",
    description: "深酒紅亮澤牛皮，經典高彈性側邊鬆緊帶，俐落的中筒線條設計，既保暖又修飾腿型，輕鬆打造英倫雅痞風尚。",
    specs: {
      "鞋面材質": "進口高質感小牛皮",
      "鞋底材質": "防滑橡膠層疊木跟",
      "單隻重量": "490g",
      "特色功能": "高彈性鬆緊帶、俐落修身、英倫休閒風"
    }
  },

  // --- 涼鞋與拖鞋 (sandals-slippers) ---
  {
    id: "sandal-1",
    name: "Metro Slide 雙帶真皮扣帶涼鞋",
    category: "sandals-slippers",
    categoryName: "涼鞋與拖鞋",
    price: 1880,
    image: "images/products/郭以樂鞋子專賣店-1號涼鞋.png",
    description: "雙寬帶精緻牛皮鞋面，配備可調節防鏽金屬搭扣，結合符合人體工學的貼合中底，完美兼顧夏日隨興與質感生活。",
    specs: {
      "鞋面材質": "精選厚實真皮寬帶",
      "鞋底材質": "EVA 防滑耐磨貼合鞋底",
      "單隻重量": "280g",
      "特色功能": "金屬可調節扣、人體工學足弓支撐"
    }
  },
  {
    id: "sandal-2",
    name: "Explorer 戶外越野機能涼鞋",
    category: "sandals-slippers",
    categoryName: "涼鞋與拖鞋",
    price: 2480,
    image: "images/products/郭以樂鞋子專賣店-2號拖鞋.png",
    description: "軍綠色高強度尼龍織帶，配備三點式快速調節扣具，防滑耐磨戶外齒紋大底，提供出色的戶外抓地力與腳底防護。",
    specs: {
      "鞋面材質": "防潑水高強度尼龍織帶",
      "鞋底材質": "越野級耐磨抓地橡膠大底",
      "單隻重量": "320g",
      "特色功能": "三向織帶調節、快乾排水設計、強悍抓地"
    }
  },
  {
    id: "sandal-3",
    name: "Cork-Soft 軟木舒適拖鞋",
    category: "sandals-slippers",
    categoryName: "涼鞋與拖鞋",
    price: 1680,
    image: "images/products/郭以樂鞋子專賣店-3號涼鞋.png",
    description: "經典麂皮雙帶軟木拖鞋，軟木與乳膠混合中底能隨穿著時間愈發貼合您的腳型，居家休閒與外出踏青皆合適的極佳選擇。",
    specs: {
      "鞋面材質": "超細纖維麂皮質感織帶",
      "鞋底材質": "天然軟木中底 + EVA 減震防滑底",
      "單隻重量": "260g",
      "特色功能": "自動塑形軟木、極佳減震、經典不敗款"
    }
  },
  {
    id: "sandal-4",
    name: "Cloud Slide 極簡輕量防水拖鞋",
    category: "sandals-slippers",
    categoryName: "涼鞋與拖鞋",
    price: 980,
    image: "images/products/郭以樂鞋子專賣店-4號涼鞋.png",
    description: "一體成型極簡美學設計，特選超輕量防水 EVA 材質，厚底緩震提供踩在雲端般的柔軟腳感，防滑速乾，極致解壓。",
    specs: {
      "鞋面材質": "一體成型高密度防水 EVA",
      "鞋底材質": "防滑排水波紋 EVA 大底",
      "單隻重量": "150g",
      "特色功能": "一體成型防水、加厚減壓中底、極度輕盈"
    }
  },

  // --- 男性特色鞋款 (mens-special) ---
  {
    id: "men-special-1",
    name: "Quantum Cyber 賽博朋克極限籃球鞋",
    category: "mens-special",
    categoryName: "男性特色鞋款",
    price: 4880,
    image: "images/products/郭以樂鞋子專賣店-1號男生特別款.png",
    description: "賽博霓虹橙與暗紫撞色設計，高筒鞋領緊密包覆踝骨，配備科技避震氮氣中底與側向抗扭防翻 TPU 支撐，助您在球場上展現驚人爆發力。",
    specs: {
      "鞋面材質": "科技編織網布 + 立體 TPU 熱熔防護",
      "鞋底材質": "耐磨防滑人字紋橡膠大底",
      "單隻重量": "460g",
      "特色功能": "超高筒腳踝防護、超臨界氮氣緩震、側向防翻 TPU"
    }
  },
  {
    id: "men-special-2",
    name: "Carbon Track 碳纖板越野跑鞋",
    category: "mens-special",
    categoryName: "男性特色鞋款",
    price: 5580,
    image: "images/products/郭以樂鞋子專賣店-2號男生特別款.png",
    description: "內嵌全掌碳纖維推進板，防撕裂防潑水科技鞋面，結合強悍高抓地橡膠外底，專為崎嶇山徑與極限越野跑者量身訂製。",
    specs: {
      "鞋面材質": "Ripstop 防撕裂防潑水科技網布",
      "鞋底材質": "全掌碳纖維板 + Vibram 齒紋抓地大底",
      "單隻重量": "330g",
      "特色功能": "全掌碳纖推進板、超高回彈緩震、防沙石領口"
    }
  },

  // --- 女性特色鞋款 (womens-special) ---
  {
    id: "women-special-1",
    name: "Aurora Rose 金屬玫瑰尖頭高跟鞋",
    category: "womens-special",
    categoryName: "女性特色鞋款",
    price: 4280,
    image: "images/products/郭以樂鞋子專賣店-1號女生特別款.png",
    description: "迷人的玫瑰金屬光澤，流線型尖頭與性感 9cm 細高跟設計，修飾雙腿曲線，讓您在任何正式晚宴或商務場合中皆能閃耀奪目。",
    specs: {
      "鞋面材質": "超細纖維鏡面金屬質感皮料",
      "鞋底材質": "防滑牛筋耐磨鞋底",
      "單隻重量": "220g",
      "特色功能": "9cm 黃金比例細高跟、減壓真皮腳掌墊、鏡面金屬光澤"
    }
  },
  {
    id: "women-special-2",
    name: "Chunky Retro 厚底復古拼接老爹鞋",
    category: "womens-special",
    categoryName: "女性特色鞋款",
    price: 3380,
    image: "images/products/郭以樂鞋子專賣店-2號女生特別款.png",
    description: "馬卡龍粉與奶油色麂皮層次拼接，搭載老爹鞋標誌性的加厚鬆糕底，視覺增高 5 公分，完美結合了街頭休閒感與復古少女情懷。",
    specs: {
      "鞋面材質": "磨砂麂皮與透氣網布層次拼接",
      "鞋底材質": "超輕量耐磨發泡橡膠底",
      "單隻重量": "380g",
      "特色功能": "視覺增高 5cm、復古拼接造型、透氣減重設計"
    }
  }
];

// 透過 ID 取得特定產品資料
function getProductById(id) {
  return PRODUCTS.find(product => product.id === id);
}

// 透過分類取得產品列表
function getProductsByCategory(category) {
  return PRODUCTS.filter(product => product.category === category);
}

// 格式化價格
function formatPrice(price) {
  return "NT$ " + price.toLocaleString();
}
