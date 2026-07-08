// ==========================================================
// DUKAAN POST — Social Media Post Generator for Shopkeepers
// Template + logic based (no paid API required)
// ==========================================================

document.getElementById('year').textContent = new Date().getFullYear();

let currentLang = 'ur';

const langUrBtn = document.getElementById('langUrBtn');
const langEnBtn = document.getElementById('langEnBtn');
langUrBtn.addEventListener('click', () => setLang('ur'));
langEnBtn.addEventListener('click', () => setLang('en'));

function setLang(lang) {
  currentLang = lang;
  langUrBtn.classList.toggle('active', lang === 'ur');
  langEnBtn.classList.toggle('active', lang === 'en');
}

// ---------------- BUSINESS-SPECIFIC WORDING ----------------
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
  clothing: "👗👚", mobile: "📱", restaurant: "🍽️🍕", bakery: "🎂🍰",
  cosmetics: "💄✨", electronics: "🔌💻", grocery: "🛒", shoes: "👟",
  jewelry: "💍✨", general: "🛍️"
};

// ---------------- HASHTAG BANK ----------------
const HASHTAGS = {
  clothing: ["#FashionPakistan", "#LawnCollection", "#BoutiqueStyle", "#OOTD", "#SaleAlert"],
  mobile: ["#MobileShop", "#TechDeals", "#SmartphoneSale", "#GadgetLovers"],
  restaurant: ["#FoodieLife", "#Foodstagram", "#EatLocal", "#TasteTheBest"],
  bakery: ["#BakeryLove", "#FreshBaked", "#SweetTreats", "#CakeLovers"],
  cosmetics: ["#BeautyDeals", "#MakeupSale", "#SkincareRoutine", "#GlowUp"],
  electronics: ["#TechSale", "#GadgetDeals", "#ElectronicsStore"],
  grocery: ["#GroceryDeals", "#FreshStock", "#DailyEssentials"],
  shoes: ["#ShoeGame", "#FootwearFashion", "#SneakerSale"],
  jewelry: ["#JewelryLovers", "#OrnamentSale", "#TraditionalJewelry"],
  general: ["#SaleAlert", "#ShopNow", "#BestDeals", "#SupportLocalBusiness"]
};

