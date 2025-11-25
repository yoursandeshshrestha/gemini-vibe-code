import { GoogleGenAI } from "@google/genai";

// This service demonstrates how one might use Gemini to generate dynamic poetic descriptions
// for the generative art pieces in "The Lab" section.

// Safely retrieve API key
const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateArtDescription = async (artType: string): Promise<string> => {
  if (!ai) {
    console.warn("Gemini API Key missing. Returning fallback description.");
    return "A shimmering display of algorithmic light, constantly evolving through user interaction.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `Write a very short, abstract, poetic description (max 15 words) for a digital art piece involving ${artType}. Use words like fluid, luminous, code, and rhythm.`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Algorithmic beauty in motion.";
  } catch (error) {
    console.error("Error generating art description:", error);
    return "Where code meets light and motion.";
  }
};
