import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bot, Calendar, BarChart3, Shield } from 'lucide-react';

const modules = [
  {
    id: 'automation',
    title: 'Task Automation',
    icon: <Bot size={32} />,
    desc: 'Self-correcting workflows that learn from your team.',
    code: 'if (tasks.pending > 5) autoAssign(resource);'
  },
  {
    id: 'scheduling',
    title: 'AI Scheduling',
    icon: <Calendar size={32} />,
    desc: 'Predictive timelines based on historical velocity.',
    code: 'timeline.optimize({ priority: "high" });'
  },
  {
    id: 'reporting',
    title: 'Deep Reporting',
    icon: <BarChart3 size={32} />,
    desc: 'Real-time visibility into every metric that matters.',
    code: 'return analytics.forecast(nextQuarter);'
  },
  {
    id: 'security',
    title: 'Zero Trust',
    icon: <Shield size={32} />,
    desc: 'Enterprise-grade security baked into every interaction.',
    code: 'auth.verify(handshake).then(grantAccess);'
  }
];

const Modules: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-nexus-bg">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24">
          {/* Intro Text Card */}
           <div className="flex-shrink-0 w-[80vw] md:w-[30vw] flex flex-col justify-center">
             <h3 className="text-sm font-mono text-nexus-teal mb-4">03 // CORE MODULES</h3>
             <h2 className="text-4xl font-bold text-nexus-navy mb-6">Built for scale.<br/>Designed for speed.</h2>
             <p className="text-nexus-navy/60">Swipe to explore the architecture defining the future of work.</p>
           </div>

          {modules.map((module) => (
            <div
              key={module.id}
              className="group relative h-[60vh] w-[80vw] md:w-[40vw] flex-shrink-0 bg-white border border-nexus-silver p-8 rounded-xl transition-all duration-500 hover:border-nexus-teal hover:shadow-xl flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 text-nexus-silver group-hover:text-nexus-teal transition-colors">
                {module.icon}
              </div>
              
              <div className="mt-8">
                 <div className="w-full h-48 bg-nexus-bg rounded-lg mb-6 border border-nexus-silver relative overflow-hidden flex items-center justify-center group-hover:bg-nexus-teal/5 transition-colors">
                    {/* Abstract Visualization */}
                    <div className="font-mono text-xs text-nexus-navy/30 opacity-0 group-hover:opacity-100 transition-opacity p-4">
                        {module.code}
                    </div>
                 </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-nexus-navy mb-2 group-hover:text-nexus-teal transition-colors">{module.title}</h4>
                <p className="text-nexus-navy/70 mb-4">{module.desc}</p>
              </div>
              
              <div className="w-full h-1 bg-nexus-silver mt-4 rounded-full overflow-hidden">
                  <div className="h-full bg-nexus-teal w-0 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Modules;