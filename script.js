let currentLang = 'ur';

const langUrBtn = document.getElementById('langUrBtn');
const langEnBtn = document.getElementById('langEnBtn');

if(langUrBtn && langEnBtn) {
  langUrBtn.addEventListener('click', () => { currentLang = 'ur'; langUrBtn.classList.add('active'); langEnBtn.classList.remove('active'); });
  langEnBtn.addEventListener('click', () => { currentLang = 'en'; langEnBtn.classList.add('active'); langUrBtn.classList.remove('active'); });
}

const BUSINESS_LABELS = {
  ur: { clothing: "کپڑوں", mobile: "موبائل", restaurant: "کھانے", bakery: "بیکری آئٹمز", cosmetics: "کاسمیٹکس", electronics: "الیکٹرانکس", grocery: "گروسری", shoes: "جوتوں", jewelry: "زیورات", general: "پروڈکٹس" },
  en: { clothing: "clothing", mobile: "mobile phone", restaurant: "food", bakery: "bakery items", cosmetics: "cosmetics", electronics: "electronics", grocery: "grocery", shoes: "footwear", jewelry: "jewelry", general: "products" }
};

const POST_TYPE_LABELS = {
  ur: { sale: "شاندار ڈسکاؤنٹ سیل", arrival: "نیا شاندار اسٹاک", eid: "عید اسپیشل آفر", weekend: "ویک اینڈ دھماکہ ڈیل", clearance: "اسٹاک کلیئرنس سیل" },
  en: { sale: "MEGA DISCOUNT SALE", arrival: "NEW ARRIVALS", eid: "EID SPECIAL OFFER", weekend: "WEEKEND DHAMAKA DEAL", clearance: "CLEARANCE SALE" }
};

const BUSINESS_EMOJI = { clothing: "👗", mobile: "📱", restaurant: "🍽️", bakery: "🍰", cosmetics: "💄", electronics: "📺", grocery: "🛒", shoes: "👟", jewelry: "💍", general: "🏪" };

