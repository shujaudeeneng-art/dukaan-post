// ==========================================================
// DUKAAN POST — Social Media Post Generator for Shopkeepers
// Template + Canvas Image Creator (No Paid API Required)
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
  // Trigger update on language change to reflect in preview instantly
  updateLivePreview();
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
    (p) => `${p.emoji} خوشخبری! ${p.product} پر خصوصی آفر\n\nصرف ${p.discount}% ڈسکاؤنٹ کے ساتھ بہترین کوالٹی حاصل کریں۔${p.city}\n\nآفر محدود وقت کے لیے ہے — ابھی رابطہ کریں۔\n${p.contact}`
  ],
  newarrival: [
    (p) => `${p.emoji} نیا اسٹاک آ گیا ہے! ${p.emoji}\n\nہماری دکان میں ${p.product} کی تازہ ترین ورائٹی دستیاب ہے۔${p.city}\n\nابھی آئیں اور بہترین ڈیزائنز میں سے چنیں۔\n${p.contact}`,
    (p) => `📦 تازہ ترین ${p.product} پہنچ گئے ہیں!\n\nنئی ڈیزائنز، بہترین کوالٹی، مناسب قیمت۔${p.city}\n\nملاحظہ کرنے کے لیے آج ہی وزٹ کریں۔\n${p.contact}`
  ],
  eid: [
    (p) => `🌙 عید سیل شروع! 🌙\n\n${p.product} پر ${p.discount}% تک ڈسکاؤنٹ — عید کی خوشیاں دوبالا کریں!${p.city}\n\nمحدود اسٹاک، جلدی کریں۔\n${p.contact}`
  ],
  weekend: [
    (p) => `🎉 ویک اینڈ اسپیشل آفر 🎉\n\n${p.product} پر ${p.discount}% ڈسکاؤنٹ صرف اس ہفتے کے لیے!${p.city}\n\nآج ہی فائدہ اٹھائیں۔\n${p.contact}`
  ],
  clearance: [
    (p) => `🚨 اسٹاک کلیئرنس سیل 🚨\n\n${p.product} پر بھاری ڈسکاؤنٹ — ${p.discount}% تک!${p.city}\n\nاسٹاک ختم ہونے سے پہلے خرید لیں۔\n${p.contact}`
  ],
  opening: [
    (p) => `🎊 گرینڈ اوپننگ 🎊\n\nہماری نئی دکان کا افتتاح ہو گیا! ${p.product} پر خصوصی افتتاحی رعایت ${p.discount}%۔${p.city}\n\nآئیں اور جشن میں شامل کریں۔\n${p.contact}`
  ],
  festive: [
    (p) => `${p.emoji} تہوار کی خصوصی سیل ${p.emoji}\n\n${p.product} پر ${p.discount}% تک ڈسکاؤنٹ اس خوشی کے موقع پر۔${p.city}\n\nابھی وزٹ کریں۔\n${p.contact}`
  ]
};

const TEMPLATES_EN = {
  discount: [
    (p) => `🔥 BIG SALE ALERT! 🔥\n\nGet up to ${p.discount}% OFF on ${p.product} ${p.emoji}${p.city}\n\nLimited stock, hurry up! Visit us or order now.\n${p.contact}`,
    (p) => `${p.emoji} Special Offer on ${p.product}!\n\nEnjoy premium quality at ${p.discount}% OFF.${p.city}\n\nOffer valid for a limited time only.\n${p.contact}`
  ],
  newarrival: [
    (p) => `${p.emoji} NEW ARRIVALS! ${p.emoji}\n\nFresh collection of ${p.product} is now available in-store.${p.city}\n\nCome check out the latest designs today.\n${p.contact}`,
    (p) => `📦 Just Arrived: ${p.product}!\n\nNew designs, premium quality, best prices.${p.city}\n\nVisit us today to explore.\n${p.contact}`
  ],
  eid: [
    (p) => `🌙 EID SALE IS HERE! 🌙\n\nUp to ${p.discount}% OFF on ${p.product} — make your Eid shopping special!${p.city}\n\nLimited stock, hurry up.\n${p.contact}`
  ],
  weekend: [
    (p) => `🎉 WEEKEND SPECIAL 🎉\n\n${p.discount}% OFF on ${p.product}, this weekend only!${p.city}\n\nGrab the deal today.\n${p.contact}`
  ],
  clearance: [
    (p) => `🚨 STOCK CLEARANCE SALE 🚨\n\nHuge discount up to ${p.discount}% on ${p.product}!${p.city}\n\nGrab it before stock runs out.\n${p.contact}`
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
    return productName.trim();
  }
  return label;
}

function buildCityLine(city) {
  if (!city || city.trim().length === 0) return '';
  return `\n📍 ${city.trim()}`;
}

