import React, { useState } from 'react';
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
  ChevronRight
} from 'lucide-react';
import { SERVICES_LIST } from '../data/storeData';
import { ServiceItem, PageTab } from '../types';

interface ServicesSectionProps {
  onOpenWhatsAppOrder: () => void;
  setActiveTab: (tab: PageTab) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenWhatsAppOrder,
  setActiveTab
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Core Pharmacy', 'Mother & Child', 'Chronic Care', 'Medical Devices', 'Emergency & Aid'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill': return <Pill className="w-6 h-6 text-emerald-600" />;
      case 'FileText': return <FileText className="w-6 h-6 text-emerald-600" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-emerald-600" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-emerald-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-emerald-600" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-600" />;
      case 'Thermometer': return <Thermometer className="w-6 h-6 text-emerald-600" />;
      case 'Cross': return <Cross className="w-6 h-6 text-emerald-600" />;
      case 'Syringe': return <Syringe className="w-6 h-6 text-emerald-600" />;
      case 'Award': return <Award className="w-6 h-6 text-emerald-600" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-emerald-600" />;
      case 'Truck': return <Truck className="w-6 h-6 text-emerald-600" />;
      default: return <Pill className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F0F5F4] dark:bg-slate-950 border-b border-emerald-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            Healthcare Essentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Pharmacy Services
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            From essential prescriptions and infant nutrition to chronic diabetic care and medical equipment.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-xl dark:hover:shadow-none transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.popular && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-[10px] font-extrabold border border-amber-200 dark:border-amber-800">
                      ★ High Demand
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={onOpenWhatsAppOrder}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Order / Inquire via WhatsApp</span>
                </button>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Full Page CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              setActiveTab('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-2 shadow-md"
          >
            <span>Explore All Healthcare Services</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
