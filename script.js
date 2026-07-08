// ==========================================================
// DUKAAN POST — Social Media Post Generator for Shopkeepers
// FIXED: Optional discount crash issue resolved
// ==========================================================

document.getElementById('year').textContent = new Date().getFullYear();

let currentLang = 'ur';

const langUrBtn = document.getElementById('langUrBtn');
const langEnBtn = document.getElementById('langEnBtn');
if(langUrBtn && langEnBtn) {
  langUrBtn.addEventListener('click', () => setLang('ur'));
  langEnBtn.addEventListener('click', () => setLang('en'));
}

function setLang(lang) {
  currentLang = lang;
  if(langUrBtn && langEnBtn) {
    langUrBtn.classList.toggle('active', lang === 'ur');
    langEnBtn.classList.toggle('active', lang === 'en');
  }
}

// ---------------- DYNAMIC BANNER & IMAGE MANAGEMENT ----------------
const BUSINESS_THEMES = {
  clothing: {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80",
    title: "👗 Kapron Ki Dukaan Marketing Tool",
    sub: "New Arrivals, Boutique Sales aur Eid Offers ke liye behtareen posts banayein."
  },
  mobile: {
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000&q=80",
    title: "📱 Mobile & Accessories Shop Status Maker",
    sub: "Naye Smartphones, Deals aur Repairing Services ko WhatsApp par phelayein."
  },
  restaurant: {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80",
    title: "🍽️ Restaurant & Food Point Post Maker",
    sub: "Apni Fast Food, Desi Khano ki deals aur discounts ke liye mazaidaar posts banayein."
  },
  bakery: {
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000&q=80",
    title: "🍰 Bakery & Sweets Marketing Tool",
    sub: "Fresh Cakes, Sweets aur Halwa Puri ki deals ke liye status lagayein."
  },
  cosmetics: {
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1000&q=80",
    title: "💄 Cosmetics & Beauty Products Post Generator",
    sub: "Branded makeup aur skin care offers ko dukaandar ab khud promote karein."
  },
  electronics: {
    image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=1000&q=80",
    title: "📺 Home Electronics & Appliances Generator",
    sub: "AC, Fridge, LED TVs aur appliances par chalne wali offers ko live karein."
  },
  grocery: {
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80",
    title: "🛒 Grocery & Karyana Store Status Tool",
    sub: "Monthly bachat bazar aur daily grocery items ke rates aur offers share karein."
  },
  shoes: {
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1000&q=80",
    title: "👟 Jooton Ki Dukaan (Footwear) Post Generator",
    sub: "Ladies, Gents aur Kids shoes ke naye stock ki digital marketing karein."
  },
  jewelry: {
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&q=80",
    title: "💍 Jewelry & Gold Shop Social Posts",
    sub: "Bridal jewelry, rings aur gold designs par chalne wali promotional posts banayein."
  },
  general: {
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1000&q=80",
    title: "🏪 Apni Dukaan Ki Marketing Ke Liye Posts Banayein",
    sub: "Sirf 10 seconds mein Facebook aur WhatsApp status ke liye professional captions generate karein."
  }
};

