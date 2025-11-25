import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not defined in the environment.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const askAuraAI = async (question: string): Promise<string> => {
  const client = getClient();
  if (!client) return "Aura AI is currently sleeping. Please configure the API Key.";

  try {
    const model = "gemini-2.5-flash";
    const systemInstruction = `You are Aura, a virtual aesthetician for a high-end, ethereal skincare brand. 
    Your tone is calm, weightless, scientific, and poetic. 
    Keep answers concise (under 50 words) and focused on hydration, purity, and light.`;

    const response = await client.models.generateContent({
      model,
      contents: question,
      config: {
        systemInstruction,
      }
    });

    return response.text || "I am meditating on that thought...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The connection to the ether is weak right now.";
  }
};
