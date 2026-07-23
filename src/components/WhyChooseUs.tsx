import React from 'react';
import {
  ShieldCheck,
  Award,
  HeartPulse,
  Clock,
  FileText,
  Stethoscope,
  MapPin,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/storeData';

interface WhyChooseUsProps {
  onOpenWhatsAppOrder: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenWhatsAppOrder }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Award': return <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Clock': return <Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'MessageCircle': return <MessageCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F0F5F4]/60 dark:bg-slate-900 border-b border-emerald-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-wide uppercase">
            Our Key Commitments
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose Nishant Medical Hall?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            We are dedicated to safeguarding your family's health with verified quality medicines, honest pricing, and genuine pharmacist care in Kurtha, Arwal.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-emerald-100 dark:border-slate-700/80 hover:shadow-xl hover:shadow-emerald-900/5 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-slate-600">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Pharmacy Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quick Call To Action Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold">Looking for a specific prescription or medical item?</h3>
            <p className="text-xs text-slate-300">Connect directly with our local Kurtha store counter on WhatsApp.</p>
          </div>
          <button
            onClick={onOpenWhatsAppOrder}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all whitespace-nowrap active:scale-95"
          >
            Inquire Availability
          </button>
        </div>

      </div>
    </section>
  );
};
