import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  { 
    id: 'starter', 
    name: 'Starter', 
    price: '$0', 
    features: ['Up to 5 users', 'Basic Reporting', 'Community Support', '10GB Storage'] 
  },
  { 
    id: 'pro', 
    name: 'Pro', 
    price: '$29', 
    features: ['Unlimited users', 'Advanced Analytics', 'Priority Support', '1TB Storage', 'API Access', 'Custom Integrations'] 
  },
  { 
    id: 'enterprise', 
    name: 'Enterprise', 
    price: 'Custom', 
    features: ['Unlimited everything', 'Dedicated Account Manager', 'On-premise deployment', 'SSO & Audit Logs', '24/7 SLA Support'] 
  }
];

const Pricing: React.FC = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section className="py-24 bg-nexus-bg">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-nexus-navy mb-12 text-center">Transparent Pricing</h2>
        
        <div className="space-y-4">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              onHoverStart={() => setHoveredPlan(plan.id)}
              onHoverEnd={() => setHoveredPlan(null)}
              className="relative overflow-hidden bg-white border-b border-nexus-silver last:border-b-0 md:border md:rounded-lg"
            >
              <div 
                 className="absolute inset-0 bg-nexus-navy opacity-0 transition-opacity duration-300 pointer-events-none"
                 style={{ opacity: hoveredPlan === plan.id ? 0.03 : 0 }}
              />
              
              <div className="p-8 cursor-default">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-nexus-navy">{plan.name}</h3>
                    <p className="font-mono text-sm text-nexus-navy/50">{plan.id === 'enterprise' ? 'Contact Sales' : 'Per user / month'}</p>
                  </div>
                  <div className="text-3xl font-mono text-nexus-teal font-medium">{plan.price}</div>
                </div>

                <motion.div
                  initial={false}
                  animate={{ 
                    height: hoveredPlan === plan.id ? 'auto' : '0px',
                    opacity: hoveredPlan === plan.id ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {plan.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center text-sm text-nexus-navy/80"
                      >
                        <span className="w-5 h-5 rounded-full bg-nexus-teal/10 flex items-center justify-center mr-2 text-nexus-teal">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                  <div className="pt-6">
                    <button className="px-6 py-2 bg-nexus-navy text-white font-mono text-sm hover:bg-nexus-teal transition-colors rounded-sm">
                        SELECT PLAN
                    </button>
                  </div>
                </motion.div>
                
                {/* Default collapsed view hint */}
                <motion.div 
                   animate={{ opacity: hoveredPlan === plan.id ? 0 : 1 }}
                   className="mt-2 text-sm text-nexus-navy/40"
                >
                   {plan.features.length} features included...
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;