const bizSelect = document.getElementById('businessType');
if(bizSelect) {
  bizSelect.addEventListener('change', function(e) {
    const selectedTheme = BUSINESS_THEMES[e.target.value] || BUSINESS_THEMES['general'];
    const banner = document.getElementById('heroBanner');
    if(banner) {
      banner.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url('${selectedTheme.image}')`;
    }
    const dTitle = document.getElementById('dynamicTitle');
    const dSub = document.getElementById('dynamicSub');
    if(dTitle) dTitle.textContent = selectedTheme.title;
    if(dSub) dSub.textContent = selectedTheme.sub;
  });
}

// ---------------- WORDING DATA FOR POSTS ----------------
const BUSINESS_LABELS = {
  ur: {
    clothing: "کپڑوں", mobile: "موبائل", restaurant: "کھانے", bakery: "بیکری آئٹمز",
    cosmetics: "کاسمیٹکس", electronics: "الیکٹرانکس", grocery: "گروسری",
    shoes: "جوتوں", jewelry: "زیورات", general: "پروڈکٹس"
  },
  en: {
    clothing: "clothing", mobile: "mobile phone", restaurant: "food", bakery: "bakery items",
    cosmetics: "cosmetics", electronics: "electronics", grocery: "grocery",
    shoes: "footwear", jewelry: "jewelry", general: "products"
  }
};

const BUSINESS_EMOJI = {
  clothing: "👗👚", mobile: "📱", restaurant: "🍽️", bakery: "🍰",
  cosmetics: "💄", electronics: "📺", grocery: "🛒", shoes: "👟", jewelry: "💍", general: "📦"
};

// ---------------- GENERATION LOGIC ----------------
const genForm = document.getElementById('generatorForm');
if(genForm) {
  genForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const biz = document.getElementById('businessType').value;
    const pType = document.getElementById('postType').value;
    const discount = document.getElementById('discount').value || ""; // Default empty string if blank
    const city = document.getElementById('city').value;
    const contact = document.getElementById('contact').value;

    const emoji = BUSINESS_EMOJI[biz] || "🏪";
    const labelUr = BUSINESS_LABELS['ur'][biz] || "پروڈکٹس";
    const labelEn = BUSINESS_LABELS['en'][biz] || "products";

    let posts = [];
    let hashtags = `#${biz}Shop #${pType} #PakistanBusiness #${city} #DukaanPost`;

    if (currentLang === 'ur') {
      // ---- URDU TEMPLATES ----
      let discountLine = discount ? `🎉 آپ کے لیے خصوصی آفر: ${discount} کی بڑی بچت! 🎉\n` : '';

      if (pType === 'sale') {
        posts.push(
          `📢 بڑی خوشخبری! ہماری ${labelUr} کی دکان پر شاندار سیل شروع ہو چکی ہے۔ ${emoji}\n\n${discountLine}📍 مقام: ${city}\n📞 ابھی رابطہ کریں اور فائدہ اٹھائیں: ${contact}\n\nجلدی کریں، یہ آفر محدود وقت کے لیے hai!`
        );
        posts.push(
          `${emoji} سیل! سیل! سیل! ${city} میں سب سے سستی اور معیاری ${labelUr} کی پروڈکٹس اب آپ کی پہنچ میں۔\n\n${discountLine}👉 ابھی وزٹ کریں یا واٹس ایپ پر آرڈر کریں: ${contact}\nمعیار پر کوئی سمجھوتہ نہیں!`
        );
      } else if (pType === 'arrival') {
        posts.push(
          `✨ نیا سٹاک آگیا! ✨\nہماری دکان پر ${labelUr} کا بالکل لیٹسٹ اور شاندار سٹاک پہنچ چکا ہے۔ ${emoji}\n\n${discountLine}📍 شہر: ${city}\n📲 تصاویر اور تفصیلات کے لیے واٹس ایپ کریں: ${contact}\nایک بار ضرور خدمت کا موقع دیں۔`
        );
      } else if (pType === 'eid') {
        posts.push(
          `🌙 عید مبارک سپیشل آفر! 🌙\nاس عید پر اپنوں کے لیے خریدیں سب سے بہترین ${labelUr} کی ورائٹی۔ ${emoji}\n\n${discountLine}📍 دکان کا پتا: ${city}\n📞 عید کی بکنگ کے لیے رابطہ کریں: ${contact}\nآئیں اور اپنی عید کی خوشیاں دوبالا کریں۔`
        );
      } else if (pType === 'weekend') {
        posts.push(
          `🔥 ویک اینڈ دھماکہ ڈیل! 🔥\nصرف اس ہفتے اور اتوار کے لیے ہماری ${labelUr} کی پروڈکٹس پر زبردست آفر۔ ${emoji}\n\n${discountLine}📍 لوکیشن: ${city}\n📞 ابھی کال یا واٹس ایپ کریں: ${contact}`
        );
      } else if (pType === 'clearance') {
        posts.push(
          `⚠️ سٹاک کلیئرنس سیل! ⚠️\nسب کچھ ختم کرنا ہے۔ ${labelUr} کا تمام پرانا سٹاک اب فیکٹری ریٹ پر حاصل کریں۔ ${emoji}\n\n${discountLine}📍 ایڈریس: ${city}\n📞 رابطہ نمبر: ${contact}\nپہلے آئیں، پہلے پائیں۔`
        );
      }
    } else {
      // ---- ENGLISH TEMPLATES ----
      let discountLineEn = discount ? `🎉 Special Offer: Get ${discount} today! 🎉\n` : '';

      if (pType === 'sale') {
        posts.push(
          `📢 Big News! Mega Sale is now LIVE at our ${labelEn} store. ${emoji}\n\n${discountLineEn}📍 Location: ${city}\n📞 Contact us on WhatsApp: ${contact}\nHurry up! Limited time offer only.`
        );
      } else if (pType === 'arrival') {
        posts.push(
          `✨ New Arrival! ✨\nDiscover the latest premium collection of ${labelEn} at our shop. ${emoji}\n\n${discountLineEn}📍 City: ${city}\n📲 DM or WhatsApp for prices: ${contact}\nUpgrade your style today!`
        );
      } else if (pType === 'eid') {
        posts.push(
          `🌙 Eid Mubarak Special Deal! 🌙\nCelebrate this Festive Season with the best quality ${labelEn}. ${emoji}\n\n${discountLineEn}📍 Address: ${city}\n📞 Book your favorites now: ${contact}`
        );
      } else if (pType === 'weekend') {
        posts.push(
          `🔥 Weekend Dhamaka Offer! 🔥\nExclusive deals on all ${labelEn} available only for this weekend. ${emoji}\n\n${discountLineEn}📍 Location: ${city}\n📲 Order via WhatsApp: ${contact}`
        );
      } else if (pType === 'clearance') {
        posts.push(
          `⚠️ Stock Clearance Sale! ⚠️\nEverything must go! Get premium ${labelEn} at incredibly low prices. ${emoji}\n\n${discountLineEn}📍 Store Location: ${city}\n📞 Call now: ${contact}\nStock is running out fast!`
        );
      }
    }

    // Render to UI
    const resultsEl = document.getElementById('results');
    if(resultsEl) {
      resultsEl.innerHTML = '';
      resultsEl.classList.add('show');

      posts.forEach((postText, idx) => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.style.marginBottom = '15px';

        const textDiv = document.createElement('div');
        textDiv.className = 'result-text';
        textDiv.dir = currentLang === 'ur' ? 'rtl' : 'ltr';
        textDiv.textContent = postText;

        const hashtagDiv = document.createElement('div');
        hashtagDiv.className = 'hashtag-row';
        hashtagDiv.textContent = hashtags;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'result-actions';

        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = '📋 Copy Post';
        copyBtn.addEventListener('click', () => {
          const fullText = postText + '\n\n' + hashtags;
          navigator.clipboard.writeText(fullText).then(() => {
            copyBtn.textContent = '✅ Copied!';
            copyBtn.classList.add('copied');
            setTimeout(() => {
              copyBtn.textContent = '📋 Copy Post';
              copyBtn.classList.remove('copied');
            }, 1800);
          });
        });

        actionsDiv.appendChild(copyBtn);
        card.appendChild(textDiv);
        card.appendChild(hashtagDiv);
        card.appendChild(actionsDiv);
        resultsEl.appendChild(card);
      });

      resultsEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
