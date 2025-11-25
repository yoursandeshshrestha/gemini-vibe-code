import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Cpu } from 'lucide-react';
import { generateCoPilotResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const CoPilot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'V-OS ONLINE. AWAITING COMMANDS, PILOT.' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    try {
      const responseText = await generateCoPilotResponse(history, userText);
      setMessages((prev) => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'model', text: 'CONNECTION FAILED.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Trigger */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 bg-asphalt border border-electric-cyan text-electric-cyan p-4 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:bg-electric-cyan hover:text-black transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <Cpu className="w-6 h-6" />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-8 z-50 w-80 md:w-96 h-[500px] bg-asphalt/95 backdrop-blur-xl border border-steel-blue/50 rounded-lg flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-steel-blue/30 flex justify-between items-center bg-phantom-grey/50">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse" />
                <span className="font-display text-sm tracking-widest text-white">V-OS CO-PILOT</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-steel-blue hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar font-mono text-xs">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg border ${
                      msg.role === 'user'
                        ? 'bg-electric-cyan/10 border-electric-cyan/50 text-electric-cyan'
                        : 'bg-phantom-grey border-steel-blue/50 text-gray-300'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-phantom-grey border border-steel-blue/50 p-3 rounded-lg text-electric-cyan animate-pulse">
                    PROCESSING...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-steel-blue/30 bg-asphalt">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Query system..."
                  className="flex-1 bg-phantom-grey border border-steel-blue/50 rounded-none px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-electric-cyan transition-colors placeholder-steel-blue"
                />
                <button
                  onClick={handleSend}
                  className="bg-electric-cyan text-black px-3 py-2 hover:bg-white transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};