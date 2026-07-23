import React from 'react';
import { MessageCircle, FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WORKING_PROCESS_STEPS } from '../data/storeData';

interface WorkingProcessProps {
  onOpenWhatsAppOrder: () => void;
}

export const WorkingProcess: React.FC<WorkingProcessProps> = ({ onOpenWhatsAppOrder }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageCircle': return <MessageCircle className="w-6 h-6 text-emerald-600" />;
      case 'FileText': return <FileText className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
      default: return <MessageCircle className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="px-3.5 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-800">
            Hassle-Free Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            How To Get Your Medicines
          </h2>
          <p className="text-slate-300 text-base">
            4 simple and transparent steps to order or pick up genuine medicines from Nishant Medical Hall.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {WORKING_PROCESS_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/60 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-emerald-400 opacity-80">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStepIcon(item.icon)}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {idx < WORKING_PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenWhatsAppOrder}
            className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-xl shadow-emerald-900/40 transition-all inline-flex items-center gap-2 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Start Quick WhatsApp Order Now</span>
          </button>
        </div>

      </div>
    </section>
  );
};
