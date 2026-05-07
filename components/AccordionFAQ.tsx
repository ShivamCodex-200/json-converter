'use client';

import { useState } from 'react';
import { ChevronDown, ShieldCheck, Lock, Zap, Globe } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ReactNode;
}

interface AccordionFAQProps {
  items: FAQItem[];
  title?: string;
}

export default function AccordionFAQ({ items, title = "Frequently Asked Questions" }: AccordionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-10">
      {title && (
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 text-center tracking-tight">
          {title}
        </h2>
      )}
      
      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, index) => (
          <div 
            key={index}
            className="group glass-morphism overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:border-indigo-500/30"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors"
            >
              <div className="flex items-center gap-4">
                {item.icon && (
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                )}
                <span className="font-bold text-slate-900 dark:text-slate-50 md:text-lg">
                  {item.question}
                </span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-slate-400 transition-transform duration-500 ${
                  openIndex === index ? 'rotate-180 text-indigo-500' : ''
                }`} 
              />
            </button>
            
            <div 
              className={`grid transition-all duration-500 ease-in-out ${
                openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
