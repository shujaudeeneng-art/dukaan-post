let currentLang = 'ur';

const langUrBtn = document.getElementById('langUrBtn');
const langEnBtn = document.getElementById('langEnBtn');

if(langUrBtn && langEnBtn) {
  langUrBtn.addEventListener('click', () => { currentLang = 'ur'; langUrBtn.classList.add('active'); langEnBtn.classList.remove('active'); });
  langEnBtn.addEventListener('click', () => { currentLang = 'en'; langEnBtn.classList.add('active'); langUrBtn.classList.remove('active'); });
}

// 🌟 Default Stock Transparent Mockup Images
const DEFAULT_MOCKUPS = {
  clothing: "https://i.ibb.co/6wX2mWh/jeans-mockup.png", // High quality jeans mockup image link placeholder
  mobile: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
  restaurant: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  bakery: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
  cosmetics: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
  general: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&q=80"
};

const POST_CAMPAIGN_TEXT = {
  ur: { arrival: "نیا شاندار اسٹاک", sale: "میگا کلیئرنس سیل", eid: "عید مبارک آفر", weekend: "ویک اینڈ دھماکہ" },
  en: { arrival: "NEW ARRIVALS", sale: "MEGA CLEARANCE SALE", eid: "EID SPECIAL DEALS", weekend: "WEEKEND BLAST" }
};

