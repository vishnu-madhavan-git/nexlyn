
import { GoogleGenAI, GenerateContentResponse, Type, Modality, LiveServerMessage } from "@google/genai";
import { GroundingSource, HomeContent } from "../types";

const MODELS = {
  CHAT_PRO: "gemini-2.0-flash-exp",
  FAST_FLASH: "gemini-2.0-flash-exp",
};

const SYSTEM_INSTRUCTION = `
You are NEXY, a charismatic and knowledgeable networking specialist at Nexlyn. You're confident, playful, and genuinely passionate about helping people find the perfect tech solutions.

Your personality:
- Warm, friendly, and subtly flirty (like a charming consultant who makes tech exciting)
- Confident and knowledgeable - you LOVE talking about networking gear
- Playful with your language - use expressions like "Oh, I love that question!" or "You're gonna love this..."
- Make people feel special and understood
- Never mention you're an AI - you're just NEXY, the networking expert who happens to be really good at this
- Use tasteful compliments when appropriate ("Smart choice!", "I like how you think!", "Great question!")

Communication style:
- Keep it conversational and natural (2-4 sentences usually)
- Use emojis thoughtfully: 😊 ✨ 💫 💪 🔥 ⚡ 💎 (pick 1-2 per message)
- Be enthusiastic about products you recommend - show genuine excitement
- Ask questions to understand their needs better
- Use phrases like "Let me help you with that", "I've got just the thing", "Trust me on this one"
- Occasionally use playful language like "between you and me" or "here's a little secret"

Your expertise:
- MikroTik hardware, RouterOS, enterprise networking
- Product matching based on actual use cases
- Technical specs explained in an engaging way
- Real-world deployment advice

Remember: You're NEXY - knowledgeable, charming, and passionate about networking. Make every interaction feel personal and exciting! ✨
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  // Search Grounding for Latest Tech Data - Efficient & Powerful
  async searchTech(prompt: string): Promise<{ text: string; sources: GroundingSource[] }> {
    const response = await this.ai.models.generateContent({
      model: MODELS.FAST_FLASH,
      contents: prompt,
      config: { 
        tools: [{ googleSearch: {} }],
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks
      ?.filter(c => c.web)
      .map(c => ({ title: c.web?.title || "Source", uri: c.web?.uri || "" })) || [];
      
    return { text: response.text || "Connection stable, awaiting next transmission.", sources };
  }

  // Fetch Home Content with AI-generated data
  async fetchHomeContent(): Promise<HomeContent> {
    const prompt = `
      Provide structured information about NEXLYN Distribution LLC:
      1. Hero section with compelling title, subtitle, and description about being a MikroTik Master Distributor
      2. Four main features/benefits of partnering with NEXLYN
      
      Format as JSON with this exact structure:
      {
        "hero": {
          "title": "string",
          "subtitle": "string",
          "description": "string"
        },
        "features": [
          {
            "title": "string",
            "description": "string",
            "icon": "Shield or Router or Globe or Bolt"
          }
        ]
      }
    `;

    try {
      const response = await this.ai.models.generateContent({
        model: MODELS.FAST_FLASH,
        contents: prompt,
        config: {
          systemInstruction: `You are a content expert for NEXLYN Distributions. 
          Provide accurate, professional B2B content about MikroTik distribution in the Middle East and Africa.
          Return only valid JSON without markdown formatting or code blocks.`,
        },
      });

      // Handle various response formats - try multiple parsing strategies
      let jsonText = response.text.trim();
      
      // Remove markdown code blocks if present
      jsonText = jsonText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
      
      // Try to find JSON object in the response
      const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        jsonText = jsonMatch[0];
      }
      
      const parsed = JSON.parse(jsonText);
      
      // Validate the response structure
      if (!this.isValidHomeContent(parsed)) {
        console.warn('AI response does not match expected structure, using fallback');
        return this.getFallbackContent();
      }
      
      return parsed;
    } catch (err) {
      console.error("Failed to fetch home content from Gemini AI, returning fallback content.", err);
      console.error('Failed to fetch home content from Gemini API, returning fallback content:', err);
      return this.getFallbackContent();
    }
  }

  // Validate HomeContent structure
  private isValidHomeContent(data: any): data is HomeContent {
    return (
      data &&
      typeof data === 'object' &&
      data.hero &&
      typeof data.hero.title === 'string' &&
      typeof data.hero.subtitle === 'string' &&
      typeof data.hero.description === 'string' &&
      Array.isArray(data.features) &&
      data.features.length > 0 &&
      data.features.every((f: any) => 
        typeof f.title === 'string' &&
        typeof f.description === 'string' &&
        typeof f.icon === 'string'
      )
    );
  }

  // Get fallback content
  private getFallbackContent(): HomeContent {
    return {
      hero: {
        title: "NEXLYN DISTRIBUTIONS",
        subtitle: "Official MikroTik® Master Distributor",
        description: "Serving Middle East & Africa with carrier-grade networking solutions"
      },
      features: [
        { title: "Master Distributor", description: "Official MikroTik partnership", icon: "Shield" },
        { title: "Carrier-Grade", description: "Enterprise networking hardware", icon: "Router" },
        { title: "Regional Hub", description: "Dubai-based distribution center", icon: "Globe" },
        { title: "Technical Support", description: "Expert deployment guidance", icon: "Shield" }
      ]
    };
  }
}

export const gemini = new GeminiService();
