import React from 'react';
import {
  Pill,
  FileText,
  ShoppingBag,
  HeartPulse,
  Sparkles,
  Activity,
  Thermometer,
  Cross,
  Syringe,
  Award,
  Stethoscope,
  Truck,
  MessageCircle,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { SERVICES_LIST, STORE_INFO } from '../data/storeData';

interface ServicesPageProps {
  onOpenWhatsAppOrder: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenWhatsAppOrder }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill': return <Pill className="w-7 h-7 text-emerald-600" />;
      case 'FileText': return <FileText className="w-7 h-7 text-emerald-600" />;
      case 'ShoppingBag': return <ShoppingBag className="w-7 h-7 text-emerald-600" />;
      case 'HeartPulse': return <HeartPulse className="w-7 h-7 text-emerald-600" />;
      case 'Sparkles': return <Sparkles className="w-7 h-7 text-emerald-600" />;
      case 'Activity': return <Activity className="w-7 h-7 text-emerald-600" />;
      case 'Thermometer': return <Thermometer className="w-7 h-7 text-emerald-600" />;
      case 'Cross': return <Cross className="w-7 h-7 text-emerald-600" />;
      case 'Syringe': return <Syringe className="w-7 h-7 text-emerald-600" />;
      case 'Award': return <Award className="w-7 h-7 text-emerald-600" />;
      case 'Stethoscope': return <Stethoscope className="w-7 h-7 text-emerald-600" />;
      case 'Truck': return <Truck className="w-7 h-7 text-emerald-600" />;
      default: return <Pill className="w-7 h-7 text-emerald-600" />;
    }
  };

  return (
    <div className="py-12 lg:py-20 bg-[#F0F5F4] dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            Our Healthcare Offerings
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Complete Pharmacy Services
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Nishant Medical Hall provides an exhaustive range of authentic pharmaceutical products, mother & baby care, medical devices, and surgical essentials in Kurtha.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {service.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Key Highlights:
                  </h4>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={onOpenWhatsAppOrder}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black">Need a specific medicine not listed here?</h3>
            <p className="text-xs text-slate-300">
              We special-order hard-to-find prescription drugs directly from central pharma hubs within 12-24 hours.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Store</span>
            </a>
            <button
              onClick={onOpenWhatsAppOrder}
              className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Prescription</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