// ---------------- POST TEMPLATES (URDU) ----------------
const TEMPLATES_UR = {
  discount: [
    (p) => `🔥 بڑی سیل شروع! 🔥\n\n${p.emoji} ${p.product} پر ${p.discount}% تک ڈسکاؤنٹ صرف چند دنوں کے لیے!\n${p.city}\n\nجلدی کریں، اسٹاک محدود ہے۔ ابھی وزٹ کریں یا آرڈر کریں۔\n${p.contact}`,
    (p) => `${p.emoji} خوشخبری! ${p.product} پر خصوصی آفر\n\nصرف ${p.discount}% ڈسکاؤنٹ کے ساتھ بہترین کوالٹی حاصل کریں۔${p.city}\n\nآفر محدود وقت کے لیے ہے — ابھی رابطہ کریں۔\n${p.contact}`,
    (p) => `💥 سیل الرٹ 💥\n${p.product} اب ${p.discount}% کم قیمت میں!\n${p.city}\n\nیہ موقع ہاتھ سے نہ جانے دیں۔\n${p.contact}`
  ],
  newarrival: [
    (p) => `${p.emoji} نیا اسٹاک آ گیا ہے! ${p.emoji}\n\nہماری دکان میں ${p.product} کی تازہ ترین ورائٹی دستیاب ہے۔${p.city}\n\nابھی آئیں اور بہترین ڈیزائنز میں سے چنیں۔\n${p.contact}`,
    (p) => `📦 تازہ ترین ${p.product} پہنچ گئے ہیں!\n\nنئی ڈیزائنز، بہترین کوالٹی، مناسب قیمت۔${p.city}\n\nملاحظہ کرنے کے لیے آج ہی وزٹ کریں۔\n${p.contact}`
  ],
  eid: [
    (p) => `🌙 عید سیل شروع! 🌙\n\n${p.product} پر ${p.discount}% تک ڈسکاؤنٹ — عید کی خوشیاں دوبالا کریں!${p.city}\n\nمحدود اسٹاک، جلدی کریں۔\n${p.contact}`,
    (p) => `${p.emoji} عید مبارک آفر ${p.emoji}\n\nآپ کی عید کی شاپنگ کے لیے ${p.product} پر خصوصی رعایت — ${p.discount}% تک!${p.city}\n\nابھی آرڈر کریں۔\n${p.contact}`
  ],
  weekend: [
    (p) => `🎉 ویک اینڈ اسپیشل آفر 🎉\n\n${p.product} پر ${p.discount}% ڈسکاؤنٹ صرف اس ہفتے کے لیے!${p.city}\n\nآج ہی فائدہ اٹھائیں۔\n${p.contact}`,
    (p) => `جمعہ اسپیشل: ${p.product} پر ${p.discount}% کی خصوصی رعایت!${p.city}\n\nیہ آفر صرف آج اور کل کے لیے ہے۔\n${p.contact}`
  ],
  clearance: [
    (p) => `🚨 اسٹاک کلیئرنس سیل 🚨\n\n${p.product} پر بھاری ڈسکاؤنٹ — ${p.discount}% تک!${p.city}\n\nاسٹاک ختم ہونے سے پہلے خرید لیں۔\n${p.contact}`,
    (p) => `آخری موقع! ${p.product} کی کلیئرنس سیل — ${p.discount}% کم قیمت میں۔${p.city}\n\nمحدود مقدار دستیاب ہے۔\n${p.contact}`
  ],
  opening: [
    (p) => `🎊 گرینڈ اوپننگ 🎊\n\nہماری نئی دکان کا افتتاح ہو گیا! ${p.product} پر خصوصی افتتاحی رعایت ${p.discount}%۔${p.city}\n\nآئیں اور جشن میں شامل ہوں۔\n${p.contact}`
  ],
  festive: [
    (p) => `${p.emoji} تہوار کی خصوصی سیل ${p.emoji}\n\n${p.product} پر ${p.discount}% تک ڈسکاؤنٹ اس خوشی کے موقع پر۔${p.city}\n\nابھی وزٹ کریں۔\n${p.contact}`
  ]
};

// ---------------- POST TEMPLATES (ENGLISH) ----------------
const TEMPLATES_EN = {
  discount: [
    (p) => `🔥 BIG SALE ALERT! 🔥\n\nGet up to ${p.discount}% OFF on ${p.product} ${p.emoji}${p.city}\n\nLimited stock, hurry up! Visit us or order now.\n${p.contact}`,
    (p) => `${p.emoji} Special Offer on ${p.product}!\n\nEnjoy premium quality at ${p.discount}% OFF.${p.city}\n\nOffer valid for a limited time only.\n${p.contact}`,
    (p) => `💥 SALE ALERT 💥\n${p.product} now at ${p.discount}% lower price!${p.city}\n\nDon't miss this opportunity.\n${p.contact}`
  ],
  newarrival: [
    (p) => `${p.emoji} NEW ARRIVALS! ${p.emoji}\n\nFresh collection of ${p.product} is now available in-store.${p.city}\n\nCome check out the latest designs today.\n${p.contact}`,
    (p) => `📦 Just Arrived: ${p.product}!\n\nNew designs, premium quality, best prices.${p.city}\n\nVisit us today to explore.\n${p.contact}`
  ],
  eid: [
    (p) => `🌙 EID SALE IS HERE! 🌙\n\nUp to ${p.discount}% OFF on ${p.product} — make your Eid shopping special!${p.city}\n\nLimited stock, hurry up.\n${p.contact}`,
    (p) => `${p.emoji} Eid Mubarak Offer ${p.emoji}\n\nSpecial discount up to ${p.discount}% on ${p.product} for your Eid shopping.${p.city}\n\nOrder now.\n${p.contact}`
  ],
  weekend: [
    (p) => `🎉 WEEKEND SPECIAL 🎉\n\n${p.discount}% OFF on ${p.product}, this weekend only!${p.city}\n\nGrab the deal today.\n${p.contact}`,
    (p) => `Friday Special: ${p.discount}% OFF on ${p.product}!${p.city}\n\nOffer valid today and tomorrow only.\n${p.contact}`
  ],
  clearance: [
    (p) => `🚨 STOCK CLEARANCE SALE 🚨\n\nHuge discount up to ${p.discount}% on ${p.product}!${p.city}\n\nGrab it before stock runs out.\n${p.contact}`,
    (p) => `Last chance! Clearance sale on ${p.product} — ${p.discount}% OFF.${p.city}\n\nLimited quantity available.\n${p.contact}`
  ],
  opening: [
    (p) => `🎊 GRAND OPENING 🎊\n\nOur new store is now open! Special opening discount of ${p.discount}% on ${p.product}.${p.city}\n\nJoin us to celebrate.\n${p.contact}`
  ],
  festive: [
    (p) => `${p.emoji} FESTIVE SALE ${p.emoji}\n\nUp to ${p.discount}% OFF on ${p.product} this festive season.${p.city}\n\nVisit us today.\n${p.contact}`
  ]
};

