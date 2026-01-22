<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# NEXLYN - v2

AI-powered MikroTik® Master Distributor platform built with Google AI Studio and Gemini API.

View your app in AI Studio: https://ai.studio/apps/drive/1TooJrvvYNEPtXmyX5sfuyYKZ-ofUdW0j

## Features

- 🤖 AI-powered technical support using Google Gemini
- 🌐 Real-time inventory management
- 📱 Responsive design with dark mode
- 🔍 Advanced product search and filtering
- 💬 Integrated WhatsApp B2B communication

## Prerequisites

- Node.js (v18 or higher recommended)
- A Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

## Installation

1. **Clone the repository** (if not already cloned)
   ```bash
   git clone <repository-url>
   cd NEXLYN---v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your API key**
   
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.local.template .env.local
   ```
   
   Then edit `.env.local` and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:3000`

## Build for Production

```bash
npm run build
npm run preview
```

## Technology Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **AI**: Google Gemini API (@google/genai)
- **Styling**: Tailwind CSS
- **Charts**: Recharts

## Environment Variables

- `GEMINI_API_KEY` - Your Google Gemini API key (required)

## Support

For issues or questions, please open an issue in the repository or contact via WhatsApp.
