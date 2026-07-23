import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Search,
  Sparkles,
  Pill,
  Award,
  Clock,
  HeartPulse,
  ArrowRight,
  Upload
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { PageTab } from '../types';

interface HeroProps {
  onOpenWhatsAppOrder: () => void;
  onOpenMedicineSearch: () => void;
  setActiveTab: (tab: PageTab) => void;
  setSearchQuery: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenWhatsAppOrder,
  onOpenMedicineSearch,
  setActiveTab,
  setSearchQuery
}) => {
  const [localSearch, setLocalSearch] = useState('');

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearch.trim()) {
      setSearchQuery(localSearch.trim());
      onOpenMedicineSearch();
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F5F4] via-emerald-50/50 to-[#F0F5F4] dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Subtle Medical Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Verification Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-ping" />
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Licensed Pharmacy • Sakura Mor, Kurtha, Bihar</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                Nishant Medical Hall
              </h1>
              <p className="text-lg sm:text-xl font-bold text-emerald-700 dark:text-emerald-400">
                Your Trusted Pharmacy in Kurtha
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Providing 100% genuine medicines, healthcare products, surgical supplies, baby care, personal care, and daily medical essentials at affordable prices.
            </p>

            {/* Interactive Hero Search Box */}
            <form
              onSubmit={handleHeroSearchSubmit}
              className="bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-200 dark:border-slate-700 max-w-xl mx-auto lg:mx-0 flex items-center gap-2"
            >
              <div className="pl-3 text-emerald-600">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search medicine (e.g. Paracetamol, Pantocid, Dolo, BP Monitor)..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="w-full py-2 bg-transparent text-sm font-medium text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all whitespace-nowrap"
              >
                Find Medicine
              </button>
            </form>

            {/* Hero Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              {/* WhatsApp Order Button */}
              <button
                onClick={onOpenWhatsAppOrder}
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Order</span>
              </button>

              {/* Call Now Button */}
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 active:scale-95"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Now: {STORE_INFO.phone}</span>
              </a>

              {/* Get Directions Button */}
              <a
                href={STORE_INFO.googleMapShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-sm border border-slate-200 dark:border-slate-700 shadow-xs transition-all flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Key Quick Highlight Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-center lg:text-left border-t border-slate-200/80 dark:border-slate-800">
              <div className="p-3 bg-white/70 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-xl font-black text-emerald-700 dark:text-emerald-400">100%</p>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">Genuine Meds</p>
              </div>
              <div className="p-3 bg-white/70 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-xl font-black text-emerald-700 dark:text-emerald-400">10,000+</p>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">Happy Patients</p>
              </div>
              <div className="p-3 bg-white/70 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-xl font-black text-emerald-700 dark:text-emerald-400">12+ Yrs</p>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">Local Trust</p>
              </div>
              <div className="p-3 bg-white/70 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-xl font-black text-emerald-700 dark:text-emerald-400">Fast</p>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">WhatsApp Dispatch</p>
              </div>
            </div>

          </div>

          {/* Hero Right Column Banner & Quick Prescription Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Visual Hero Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80"
                alt="Nishant Medical Hall Kurtha Pharmacy"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              {/* Overlay Glassmorphism Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 dark:border-slate-800 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <Pill className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Fast Prescription Upload & Order
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Send doctor slip directly on WhatsApp for quick processing
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Upload Prescription CTA Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xl flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="inline-block px-2 py-0.5 rounded bg-emerald-800/80 text-[10px] font-bold uppercase tracking-wider">
                  Instant Support
                </span>
                <h4 className="text-base font-extrabold">Have a Doctor's Prescription?</h4>
                <p className="text-xs text-emerald-100">Upload on WhatsApp & get pricing & stock immediately.</p>
              </div>
              <button
                onClick={onOpenWhatsAppOrder}
                className="px-4 py-2.5 rounded-xl bg-white text-emerald-800 font-bold text-xs hover:bg-emerald-50 transition-colors whitespace-nowrap shadow-md flex items-center gap-1.5"
              >
                <Upload className="w-4 h-4 text-emerald-600" />
                Upload Slip
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
