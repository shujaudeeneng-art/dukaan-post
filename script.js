let currentLang = 'ur';

const langUrBtn = document.getElementById('langUrBtn');
const langEnBtn = document.getElementById('langEnBtn');

if(langUrBtn && langEnBtn) {
  langUrBtn.addEventListener('click', () => { currentLang = 'ur'; langUrBtn.classList.add('active'); langEnBtn.classList.remove('active'); });
  langEnBtn.addEventListener('click', () => { currentLang = 'en'; langEnBtn.classList.add('active'); langUrBtn.classList.remove('active'); });
}

const BUSINESS_THEMES = {
  clothing: { image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80", title: "👗 Kapron Ki Dukaan Marketing Tool", sub: "New Arrivals aur Sales ke liye behtareen posts banayein." },
  mobile: { image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000&q=80", title: "📱 Mobile Shop Status Maker", sub: "Naye Smartphones aur Deals ko WhatsApp par phelayein." },
  restaurant: { image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80", title: "🍽️ Restaurant & Food Point Post Maker", sub: "Apni mazaidaar deals aur discounts ke liye posts banayein." },
  bakery: { image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000&q=80", title: "🍰 Bakery & Sweets Marketing Tool", sub: "Fresh Cakes aur deals ke liye status lagayein." },
  cosmetics: { image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1000&q=80", title: "💄 Cosmetics & Beauty Products", sub: "Branded makeup aur skin care offers ko promote karein." },
  electronics: { image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=1000&q=80", title: "📺 Home Electronics & Appliances", sub: "AC, Fridge, aur LEDs par chalne wali offers live karein." },
  grocery: { image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80", title: "🛒 Grocery & Karyana Store Status Tool", sub: "Monthly bachat bazar aur daily grocery offers share karein." },
  shoes: { image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1000&q=80", title: "👟 Jooton Ki Dukaan Footwear Tool", sub: "Ladies, Gents aur Kids shoes ke naye stock ki marketing karein." },
  jewelry: { image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&q=80", title: "💍 Jewelry & Gold Shop Social Posts", sub: "Bridal jewelry aur designs par promotional posts banayein." },
  general: { image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1000&q=80", title: "🏪 Apni Dukaan Ki Marketing Ke Liye Posts Banayein", sub: "Sirf 10 seconds mein Facebook aur WhatsApp status ke liye professional captions generate karein." }
};

const bizSelect = document.getElementById('businessType');
if(bizSelect) {
  bizSelect.addEventListener('change', function(e) {
    const selectedTheme = BUSINESS_THEMES[e.target.value] || BUSINESS_THEMES['general'];
    const banner = document.getElementById('heroBanner');
    if(banner) banner.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.75)), url('${selectedTheme.image}')`;
    if(document.getElementById('dynamicTitle')) document.getElementById('dynamicTitle').textContent = selectedTheme.title;
    if(document.getElementById('dynamicSub')) document.getElementById('dynamicSub').textContent = selectedTheme.sub;
  });
}

const BUSINESS_LABELS = {
  ur: { clothing: "کپڑوں", mobile: "موبائل", restaurant: "کھانے", bakery: "بیکری آئٹمز", cosmetics: "کاسمیٹکس", electronics: "الیکٹرانکس", grocery: "گروسری", shoes: "جوتوں", jewelry: "زیورات", general: "پروڈکٹس" },
  en: { clothing: "clothing", mobile: "mobile phone", restaurant: "food", bakery: "bakery items", cosmetics: "cosmetics", electronics: "electronics", grocery: "grocery", shoes: "footwear", jewelry: "jewelry", general: "products" }
};

const BUSINESS_EMOJI = { clothing: "👗👚", mobile: "📱", restaurant: "🍽️", bakery: "🍰", cosmetics: "💄", electronics: "📺", grocery: "🛒", shoes: "👟", jewelry: "💍", general: "📦" };

function generatePost() {
  const biz = document.getElementById('businessType').value;
  const pType = document.getElementById('postType').value;
  let discount = document.getElementById('discount').value;
  const city = document.getElementById('city').value;
  const contact = document.getElementById('contact').value;

  if(!city || !contact) {
    alert("Please enter City and Contact Number!");
    return;
  }

  const emoji = BUSINESS_EMOJI[biz] || "🏪";
  const labelUr = BUSINESS_LABELS['ur'][biz] || "پروڈکٹس";
  const labelEn = BUSINESS_LABELS['en'][biz] || "products";

  let posts = [];
  let hashtags = `#${biz}Shop #${pType} #${city} #DukaanPost`;

  // Handle optional discount
  let hasDiscount = (discount && discount !== "No Discount");
  let discountLineUr = hasDiscount ? `🎉 آپ کے لیے خصوصی آفر: ${discount} کی بڑی بچت! 🎉\n` : '';
  let discountLineEn = hasDiscount ? `🎉 Special Offer: Get ${discount} today! 🎉\n` : '';

  if (currentLang === 'ur') {
    if (pType === 'sale') {
      posts.push(`📢 بڑی خوشخبری! ہماری ${labelUr} کی دکان پر شاندار سیل شروع ہو چکی ہے۔ ${emoji}\n\n${discountLineUr}📍 مقام: ${city}\n📞 ابھی رابطہ کریں: ${contact}\n\nجلدی کریں، یہ آفر محدود وقت کے لیے ہے!`);
    } else if (pType === 'arrival') {
      posts.push(`✨ نیا سٹاک آگیا! ✨\nہماری دکان پر ${labelUr} کا بالکل لیٹسٹ سٹاک پہنچ چکا ہے۔ ${emoji}\n\n${discountLineUr}📍 شہر: ${city}\n📲 تصاویر اور تفصیلات کے لیے واٹس ایپ کریں: ${contact}`);
    } else if (pType === 'eid') {
      posts.push(`🌙 عید مبارک سپیشل آفر! 🌙\nاس عید پر خریدیں سب سے بہترین ${labelUr} کی ورائٹی۔ ${emoji}\n\n${discountLineUr}📍 لوکیشن: ${city}\n📞 بکنگ کے لیے رابطہ کریں: ${contact}`);
    } else if (pType === 'weekend') {
      posts.push(`🔥 ویک اینڈ دھماکہ ڈیل! 🔥\nصرف اس ہفتے اور اتوار کے لیے ہماری ${labelUr} کی پروڈکٹس پر زبردست آفر۔ ${emoji}\n\n${discountLineUr}📍 لوکیشن: ${city}\n📞 ابھی کال یا واٹس ایپ کریں: ${contact}`);
    } else if (pType === 'clearance') {
      posts.push(`⚠️ سٹاک کلیئرنس سیل! ⚠️\n${labelUr} کا تمام سٹاک اب فیکٹری ریٹ پر حاصل کریں۔ ${emoji}\n\n${discountLineUr}📍 ایڈریس: ${city}\n📞 رابطہ نمبر: ${contact}`);
    }
  } else {
    if (pType === 'sale') {
      posts.push(`📢 Big News! Mega Sale is now LIVE at our ${labelEn} store. ${emoji}\n\n${discountLineEn}📍 Location: ${city}\n📞 WhatsApp: ${contact}\nHurry up!`);
    } else if (pType === 'arrival') {
      posts.push(`✨ New Arrival! ✨\nDiscover the latest collection of ${labelEn} at our shop. ${emoji}\n\n${discountLineEn}📍 City: ${city}\n📲 WhatsApp for prices: ${contact}`);
    } else if (pType === 'eid') {
      posts.push(`🌙 Eid Mubarak Special Deal! 🌙\nCelebrate this Festive Season with the best quality ${labelEn}. ${emoji}\n\n${discountLineEn}📍 Address: ${city}\n📞 Book yours now: ${contact}`);
    } else if (pType === 'weekend') {
      posts.push(`🔥 Weekend Dhamaka Offer! 🔥\nExclusive deals on all ${labelEn} available only for this weekend. ${emoji}\n\n${discountLineEn}📍 Location: ${city}\n📲 Order via WhatsApp: ${contact}`);
    } else if (pType === 'clearance') {
      posts.push(`⚠️ Stock Clearance Sale! ⚠️\nEverything must go! Get premium ${labelEn} at low prices. ${emoji}\n\n${discountLineEn}📍 Location: ${city}\n📞 Call now: ${contact}`);
    }
  }

  const resultsEl = document.getElementById('results');
  resultsEl.innerHTML = '';

  posts.forEach((postText) => {
    const card = document.createElement('div');
    card.className = 'result-card';

    const textDiv = document.createElement('div');
    textDiv.className = 'result-text';
    textDiv.dir = currentLang === 'ur' ? 'rtl' : 'ltr';
    textDiv.textContent = postText;

    const hashtagDiv = document.createElement('div');
    hashtagDiv.className = 'hashtag-row';
    hashtagDiv.textContent = hashtags;

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = '📋 Copy Post';
    copyBtn.onclick = function() {
      navigator.clipboard.writeText(postText + '\n\n' + hashtags);
      copyBtn.textContent = '✅ Copied!';
      setTimeout(() => { copyBtn.textContent = '📋 Copy Post'; }, 1500);
    };

    card.appendChild(textDiv);
    card.appendChild(hashtagDiv);
    card.appendChild(copyBtn);
    resultsEl.appendChild(card);
  });
}
