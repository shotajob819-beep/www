import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateItinerary = async (preferences: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        You are a local tour guide expert for Kobe, Japan, working for "LinkRoots".
        Your target audience is young international tourists (Gen Z / Millennials).
        Create a short, exciting half-day itinerary based on the user's preference: "${preferences}".
        Focus on "Instagrammable" spots, retro architecture (Kitano Ijinkan), or hidden local cafes.
        Keep it under 200 words. Format with simple bullet points or emojis.
        Respond in Japanese, but use simple Japanese suitable for tourists or include English terms for place names.
      `,
    });

    return response.text || "Sorry, I couldn't generate a plan right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while generating your itinerary. Please try again.";
  }
};