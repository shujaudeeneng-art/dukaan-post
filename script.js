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

  let posts = [];
  let hashtags = `#${biz}Shop #${pType} #${city} #SmallBusiness #Pakistan`;
  
  let hasDiscount = (discount && discount !== "No Discount");
  let discTextUr = hasDiscount ? `🔥 محدود وقت کی آفر: پائیں فلیٹ ${discount} کا بڑا ڈسکاؤنٹ! 🔥\n` : '';
  let discTextEn = hasDiscount ? `🔥 LIMITED TIME OFFER: Get Flat ${discount} OFF on everything! 🔥\n` : '';

  if (currentLang === 'ur') {
    // ==================== URDU LONG PROFESSIONAL POSTS ====================
    if (biz === 'mobile') {
      posts.push(`📱 سمارٹ فونز اور موبائل اسیسریز پر سب سے دھماکے دار آفرز! 📱\n\nکیا آپ اپنے پرانے فون سے تنگ ہیں یا ایک بہترین گیجٹ کی تلاش میں ہیں؟ ہم لائے ہیں آپ کے لیے بہترین سلوشن!\n\n${discTextUr}✨ ہمارے ہاں دستیاب ہے:\n✅ تمام برانڈز کے 100% اوریجنل اور آفیشل فونز\n✅ امپورٹڈ پریمیم بیک کورز اور گلاس پروٹیکٹرز\n✅ ہائی سپیڈ چارجرز اور اوریجنل ہینڈز فری\n✅ پروفیشنل موبائل ریپیرنگ (وارنٹی کے ساتھ)\n\n🌟 ہم کیوں؟\n✔️ مارکیٹ سے سستی اور مناسب قیمت\n✔️ تبدیل کرنے کی آسان سہولت (Easy Exchange Policy)\n✔️ چیکنگ وارنٹی اور بہترین کسٹمر سروس\n\n🚚 پورے ${city} میں فاسٹ ہوم ڈیلیوری کی سہولت بھی دستیاب ہے!\n\n📞 ابھی واٹس ایپ کریں یا دکان وزٹ کریں:\n👉 فون نمبر: ${contact}\n📍 لوکیشن: ${city}`);
    } 
    else if (biz === 'clothing') {
      posts.push(`👗 فیشن، کوالٹی اور پریمیم فیبرک اب آپ کے بجٹ میں! 👚\n\nاپنے لک کو مزید خوبصورت اور سٹائلش بنائیں۔ ہمارے نئے اور خوبصورت کلیکشن پر سیل اور فیشن کا زبردست ملاپ!\n\n${discTextUr}✨ ہماری خاصیت:\n✅ 100% گارنٹیڈ کپڑا اور پریمیم کوالٹی ٹیچنگ\n✅ رنگ اور بر کی مکمل وارنٹی\n✅ ٹرینڈنگ اور بالکل نئے یونیک ڈیزائنز\n✅ لیڈیز، جینٹس اور کڈز کی وسیع ورائٹی\n\n🌟 خاص آفر:\nاگر کپڑے میں کوئی بھی نقص ہو تو ہم بغیر کسی سوال کے تبدیل کر کے دیں گے!\n\n🚚 آپ کے گھر تک محفوظ ڈیلیوری (${city}):\n👉 ابھی اپنا پسندیدہ سوٹ بک کرنے کے لیے واٹس ایپ کریں: ${contact}\n📍 دکان کا پتا: ${city}`);
    } 
    else if (biz === 'restaurant') {
      posts.push(`🍽️ لاجواب ذائقہ، صاف ستھرا ماحول اور مٹھی بھر خوشیاں! 🍔\n\nکیا آپ کو بھوک لگی ہے؟ تو دیر کس بات کی! ہم لائے ہیں آپ کے شہر کا سب سے لذیذ اور معیاری کھانا۔\n\n${discTextUr}✨ ہمارے مینو میں شامل ہے:\n✅ جوسی برگرز اور کرسپی فرائز\n✅ روایتی کڑاہی، بار بی کیو اور دیسی کھانے\n✅ ہائیجینک کچن اور 100% تازہ گوشت کا استعمال\n✅ فیملی کے بیٹھنے کے لیے بہترین اور پرسکون ماحول\n\n🌟 کسٹمر سروس:\nہم کھانے کے ذائقے اور صفائی پر کوئی سمجھوتہ نہیں کرتے۔ ہر آرڈر گرما گرم اور تازہ تیار کیا جاتا ہے۔\n\n🛵 گھر بیٹھے گرما گرم کھانا منگوائیں:\n📞 آرڈر کے لیے ابھی کال یا واٹس ایپ کریں: ${contact}\n📍 لوکیشن: ${city} (فاسٹ ہوم ڈیلیوری دستیاب)`);
    } 
    else {
      // General & Other categories
      posts.push(`🏪 اب کوالٹی اور بچت ایک ساتھ — پریمیم پروڈکٹس مارکیٹ سے کم ریٹ پر! 📦\n\nہمیشہ کی طرح بہترین معیار اور سستے دام۔ ہم کسٹمر کے اعتماد کو سب سے اوپر رکھتے ہیں۔\n\n${discTextUr}✨ ہماری سروسز کی خصوصیات:\n✅ 100% اوریجنل اور پریمیم کوالٹی کی اشیاء\n✅ مارکیٹ سے چیلنجڈ کم قیمتیں\n✅ کسٹمر سپورٹ اور آسان واپسی کی سہولت\n\n🚚 ہوم ڈیلیوری کی سہولت بھی دستیاب ہے تاکہ آپ کا وقت بچے!\n\n📞 مزید تفصیلات اور آرڈر کے لیے رابطہ کریں:\n👉 واٹس ایپ: ${contact}\n📍 لوکیشن: ${city}`);
    }
  } 
  else {
    // ==================== ENGLISH LONG PROFESSIONAL POSTS ====================
    if (biz === 'mobile') {
      document.body.dir = "ltr";
      posts.push(`📱 Upgrade Your Tech Game With The Best Mobile Deals! 📱\n\nLooking for a new smartphone or high-quality accessories? You are at the right place!\n\n${discTextEn}✨ What We Offer:\n✅ 100% Original & Official Mobile Phones\n✅ Premium Imported Back Covers & Tempered Glass\n✅ High-Speed Branded Chargers & Audio Devices\n✅ Expert Repairing Services with warranty\n\n🌟 Why Choose Us?\n✔️ Market Competitive Rates\n✔️ Easy Replacement Policy\n✔️ Exceptional After-Sales Support\n\n🚚 Fast Home Delivery Available across ${city}!\n\n📞 Order Now via WhatsApp:\n👉 Contact: ${contact}\n📍 Location: ${city}`);
    } 
    else if (biz === 'clothing') {
      posts.push(`👗 Experience Premium Fabric & Trendy Fashion Within Your Budget! 👚\n\nRedefine your style with our premium clothing collection. Perfectly crafted for your comfort and elegance.\n\n${discTextEn}✨ Features of Our Collection:\n✅ 100% Guaranteed Premium Fabric & Stitching\n✅ No-Fade Color & Material Warranty\n✅ Latest Trendy Designs for all age groups\n\n🌟 Our Promise:\nEasy size exchange and hassle-free returns if you are not satisfied!\n\n🚚 Safe & Fast Shipping to your doorstep in ${city}.\n📲 WhatsApp us now to get pictures & place your order: ${contact}`);
    } 
    else if (biz === 'restaurant') {
      posts.push(`🍽️ Craving Something Delicious? Taste the Best Food in Town! 🍔\n\nSatisfy your hunger with our hygienic, fresh, and mouth-watering dishes made just for you.\n\n${discTextEn}✨ On Our Menu:\n✅ Premium Quality Burgers, Pizzas & Platters\n✅ Traditional & Authentic Local Cuisine\n✅ 100% Fresh Ingredients & Hygienic Kitchen\n\n🛵 Get your food delivered HOT and FRESH!\n📞 Call or WhatsApp now to order: ${contact}\n📍 Location: ${city}`);
    } 
    else {
      posts.push(`🏪 Premium Quality & Unbeatable Savings — Shop With Confidence! 📦\n\nWe bring you top-tier products at prices that fit your pocket perfectly.\n\n${discTextEn}✨ Why Shop From Us?\n✅ 100% Original Products\n✅ Budget-Friendly Rates\n✅ Reliable Customer Service\n\n🚚 Convenient delivery services to save your valuable time!\n📞 Get in touch today:\n👉 WhatsApp: ${contact}\n📍 Location: ${city}`);
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
    textDiv.style.textAlign = currentLang === 'ur' ? 'right' : 'left';
    textDiv.textContent = postText;

    const hashtagDiv = document.createElement('div');
    hashtagDiv.className = 'hashtag-row';
    hashtagDiv.style.textAlign = currentLang === 'ur' ? 'right' : 'left';
    hashtagDiv.textContent = hashtags;

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = '📋 Copy Full Post';
    copyBtn.onclick = function() {
      navigator.clipboard.writeText(postText + '\n\n' + hashtags);
      copyBtn.textContent = '✅ Copied!';
      setTimeout(() => { copyBtn.textContent = '📋 Copy Full Post'; }, 1500);
    };

    card.appendChild(textDiv);
    card.appendChild(hashtagDiv);
    card.appendChild(copyBtn);
    resultsEl.appendChild(card);
  });
}
