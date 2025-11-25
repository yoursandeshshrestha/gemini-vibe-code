import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { createChat, sendMessage } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';
import { Chat } from '@google/genai';

const Footer: React.FC = () => {
  const [temp, setTemp] = useState(1050);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Temperature Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTemp(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-forge-brass text-forge-black py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="text-6xl md:text-9xl font-display tracking-tighter mb-12 opacity-90">
            FORGE
        </h2>

        {/* CTA Button */}
        <motion.button 
          whileHover={{ scale: 1.05, filter: "blur(0.5px)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsChatOpen(true)}
          className="group relative px-12 py-6 bg-forge-black text-forge-white text-2xl md:text-4xl font-serif font-bold overflow-hidden mb-16 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
        >
          <span className="relative z-10 flex items-center gap-4">
             <MessageCircle size={32} />
             Talk to an Artisan
          </span>
          {/* Heat Warp Overlay */}
          <div className="absolute inset-0 bg-orange-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 blur-xl"></div>
        </motion.button>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-forge-black/20 pt-12">
            <div className="text-left">
                <h4 className="font-display text-xl mb-4">Workshop</h4>
                <p className="font-sans font-medium">1892 Ironworks Blvd,<br/>Pittsburgh, PA 15201</p>
            </div>
            
            <div className="flex flex-col items-center justify-center border-y md:border-y-0 md:border-x border-forge-black/20 py-8 md:py-0">
                <span className="font-display text-sm tracking-widest mb-2">CURRENT FORGE TEMP</span>
                <span className="font-serif text-5xl font-bold tabular-nums">{temp}°C</span>
            </div>

            <div className="text-right">
                <h4 className="font-display text-xl mb-4">Connect</h4>
                <ul className="font-sans font-medium space-y-2">
                    <li><a href="#" className="hover:underline">Instagram</a></li>
                    <li><a href="#" className="hover:underline">Twitter</a></li>
                    <li><a href="#" className="hover:underline">Email Us</a></li>
                </ul>
            </div>
        </div>

        <div className="mt-20 text-xs font-sans opacity-60">
            © 2024 Forge Cookware. Built for eternity.
        </div>
      </div>

      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </footer>
  );
};

const ChatModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: ChatRole.MODEL, text: "The forge is hot. What can I craft for you today? Ask me about care, seasoning, or the history of iron." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatInstance = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && !chatInstance.current) {
            chatInstance.current = createChat();
        }
        if (isOpen) {
             // Scroll to bottom on open
             setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    }, [isOpen]);

    const handleSend = async () => {
        if (!input.trim() || !chatInstance.current || isLoading) return;

        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: ChatRole.USER, text: userMsg }]);
        setIsLoading(true);

        const responseText = await sendMessage(chatInstance.current, userMsg);

        setMessages(prev => [...prev, { role: ChatRole.MODEL, text: responseText }]);
        setIsLoading(false);
        setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ y: 50, scale: 0.95 }}
                        animate={{ y: 0, scale: 1 }}
                        exit={{ y: 50, scale: 0.95 }}
                        className="bg-forge-charcoal w-full max-w-lg h-[600px] border-2 border-forge-copper flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="bg-forge-black p-4 flex justify-between items-center border-b border-forge-pencil">
                            <h3 className="text-forge-copper font-display text-2xl tracking-wide">Artisan Assistant</h3>
                            <button onClick={onClose} className="text-forge-white hover:text-forge-copper"><X /></button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-forge-charcoal">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-4 ${
                                        msg.role === ChatRole.USER 
                                        ? 'bg-forge-brass text-forge-black' 
                                        : 'bg-forge-black text-forge-white border border-forge-pencil'
                                    }`}>
                                        <p className="font-sans text-sm leading-relaxed">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="text-forge-copper/50 text-xs italic animate-pulse pl-2">
                                    Hammering out a response...
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-forge-black border-t border-forge-pencil flex gap-2">
                            <input 
                                type="text" 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about cast iron care..."
                                className="flex-1 bg-forge-charcoal border border-forge-pencil text-forge-white px-4 py-3 font-sans focus:outline-none focus:border-forge-copper"
                            />
                            <button 
                                onClick={handleSend}
                                disabled={isLoading}
                                className="bg-forge-copper text-forge-black px-4 hover:bg-forge-white transition-colors disabled:opacity-50"
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Footer;