function generatePostPro() {
  const shopName = document.getElementById('shopName').value.trim();
  const biz = document.getElementById('businessType').value;
  const pType = document.getElementById('postType').value;
  let discount = document.getElementById('discount').value;
  const city = document.getElementById('city').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const imgFile = document.getElementById('productImage').files[0];

  if(!shopName || !city || !contact) {
    alert("برائے مہربانی نام، شہر اور واٹس ایپ نمبر لازمی لکھیں!");
    return;
  }

  const campaignTitle = POST_CAMPAIGN_TEXT[currentLang][pType];
  let hasDiscount = (discount && discount !== "No Discount");

  // Create High-End Canvas Studio (1080x1080 Square Premium Layout)
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext('2d');

  // FUNCTION: Main render cycle execution
  function renderTemplate(productImgObj) {
    // 1. BUSINESS THEMED RICH GRAPHIC BACKGROUNDS
    if (biz === 'clothing') {
      // Dark Luxurious Grey/Navy Clean Theme
      let grad = ctx.createLinearGradient(0, 0, 1080, 1080);
      grad.addColorStop(0, '#0f172a');
      grad.addColorStop(1, '#1e293b');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1080, 1080);

      // Aesthetic Geometric Design lines
      ctx.fillStyle = 'rgba(255, 122, 26, 0.04)';
      ctx.beginPath(); ctx.arc(900, 200, 400, 0, 2 * Math.PI); ctx.fill();
      ctx.fillStyle = 'rgba(16, 185, 129, 0.03)';
      ctx.beginPath(); ctx.arc(100, 900, 500, 0, 2 * Math.PI); ctx.fill();

    } else if (biz === 'mobile') {
      // Futuristic Neon Dark Cyber Vibe Theme
      let grad = ctx.createLinearGradient(0, 0, 1080, 1080);
      grad.addColorStop(0, '#020617');
      grad.addColorStop(1, '#0f172a');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1080, 1080);
      
      ctx.strokeStyle = '#10b981'; ctx.lineWidth = 2; ctx.strokeRect(40, 40, 1000, 1000);
    } else {
      // Elegant Corporate Classic Theme
      let grad = ctx.createLinearGradient(0, 0, 0, 1080);
      grad.addColorStop(0, '#064e3b');
      grad.addColorStop(1, '#022c22');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1080, 1080);
    }

    // Outer Luxury Frame
    ctx.strokeStyle = '#ff7a1a';
    ctx.lineWidth = 12;
    ctx.strokeRect(30, 30, 1020, 1020);

    // 2. BRAND HEADLINE TYPOGRAPHY
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 64px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(shopName.toUpperCase(), 540, 130);

    // Dynamic Elegant Ribbon / Badge for Campaign
    ctx.fillStyle = '#ff7a1a';
    ctx.beginPath();
    ctx.roundRect(290, 180, 500, 75, 15);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px Arial, sans-serif';
    ctx.fillText(`✨ ${campaignTitle} ✨`, 540, 230);

    // 3. PRODUCT IMAGE POSITIONING MATRIX (Left-Aligned Premium Showcase)
    if (productImgObj) {
      // Create subtle premium outer glow shadow behind image frame
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 30;
      
      // Compute best proportional dimensions for square containment boundary
      let maxW = 460, maxH = 650;
      let imgW = productImgObj.width, imgH = productImgObj.height;
      let ratio = Math.min(maxW / imgW, maxH / imgH);
      let renderW = imgW * ratio;
      let renderH = imgH * ratio;
      let renderX = 80 + (maxW - renderW) / 2;
      let renderY = 320 + (maxH - renderH) / 2;

      ctx.drawImage(productImgObj, renderX, renderY, renderW, renderH);
      // Reset shadows
      ctx.shadowBlur = 0;
    }

    // 4. BULLET VALUE PROPOSITIONS (Right-Aligned Highlights)
    ctx.textAlign = currentLang === 'ur' ? 'right' : 'left';
    let textX = currentLang === 'ur' ? 1000 : 570;
    ctx.fillStyle = '#ffffff';

    if (currentLang === 'ur') {
      ctx.font = 'bold 44px Arial';
      ctx.fillText("✦ پریمیئم کوالٹی ڈینم فیبرک", textX, 390);
      ctx.fillText("✦ بہترین پائیدار سلائی اور فٹنگ", textX, 480);
      ctx.fillText("✦ رنگ اور چمک کی لائف ٹائم وارنٹی", textX, 570);
    } else {
      ctx.font = 'bold 36px Arial';
      ctx.fillText("✦ Premium Quality Material", textX, 390);
      ctx.fillText("✦ Elite Tailoring & Perfect Fit", textX, 480);
      ctx.fillText("✦ Guaranteed Lifetime Color Wash", textX, 570);
    }

    // 5. HIGHLIGHT PRO-LEVEL RIBBON / CIRCLE (Discount Blast)
    if (hasDiscount) {
      ctx.fillStyle = '#10b981'; // Premium Green accent badge
      ctx.beginPath(); ctx.roundRect(570, 660, 430, 130, 20); ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.font = 'bold 54px Arial';
      ctx.fillText(discount, 785, 745);
    }

    // 6. BOTTOM CONTACT STRIP (Stretched Professional CTA Footer)
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.roundRect(60, 890, 960, 110, 15); ctx.fill();

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 40px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`📞 آرڈر کے لیے واٹس ایپ کریں: ${contact}  |  📍 ${city}`, 540, 960);

    // 7. Output To DOM Container
    const resultsEl = document.getElementById('results');
    resultsEl.innerHTML = '';

    const resultCard = document.createElement('div');
    resultCard.className = 'result-card';

    const actionDiv = document.createElement('div');
    actionDiv.className = 'action-buttons';

    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'download-btn';
    downloadBtn.innerHTML = '📥 Download Full HD Photo';
    downloadBtn.onclick = function() {
      const link = document.createElement('a');
      link.download = `${shopName}_Premium_Post.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    };

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = '📋 Copy Premium Caption';
    copyBtn.onclick = function() {
      let caption = `🔥 ${shopName} — ${campaignTitle} 🔥\n\n✅ 100% پریمیم کوالٹی کی زبردست کلیکشن\n✅ مارکیٹ سے مناسب قیمت پر دستیاب\n📦 ہوم ڈیلیوری کی مکمل سہولت موجود ہے۔\n\n📍 شہر: ${city}\n📞 آرڈر کے لیے رابطہ کریں: ${contact}`;
      navigator.clipboard.writeText(caption);
      copyBtn.textContent = '✅ Copied!';
      setTimeout(() => { copyBtn.textContent = '📋 Copy Premium Caption'; }, 1500);
    };

    actionDiv.appendChild(downloadBtn);
    actionDiv.appendChild(copyBtn);

    resultCard.appendChild(canvas);
    resultCard.appendChild(actionDiv);
    resultsEl.appendChild(resultCard);
  }

  // IMAGE LOADING LOOP SETUP
  const imgObj = new Image();
  imgObj.crossOrigin = "anonymous";

  if (imgFile) {
    // Use uploaded photo
    const reader = new FileReader();
    reader.onload = function(event) {
      imgObj.src = event.target.result;
    };
    reader.readAsDataURL(imgFile);
  } else {
    // Load category default fallback mockup vector
    imgObj.src = DEFAULT_MOCKUPS[biz] || DEFAULT_MOCKUPS['general'];
  }

  imgObj.onload = function() {
    renderTemplate(imgObj);
  };
}