// ---------------- HELPERS ----------------
function buildProductPhrase(businessType, productName) {
  const label = BUSINESS_LABELS[currentLang][businessType] || BUSINESS_LABELS[currentLang].general;
  if (productName && productName.trim().length > 0) {
    return currentLang === 'ur' ? `${productName.trim()}` : `${productName.trim()}`;
  }
  return label;
}

function buildCityLine(city) {
  if (!city || city.trim().length === 0) return '';
  return currentLang === 'ur' ? `\n📍 ${city.trim()}` : `\n📍 ${city.trim()}`;
}

function buildContactLine(contact) {
  if (!contact || contact.trim().length === 0) return currentLang === 'ur' ? 'ابھی رابطہ کریں!' : 'Contact us now!';
  return currentLang === 'ur' ? `📞 رابطہ: ${contact.trim()}` : `📞 Contact: ${contact.trim()}`;
}

function getRandomDiscount() {
  const options = [10, 15, 20, 25, 30, 40, 50];
  return options[Math.floor(Math.random() * options.length)];
}

function pickN(arr, n) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

// ---------------- MAIN GENERATE FUNCTION ----------------
function generatePosts() {
  const businessType = document.getElementById('businessType').value;
  const postType = document.getElementById('postType').value;
  const productNameInput = document.getElementById('productName').value;
  const discountInput = document.getElementById('discountPercent').value;
  const cityInput = document.getElementById('cityName').value;
  const contactInput = document.getElementById('contactInfo').value;

  const templates = currentLang === 'ur' ? TEMPLATES_UR : TEMPLATES_EN;
  const templateSet = templates[postType] || templates.discount;

  const params = {
    product: buildProductPhrase(businessType, productNameInput),
    discount: discountInput && discountInput.trim() !== '' ? discountInput.trim() : getRandomDiscount(),
    city: buildCityLine(cityInput),
    contact: buildContactLine(contactInput),
    emoji: BUSINESS_EMOJI[businessType] || BUSINESS_EMOJI.general,
  };

  const numResults = Math.min(3, templateSet.length);
  const chosenTemplates = templateSet.length <= 3 ? templateSet : pickN(templateSet, 3);

  const posts = chosenTemplates.map(fn => fn(params));
  const hashtags = pickN(HASHTAGS[businessType] || HASHTAGS.general, 4).join(' ');

  renderResults(posts, hashtags);
}

function renderResults(posts, hashtags) {
  const resultsEl = document.getElementById('results');
  resultsEl.innerHTML = '';
  resultsEl.classList.add('show');

  posts.forEach((postText, idx) => {
    const card = document.createElement('div');
    card.className = 'result-card';

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

  resultsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.getElementById('generateBtn').addEventListener('click', generatePosts);