function buildContactLine(contact) {
  if (!contact || contact.trim().length === 0) return currentLang === 'ur' ? 'ابھی رابطہ کریں!' : 'Contact us now!';
  return currentLang === 'ur' ? `📞 رابطہ: ${contact.trim()}` : `📞 Contact: ${contact.trim()}`;
}

function getRandomDiscount() {
  return 50; // Default sweet spot for beautiful template matching
}

function pickN(arr, n) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

// ---------------- LIVE CANVAS PREVIEW UPDATE LOGIC ----------------
function updateLivePreview() {
  const businessType = document.getElementById('businessType').value;
  const postType = document.getElementById('postType').value;
  const productNameInput = document.getElementById('productName').value;
  const discountInput = document.getElementById('discountPercent').value;
  const cityInput = document.getElementById('cityName').value;
  const contactInput = document.getElementById('contactInfo').value;

  // 1. Heading logic based on selection
  let headingText = "NEW ARRIVAL";
  if (postType === 'discount') headingText = "SPECIAL DISCOUNT";
  if (postType === 'eid') headingText = "EID SALE OFFER";
  if (postType === 'weekend') headingText = "WEEKEND OFFER";
  if (postType === 'clearance') headingText = "CLEARANCE SALE";
  if (postType === 'opening') headingText = "GRAND OPENING";
  if (postType === 'festive') headingText = "FESTIVE DEAL";

  const emoji = BUSINESS_EMOJI[businessType] || BUSINESS_EMOJI.general;
  document.getElementById('canvasHeading').innerHTML = `${emoji}<br>${headingText}`;

  // 2. Body Text Paragraph construction
  const product = buildProductPhrase(businessType, productNameInput);
  let detailText = "";
  if (currentLang === 'ur') {
    detailText = `ہمارے پاس بہترین کوالٹی میں ${product} دستیاب ہے۔ ایک بار ضرور تشریف لائیں اور اپنی پسندیدہ چیزیں حاصل کریں۔`;
  } else {
    detailText = `Premium quality ${product} is now available at our store. Come check out our high-grade collection today!`;
  }
  document.getElementById('canvasDetails').textContent = detailText;

  // 3. Metadata updates
  document.getElementById('canvasLocation').textContent = cityInput.trim() !== "" ? `📍 ${cityInput.trim()}` : "";
  document.getElementById('canvasContact').textContent = contactInput.trim() !== "" ? `📞 ${contactInput.trim()}` : "";

  // 4. Badge Update
  const discountVal = discountInput && discountInput.trim() !== '' ? discountInput.trim() : '50';
  document.getElementById('canvasBadge').innerHTML = `${discountVal}%<br>OFF`;
}

// Input box controls linked directly to trigger dynamic UI rendering
['businessType', 'postType', 'productName', 'discountPercent', 'cityName', 'contactInfo'].forEach(id => {
  document.getElementById(id).addEventListener('input', updateLivePreview);
  document.getElementById(id).addEventListener('change', updateLivePreview);
});

// Handling Background Product Image Streams
document.getElementById('productImage').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      document.getElementById('canvasImageFrame').style.backgroundImage = `url('${event.target.result}')`;
    };
    reader.readAsDataURL(file);
  }
});

// ---------------- MAIN GENERATE FUNCTION (CAPTIONS) ----------------
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

  const chosenTemplates = templateSet.length <= 3 ? templateSet : pickN(templateSet, 3);
  const posts = chosenTemplates.map(fn => fn(params));
  const hashtags = pickN(HASHTAGS[businessType] || HASHTAGS.general, 4).join(' ');

  renderResults(posts, hashtags);
  
  // Instantly sync preview design layout and exhibit the download button trigger
  updateLivePreview();
  document.getElementById('downloadImageBtn').style.display = 'block';
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
    copyBtn.textContent = '📋 Copy Post Text';
    copyBtn.addEventListener('click', () => {
      const fullText = postText + '\n\n' + hashtags;
      navigator.clipboard.writeText(fullText).then(() => {
        copyBtn.textContent = '✅ Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.textContent = '📋 Copy Post Text';
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

// ---------------- CANVAS IMAGE DOWNLOAD TRIGGER ----------------
document.getElementById('downloadImageBtn').addEventListener('click', () => {
  const poster = document.getElementById('posterCanvas');
  
  // useCORS parameters included to authorize local system device image captures seamlessly
  html2canvas(poster, { useCORS: true, scale: 2 }).then(canvas => {
    let link = document.createElement('a');
    link.download = `dukaan-post-${new Date().toISOString().slice(0,10)}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
});

document.getElementById('generateBtn').addEventListener('click', generatePosts);
// Fire once on load to populate basic state structure seamlessly
updateLivePreview();
