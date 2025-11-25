import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Ensure this is available in your env
const ai = new GoogleGenAI({ apiKey });

export const generateCoPilotResponse = async (
  history: { role: string; parts: { text: string }[] }[],
  userMessage: string
): Promise<string> => {
  try {
    const model = ai.models;
    
    // Construct the chat history for the prompt context
    // We use gemini-2.5-flash for low latency responses
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are 'V-OS', the advanced AI operating system of a Velocité hyper-electric vehicle. 
        Your tone is precise, robotic but helpful, and slightly futuristic (Cyberpunk/Sci-fi aesthetic). 
        Keep responses concise (under 50 words) as if displaying on a HUD.
        You know about the Velocité models: V1 (Balanced), GT (Track), X (SUV), and Zero (Hypercar).
        Refer to the user as 'Pilot'.`,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "SYSTEM ERROR: CONNECTION INTERRUPTED";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "OFFLINE MODE: UNABLE TO PROCESS REQUEST.";
  }
};