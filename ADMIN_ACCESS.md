# NEXLYN Admin Access Guide

## 🔐 Admin Credentials

### Client Access (Limited)
**Password:** `NEXLYN2026`
**Access Level:** Standard Admin
**Can Edit:**
- WhatsApp number
- Office location
- Google Maps URL
- Company bio/about content
- Add/Edit/Delete products
- View product catalog

**Cannot See:**
- Owner panel
- Access credentials
- System information

---

### Owner Access (Full Control)
**Password:** `NEXLYN_OWNER_2026_SECURE`
**Access Level:** Owner/Full Admin
**Everything Client Can Do, PLUS:**
- View all passwords
- See owner-only panel
- Access system information
- Full control over all settings

---

## 📝 Recent Updates (Jan 2026)

✅ **Dates Fixed:**
- Copyright updated to © 2026 (removed 2020-2025)
- "Since 2020" changed to "Est. 2026"
- All future-proof for current year

✅ **Location Updated:**
- Default address changed from "Silicon Oasis" to "Deira, Gold Souk, Dubai, UAE"
- Matches eaportel.com location reference

✅ **Admin Panel Enhanced:**
- Dual access system (Client + Owner)
- Owner sees special panel with all passwords
- Google Maps URL now editable
- System info dashboard for owner

✅ **AI Assistant (NEXY):**
- Currently uses Gemini API (your key is set)
- Works without payment in current setup
- Falls back to friendly error if API fails
- No monthly costs with current implementation

---

## 🎨 Design Updates

✅ **Theme Toggle:**
- Clean sun/moon icons
- Matches glassmorphism UI
- Minimal and professional

✅ **Buttons:**
- WhatsApp: Premium frosted glass with green tint
- AI Chat: NEXLYN logo with glass effect
- Both match overall design aesthetic

✅ **Footer:**
- Full description now visible (not cut off)
- Smaller text for better fit

---

## 🤖 AI Integration Notes

**Current Setup:** Using Google Gemini API
- API Key is set in `.env` file
- Free tier available (no payment required initially)
- If you want completely free alternative in future:
  - Can implement keyword-based responses
  - Add FAQ database
  - Use client-side logic only

**To Keep It Free Forever:**
The current setup uses Gemini's free tier, but if you need a backup:
1. Comment out API calls
2. Add hardcoded helpful responses
3. Use pattern matching for common questions

---

## 📍 Contact Information

**Location:** Deira, Gold Souk, Dubai, UAE
**WhatsApp:** +971502474482
**Email:** contact@nexlyn.com (in contact page)

---

## 🚀 How to Login

1. Click shield icon in header (or go to `/admin` in URL)
2. Enter one of the passwords above
3. Access your appropriate panel

**Remember:** SessionStorage is used (not localStorage), so login persists during browser session only!