function generatePost() {
  const shopName = document.getElementById('shopName').value.trim();
  const biz = document.getElementById('businessType').value;
  const pType = document.getElementById('postType').value;
  let discount = document.getElementById('discount').value;
  const city = document.getElementById('city').value.trim();
  const contact = document.getElementById('contact').value.trim();

  if(!shopName || !city || !contact) {
    alert("Please fill all required fields!");
    return;
  }

  const emoji = BUSINESS_EMOJI[biz] || "🏪";
  const labelUr = BUSINESS_LABELS['ur'][biz] || "پروڈکٹس";
  const labelEn = BUSINESS_LABELS['en'][biz] || "products";
  const typeLabel = POST_TYPE_LABELS[currentLang][pType];

  let hasDiscount = (discount && discount !== "No Discount");
  let discTextUr = hasDiscount ? `🔥 فلیٹ آفر: پائیں ${discount} کا بڑا ڈسکاؤنٹ! 🔥` : '';
  let discTextEn = hasDiscount ? `🔥 SPECIAL OFFER: Flat ${discount} OFF! 🔥` : '';

  // 1. Text Post Formatting
  let postText = "";
  let hashtags = `#${biz}Shop #${pType} #${city} #DukaanPost`;

  if (currentLang === 'ur') {
    if (biz === 'mobile') {
      postText = `📱 ${shopName} — سمارٹ فونز اور موبائل اسیسریز پر سب سے دھماکے دار آفرز! 📱\n\n${discTextUr}\n\n✨ ہمارے ہاں دستیاب ہے:\n✅ تمام برانڈز کے 100% اوریجنل فونز\n✅ پریمیم بیک کورز اور پروٹیکٹرز\n✅ ہائی سپیڈ چارجرز اور ہینڈز فری\n✅ پروفیشنل موبائل ریپیرنگ (وارنٹی کے ساتھ)\n\n🚚 پورے ${city} میں فاسٹ ہوم ڈیلیوری کی سہولت!\n\n📞 رابطہ کریں:\n👉 فون نمبر: ${contact}\n📍 لوکیشن: ${city}`;
    } else if (biz === 'clothing') {
      postText = `👗 ${shopName} — فیشن، کوالٹی اور پریمیم فیبرک اب آپ کے بجٹ میں! 👚\n\n${discTextUr}\n\n✨ ہماری خاصیت:\n✅ 100% گارنٹیڈ کپڑا اور بہترین سلائی\n✅ رنگ اور بر کی مکمل وارنٹی\n✅ ٹرینڈنگ اور بالکل نئے یونیک ڈیزائنز\n\n📲 تصاویر اور آرڈر کے لیے واٹس ایپ کریں: ${contact}\n📍 دکان کا پتا: ${city}`;
    } else if (biz === 'restaurant') {
      postText = `🍽️ ${shopName} — لاجواب ذائقہ، صاف ستھرا کھانا! 🍔\n\n${discTextUr}\n\n✅ جوسی برگرز اور کرسپی فرائز\n✅ روایتی کڑاہی اور مائند بلونگ بار بی کیو\n✅ 100% تازہ اور ہائیجینک کھانا\n\n🛵 گرما گرم کھانا گھر منگوائیں:\n📞 آرڈر کے لیے ابھی کال کریں: ${contact}\n📍 لوکیشن: ${city}`;
    } else {
      postText = `🏪 ${shopName} — بہترین کوالٹی اور بڑی بچت ایک ساتھ! 📦\n\n${discTextUr}\n\n✅ 100% اوریجنل اور پریمیم اشیاء\n✅ مارکیٹ سے چیلنجڈ کم قیمتیں\n✅ آسان واپسی اور بہترین کسٹمر سروس\n\n📞 مزید تفصیلات اور آرڈر کے لیے رابطہ کریں:\n👉 واٹس ایپ: ${contact}\n📍 لوکیشن: ${city}`;
    }
  } else {
    if (biz === 'mobile') {
      postText = `📱 ${shopName} — Best Mobile & Accessories Deals! 📱\n\n${discTextEn}\n\n✅ 100% Original Smartphones\n✅ Premium Imported Cases & Glass\n✅ Expert Repair Services\n\n🚚 Fast Delivery across ${city}!\n📞 WhatsApp: ${contact}`;
    } else if (biz === 'clothing') {
      postText = `👗 ${shopName} — Premium Fabric & Trendy Fashion! 👚\n\n${discTextEn}\n\n✅ 100% Quality Material & Stitching\n✅ Color & Shine Warranty\n✅ Latest Designs\n\n📲 Order Now via WhatsApp: ${contact}\n📍 Location: ${city}`;
    } else {
      postText = `🏪 ${shopName} — Premium Quality & Unbeatable Savings! 📦\n\n${discTextEn}\n\n✅ 100% Authentic Products\n✅ Budget Friendly Prices\n\n📞 Call/WhatsApp: ${contact}\n📍 Location: ${city}`;
    }
  }

  // 2. Clear Results Container
  const resultsEl = document.getElementById('results');
  resultsEl.innerHTML = '';

  // 3. Create Canvas for Image Generation (Standard Square Post Layout: 800x800)
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');

  // --- BACKGROUND DESIGN ---
  // Gradient background
  let gradient = ctx.createLinearGradient(0, 0, 0, 800);
  gradient.addColorStop(0, '#0d7a4f'); // Deep green top
  gradient.addColorStop(1, '#063b26'); // Darker bottom
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 800, 800);

  // Decorative Shapes / Borders
  ctx.strokeStyle = '#ff7a1a'; // Orange accent lines
  ctx.lineWidth = 15;
  ctx.strokeRect(25, 25, 750, 750);

  // --- TEXT LAYERING ON IMAGE ---
  // Shop Name Header Block
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 42px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(shopName.toUpperCase(), 400, 100);

  // Decorative Divider Line
  ctx.fillStyle = '#ff7a1a';
  ctx.fillRect(200, 130, 400, 6);

  // Post Category/Type Badge
  ctx.fillStyle = '#ff7a1a';
  ctx.beginPath();
  ctx.roundRect(150, 170, 500, 60, 10);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px Arial';
  ctx.fillText(`${emoji} ${typeLabel} ${emoji}`, 400, 210);

  // Main Offer Points Block
  ctx.fillStyle = '#ffffff';
  ctx.font = '30px Arial';
  
  if (currentLang === 'ur') {
    ctx.fillText("✨ 100% اوریجنل پروڈکٹس کی مکمل گارنٹی", 400, 310);
    ctx.fillText("✨ بہترین کوالٹی اور مارکیٹ سے سستی قیمتیں", 400, 370);
    ctx.fillText("✨ آسان واپسی اور تبدیلی کی مکمل سہولت", 400, 430);
  } else {
    ctx.fillText("✨ 100% Original & Guaranteed Products", 400, 310);
    ctx.fillText("✨ Best Quality and Market Competitive Rates", 400, 370);
    ctx.fillText("✨ Easy Returns and Replacement Facility", 400, 430);
  }

  // Discount Highlight Circle
  if (hasDiscount) {
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(400, 550, 85, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = '#ff7a1a';
    ctx.font = 'bold 32px Arial';
    ctx.fillText(discount, 400, 545);
    ctx.font = 'bold 20px Arial';
    ctx.fillText(currentLang === 'ur' ? 'بڑی آفر' : 'SPECIAL', 400, 580);
  } else {
    ctx.fillStyle = '#ff7a1a';
    ctx.font = 'bold 36px Arial';
    ctx.fillText(currentLang === 'ur' ? "محدود وقت کے لیے!" : "LIMITED TIME ONLY!", 400, 550);
  }

  // Footer / Contact Strip
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(50, 670, 700, 80);

  ctx.fillStyle = '#1a1f26';
  ctx.font = 'bold 28px Arial';
  ctx.fillText(`📞 WhatsApp: ${contact}   |   📍 ${city}`, 400, 720);

  // 4. Render Layout Elements onto Page
  const resultCard = document.createElement('div');
  resultCard.className = 'result-card';

  // Action Bar UI
  const actionDiv = document.createElement('div');
  actionDiv.className = 'action-buttons';

  const downloadBtn = document.createElement('button');
  downloadBtn.className = 'download-btn';
  downloadBtn.textContent = '📥 Download Photo';
  downloadBtn.onclick = function() {
    const link = document.createElement('a');
    link.download = `${shopName.replace(/\s+/g, '_')}_post.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const copyBtn = document.createElement('button');
  copyBtn.className = 'copy-btn';
  copyBtn.textContent = '📋 Copy Caption';
  copyBtn.onclick = function() {
    navigator.clipboard.writeText(postText + '\n\n' + hashtags);
    copyBtn.textContent = '✅ Caption Copied!';
    setTimeout(() => { copyBtn.textContent = '📋 Copy Caption'; }, 1500);
  };

  // Build Result Section
  actionDiv.appendChild(downloadBtn);
  actionDiv.appendChild(copyBtn);
  
  resultCard.appendChild(canvas); // Displays live generated canvas image 
  resultCard.appendChild(actionDiv);
  resultsEl.appendChild(resultCard);
}
