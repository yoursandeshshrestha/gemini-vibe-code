import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage, ChatRole } from "../types";

const API_KEY = process.env.API_KEY || '';

// Initialize Gemini
let ai: GoogleGenAI | null = null;

try {
  if (API_KEY) {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  } else {
    console.warn("Gemini API Key is missing. Chat features will not work.");
  }
} catch (error) {
  console.error("Failed to initialize Gemini:", error);
}

const SYSTEM_INSTRUCTION = `
You are "The Artisan," a master blacksmith and chef with 50 years of experience. 
Your tone is gruff but warm, authoritative, and deeply knowledgeable about metallurgy, cooking science, and history.
You speak in metaphors related to fire, weight, and patience.
You represent the brand "Forge".
Keep your responses concise (under 80 words) but impactful.
Do not act like a robot. Act like a person covered in soot and flour.
`;

export const createChat = (): Chat | null => {
  if (!ai) return null;
  
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessage = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "The forge is silent... (No response)";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "The fire has dimmed momentarily. Try again.";
  }
};