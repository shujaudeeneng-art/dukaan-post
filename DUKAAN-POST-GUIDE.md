# Dukaan Post — Live Karne Aur SEO Ki Poori Guide

Yeh guide aapko step-by-step batayegi ke apni website **free mein live** kaise karni hai aur **Google Search Console** mein set up kar ke **SEO** kaise karni hai, taake Google search mein upar aaye.

---

## Part 1: Files Ka Overview

Aapke `dukaan-post` folder mein yeh files hain:

| File | Kaam |
|---|---|
| `index.html` | Main website (tool + SEO content + FAQ) |
| `script.js` | Post generate karne ki logic |
| `robots.txt` | Google ko batata hai kya crawl karna hai |
| `sitemap.xml` | Google ko site ka structure batata hai |
| `404.html` | Jab koi galat link khole |

Sab kuch **free** hai — koi API cost nahi, koi monthly fee nahi.

---

## Part 2: Website FREE Mein Live Kaise Karein (GitHub Pages)

### Step 1: GitHub Account Banayein
1. [github.com](https://github.com) par jayein aur free account banayein.

### Step 2: New Repository Banayein
1. Login ke baad "+" icon → "New repository" par click karein.
2. Repository ka naam dein: `dukaan-post` (ya kuch bhi).
3. "Public" select karein.
4. "Create repository" par click karein.

### Step 3: Files Upload Karein
1. Repository page par "uploading an existing file" link par click karein.
2. Apne computer se `index.html`, `script.js`, `robots.txt`, `sitemap.xml`, `404.html` — sab files ek sath drag-drop karein.
3. Neeche "Commit changes" button par click karein.

### Step 4: GitHub Pages Enable Karein
1. Repository ke andar **Settings** tab par jayein.
2. Left sidebar mein **Pages** par click karein.
3. "Branch" mein `main` select karein, folder `/root` rakhein.
4. **Save** par click karein.
5. Kuch minute baad aapko ek link milega jaisa: `https://yourusername.github.io/dukaan-post/`

**Bas — aapki website live ho gayi, bilkul free, hamesha ke liye.**

### (Optional) Apna Custom Domain Lagana
Agar aap chahte hain ke website `dukaanpost.com` jaise naam par chale (GitHub link ki bajaye):
1. Kisi domain registrar se domain khareedein (Namecheap, GoDaddy — roughly $10-15/year).
2. Domain ke DNS settings mein GitHub Pages ka guide follow karein: GitHub → Settings → Pages → "Custom domain" mein apna domain likhein.
3. Domain registrar ki DNS settings mein GitHub ke A records add karein (GitHub Pages docs mein exact values mil jayenge).

> **Zaroori:** `index.html` mein jahan bhi `https://dukaanpost.com/` likha hai, use apne asli domain ya GitHub link se replace kar dein (Find & Replace kar ke).

---

## Part 3: Google Search Console Setup (SEO Ke Liye Sabse Zaroori Step)

Google Search Console free tool hai jo Google ko batata hai ke aapki site exist karti hai, aur aapko batata hai log kya search kar ke aapki site tak pahunche.

### Step 1: Search Console Mein Site Add Karein
1. [search.google.com/search-console](https://search.google.com/search-console) par jayein.
2. Apne Google account se login karein.
3. "Add Property" par click karein.
4. **"URL prefix"** wala option choose karein aur apni website ka pura URL dalein (jaise `https://yourusername.github.io/dukaan-post/`).

### Step 2: Ownership Verify Karein
Google aapko verify karne ke tareeqe dega. Sabse aasan tareeqa:
- **HTML tag method:** Google aapko ek chhoti si meta tag line dega. Use apni `index.html` ki `<head>` section mein paste kar dein (sabse upar), phir GitHub par file update kar dein, phir Google Search Console mein "Verify" par click karein.

### Step 3: Sitemap Submit Karein
1. Search Console mein left menu se **"Sitemaps"** par jayein.
2. Yahan `sitemap.xml` likh kar submit karein (jaise: `https://yourusername.github.io/dukaan-post/sitemap.xml`).
3. Google ab periodically aapki site crawl karega.

### Step 4: URL Inspection Se Manually Request Karein
1. Search Console ke top bar mein apni homepage ka URL paste karein.
2. "Request Indexing" par click karein.
3. Isse Google ko turant pata chal jata hai ke site index karni hai (normally kuch din lagte hain, lekin yeh process tez kar deta hai).

---

## Part 4: SEO Jo Already Website Mein Add Hai

Maine yeh SEO elements already `index.html` mein daal diye hain:

✅ **Title tag** — Google search results mein yeh line dikhti hai
✅ **Meta description** — search result ke neeche wali summary
✅ **Meta keywords** — relevant search terms
✅ **Open Graph tags** — jab link WhatsApp/Facebook par share ho toh acha preview dikhe
✅ **Structured Data (JSON-LD)** — Google ko batata hai yeh ek "WebApplication" hai, aur FAQ schema bhi hai jo Google search mein FAQ dropdown dikha sakta hai
✅ **Canonical URL** — duplicate content issues se bachata hai
✅ **Heading structure (H1, H2, H3)** — Google content ko samajhta hai
✅ **Keyword-rich content** — "social media post generator", "free tool", "shopkeeper" jaise phrases naturally content mein hain
✅ **Mobile-responsive design** — Google mobile-first indexing use karta hai

---

## Part 5: SEO Ko Aur Behtar Karne Ke Liye (Aapko Karna Hoga)

1. **Real OG Image banayein:** Ek 1200x630px image banayein jisme "Dukaan Post" ka logo/screenshot ho, use `og-image.png` naam se root folder mein daal dein (currently sirf reference hai, actual image nahi).

2. **Backlinks banayein:** Apni website ka link Facebook groups, WhatsApp business communities, aur Pakistani small-business forums mein share karein — jitne zyada quality backlinks, utni Google ranking behtar.

3. **Google Business Profile:** Agar aapka apna business bhi hai is tool ke sath, Google Business Profile bhi banayein.

4. **Regular content add karein:** Blog-style posts add karte rahein (jaise "10 Best Eid Sale Post Ideas for 2026") — fresh content Google ko pasand hai.

5. **Page speed check karein:** [PageSpeed Insights](https://pagespeed.web.dev) par apni site test karein aur suggestions follow karein.

6. **Domain age:** Naye domains ko rank hone mein time lagta hai (3-6 mahine tak). Patience rakhein aur content/backlinks par kaam karte rahein.

---

## Part 6: Website Kaise Kaam Karti Hai (Technical Summary)

- Tool **template-based** hai — pehle se likhe hue professional post templates (Urdu + English), jo user ke input (business type, discount, city, contact) ke hisaab se automatically fill ho jate hain.
- Koi backend server nahi chahiye, koi database nahi, koi paid API nahi — sab kuch browser mein chalta hai (client-side JavaScript).
- Isliye hosting **bilkul free** hai (GitHub Pages), aur koi running cost nahi hai chahe 10 log use karein ya 10,000.

---

## Khulasa (Summary Checklist)

- [ ] GitHub account banayein
- [ ] Repository banayein aur files upload karein
- [ ] GitHub Pages enable karein
- [ ] (Optional) Custom domain lagayein
- [ ] Google Search Console mein site verify karein
- [ ] Sitemap submit karein
- [ ] Homepage ki indexing request karein
- [ ] OG image banayein aur upload karein
- [ ] Social media groups mein link share karein (backlinks)

Is ke baad koi aur cheez add karne ki zaroorat nahi — tool poora functional hai aur SEO-ready hai.
