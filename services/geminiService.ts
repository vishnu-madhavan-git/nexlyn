
import { GoogleGenAI, GenerateContentResponse, Type, Modality, LiveServerMessage } from "@google/genai";
import { GroundingSource } from "../types";

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
}

export const gemini = new GeminiService();
