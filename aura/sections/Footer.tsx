import React, { useState } from 'react';
import { ArrowRight, Sparkles, X, Send } from 'lucide-react';
import { askAuraAI } from '../services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';

export const Footer: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskAi = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");
    const response = await askAuraAI(question);
    setAnswer(response);
    setLoading(false);
  };

  return (
    <footer className="bg-white py-24 px-6 relative border-t border-[#FAFAFA]">
      <div className="container mx-auto flex flex-col items-center text-center">
        
        {/* Glow Vignette Background */}
        <div className="absolute inset-0 bg-radial-gradient from-[#FAFAFA] to-white pointer-events-none opacity-50" />

        <div className="relative z-10 w-full max-w-xl mb-20">
          <label className="font-serif text-3xl md:text-4xl text-[#4A4A4A] mb-8 block">Join the List</label>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-transparent border-b border-[#F0F0F0] py-4 text-center font-sans text-[#4A4A4A] focus:outline-none focus:border-[#F7E7E6] transition-colors duration-500 placeholder:text-[#4A4A4A]/30"
            />
            {/* Pulsing light effect on focus simulated via group-focus-within */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[1px] bg-[#F7E7E6] shadow-[0_0_15px_2px_rgba(247,231,230,0.8)] transition-all duration-700 group-focus-within:w-full opacity-0 group-focus-within:opacity-100" />
            
            <button className="absolute right-0 bottom-4 text-[#4A4A4A]/50 hover:text-[#4A4A4A] transition-colors">
              <ArrowRight size={20} strokeWidth={1} />
            </button>
          </div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 font-sans text-sm text-[#4A4A4A]/60 uppercase tracking-widest">
          <a href="#" className="hover:text-[#4A4A4A] transition-colors">Shop</a>
          <a href="#" className="hover:text-[#4A4A4A] transition-colors">Philosophy</a>
          <a href="#" className="hover:text-[#4A4A4A] transition-colors">Journal</a>
          <a href="#" className="hover:text-[#4A4A4A] transition-colors">Contact</a>
        </div>

        <div className="mt-20 relative z-10">
          <p className="font-serif italic text-[#4A4A4A]/40 text-sm">Crafted in Light.</p>
        </div>
      </div>

      {/* Aura AI Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => setIsAiOpen(true)}
          className="bg-white text-[#4A4A4A] p-4 rounded-full shadow-lg border border-[#F0F0F0] hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <Sparkles size={20} strokeWidth={1} />
        </button>
      </div>

      {/* Aura AI Modal */}
      <AnimatePresence>
        {isAiOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-24 right-8 w-80 md:w-96 bg-white rounded-lg shadow-2xl border border-[#F0F0F0] overflow-hidden z-50"
          >
            <div className="p-4 border-b border-[#FAFAFA] flex justify-between items-center bg-[#FAFAFA]">
              <h3 className="font-serif text-[#4A4A4A]">Aura Intelligent Assistant</h3>
              <button onClick={() => setIsAiOpen(false)} className="text-[#4A4A4A]/50 hover:text-[#4A4A4A]">
                <X size={16} />
              </button>
            </div>
            
            <div className="p-6 min-h-[200px] max-h-[300px] overflow-y-auto bg-white">
              {answer ? (
                 <p className="font-serif text-[#4A4A4A] leading-relaxed animate-fade-in">{answer}</p>
              ) : (
                <p className="font-sans text-xs text-[#4A4A4A]/40 text-center mt-10">
                  {loading ? "Consulting the ether..." : "Ask me about your skin's luminosity..."}
                </p>
              )}
            </div>

            <div className="p-4 border-t border-[#FAFAFA] flex gap-2">
              <input 
                type="text" 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAskAi()}
                placeholder="Ask about hydration..."
                className="flex-1 bg-[#FAFAFA] rounded px-3 py-2 font-sans text-sm outline-none focus:ring-1 focus:ring-[#F7E7E6]"
              />
              <button 
                onClick={handleAskAi}
                disabled={loading}
                className="p-2 text-[#4A4A4A] hover:bg-[#FAFAFA] rounded transition-colors disabled:opacity-50"
              >
                <Send size={16} strokeWidth={1} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};