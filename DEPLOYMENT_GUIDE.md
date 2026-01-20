# 🚀 NEXLYN Distribution Deployment Guide

## 📋 Quick Summary

**Production Domain**: www.nextlyndistribution.com
**FREE Hosting**: Vercel (recommended) or GitHub Pages
**Custom Domain**: 5-minute DNS setup
**Image Storage**: Cloudinary (free 25GB)
**AI**: Works automatically with Gemini API key

---

## 🌐 DEPLOYMENT OPTIONS

### Option A: Vercel (RECOMMENDED - Easiest)

#### Step 1: Deploy to Vercel

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import `NEXLYN---v2` repository
5. Add Environment Variable:
   - Name: `GEMINI_API_KEY`
   - Value: Your Gemini API key
6. Click "Deploy"

**Done! Your site is live at**: `https://nexlyn-v2.vercel.app`

#### Step 2: Connect Custom Domain (e.g., nexlyn.com)

1. In Vercel Dashboard → Settings → Domains
2. Enter your domain: `www.nextlyndistribution.com` (and `nextlyndistribution.com`)
3. Vercel shows DNS records to add

4. **Go to your domain registrar** (Hostinger/GoDaddy/Namecheap/etc.):
   
   Add these DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 3600
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

5. Wait 5-10 minutes → Your site is live at **nexlyn.com**!

**Advantages**:
- ✅ Automatic SSL certificate
- ✅ Free forever
- ✅ Faster than GitHub Pages
- ✅ Auto-deploys when you push to GitHub
- ✅ Edge network (super fast worldwide)

---

### Option B: GitHub Pages (Already Configured)

#### Step 1: Enable GitHub Pages

1. Go to GitHub repository: `NEXLYN---v2`
2. Settings → Pages
3. Source: "GitHub Actions"
4. Add secret: Settings → Secrets → New repository secret
   - Name: `GEMINI_API_KEY`
   - Value: Your API key

**Site will be live at**: `https://vishnu-madhavan-git.github.io/NEXLYN---v2/`

#### Step 2: Custom Domain (Optional)

1. In GitHub Pages settings, add: `www.nextlyndistribution.com`
2. Create `CNAME` file in repository root with: `www.nextlyndistribution.com`
3. Update DNS at your registrar:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: vishnu-madhavan-git.github.io
```

---

## 📸 IMAGE HOSTING SETUP

### Cloudinary (FREE 25GB)

Your admin can upload images, but you need cloud storage.

#### Setup (One-time):

1. **Sign up**: https://cloudinary.com (free account)
2. **Get credentials**:
   - Cloud Name: `dxxxxx` (shown on dashboard)
   - Upload Preset: Create unsigned preset in Settings

#### Update Admin Panel to Use Cloudinary:

The admin panel currently saves image URLs. To enable **direct uploads**:

**Option 1: Manual Upload** (Simpler)
1. Client uploads images to Cloudinary dashboard
2. Copies image URL
3. Pastes in admin panel → Image URL field

**Option 2: Automatic Upload Widget** (Better UX)
- Add Cloudinary widget to admin panel
- Client clicks "Upload" → selects file
- URL auto-fills

---

## 🤖 AI CONFIGURATION

### Gemini API Key Setup

**Your AI will work automatically if you add the API key**:

#### For Vercel:
- Dashboard → Settings → Environment Variables
- Add: `GEMINI_API_KEY` = `your_key_here`

#### For GitHub Pages:
- Repository → Settings → Secrets and variables → Actions
- Add secret: `GEMINI_API_KEY`

**Get API Key**:
1. Go to https://aistudio.google.com/apikey
2. Create new API key
3. Copy and paste in environment variables

**How it works**:
- Users chat with NEXY
- Requests go to Google Gemini API
- Responses come back instantly
- No backend server needed!

---

## 💾 DATA STORAGE BREAKDOWN

### What's Stored Where:

| Data Type | Current Storage | Size | Editable |
|-----------|----------------|------|----------|
| Product catalog | `mikrotik-products.json` | 15KB | Yes (admin) |
| Product images | SVG gradients in code | 5KB | No (use URLs later) |
| User edits | Browser localStorage | ~50KB | Yes (admin) |
| Hero banners | localStorage | ~2KB | Yes (admin) |
| Theme preference | localStorage | <1KB | Yes (toggle) |
| Chat messages | In-memory (lost on refresh) | N/A | No |

### For Image Uploads:

**Current**: Image URLs are stored (points to external hosting)
**Solution**: Use Cloudinary/ImgBB for actual file storage

---

## 🔐 SECURITY NOTES

1. **API Key**: Never expose in client-side code (use environment variables)
2. **Admin Password**: Currently in code (`3210`/`4560`) - fine for simple use
3. **Data**: localStorage is browser-specific, not synced between users

---

## 📊 FREE TIER LIMITS

### Vercel:
- ✅ Unlimited bandwidth
- ✅ Unlimited deployments
- ✅ Custom domain
- ❌ 100GB/month bandwidth soft limit

### GitHub Pages:
- ✅ 1GB repository size
- ✅ 100GB bandwidth/month
- ✅ 10 builds/hour

### Cloudinary:
- ✅ 25GB storage
- ✅ 25GB bandwidth/month
- ✅ Unlimited transformations

**All free tiers are more than enough for your business!**

---

## 🎯 RECOMMENDED SETUP

**Best Configuration**:
1. ✅ **Hosting**: Vercel (fastest, easiest domain setup)
2. ✅ **Domain**: Your custom domain via DNS
3. ✅ **Images**: Cloudinary for uploads (when needed)
4. ✅ **Database**: Current localStorage is fine
5. ✅ **AI**: Gemini API with environment variable

**Total Cost**: $0/month 🎉

---

## 🚀 QUICK START (5 Minutes)

```bash
# 1. Ensure code is pushed to GitHub
git add .
git commit -m "Production ready"
git push origin main

# 2. Deploy to Vercel
- Go to vercel.com
- Import NEXLYN---v2
- Add GEMINI_API_KEY
- Deploy!

# 3. Add custom domain
- Vercel → Domains → Add nexlyn.com
- Update DNS at registrar
- Wait 10 minutes
- Done!
```

**Your site is live with custom domain in 10 minutes!** 🎊

---

## 📞 SUPPORT

**Having issues?**
- Vercel: docs.vercel.com
- Cloudinary: cloudinary.com/documentation
- GitHub Pages: docs.github.com/pages

**Developer Contact**: Vishnu Madhav @ IX Ruby Digitals
