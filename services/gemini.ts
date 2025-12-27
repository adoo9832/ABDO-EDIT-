
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getGeminiResponse = async (userPrompt: string, history: {role: string, parts: {text: string}[]}[]) => {
  if (!API_KEY) return "API Key is missing. Please configure it to chat with Ohayo BX AI.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [...history, { role: 'user', parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction: `You are the AI assistant for Ohayo BX, a world-class professional video editor. 
        Your goal is to answer questions about Ohayo BX's services, pricing estimates, and creative style.
        Style traits: Professional, helpful, concise, and focused on "High Retention" and "Premium Quality".
        Services include: Short-form (Reels/TikTok), Long-form (YouTube), Ads, Color Grading, and Sound Design.
        Base your pricing logic on: Short-form starting at $150, Long-form starting at $500.
        If the user asks for a quote, ask them about the raw footage length and target duration.`,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Please try again later.";
  }
};
