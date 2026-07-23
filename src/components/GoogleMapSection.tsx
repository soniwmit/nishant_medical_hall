import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, ShieldCheck, Navigation } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface GoogleMapSectionProps {
  onOpenWhatsAppOrder: () => void;
}

export const GoogleMapSection: React.FC<GoogleMapSectionProps> = ({ onOpenWhatsAppOrder }) => {
  return (
    <section className="py-16 lg:py-24 bg-[#F0F5F4] dark:bg-slate-900 border-b border-emerald-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            Visit Our Pharmacy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Convenient Store Location
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Located right at Sakura Mor on Kurtha Kinjar Road in Arwal District, Bihar. Easily accessible with parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Store Info Card Column */}
          <div className="lg:col-span-5 space-y-6 bg-white dark:bg-slate-800/80 p-6 sm:p-8 rounded-3xl border border-emerald-100 dark:border-slate-700 shadow-xl shadow-emerald-900/5">
            
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase">
                Primary Store
              </span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Open Today (7 AM - 10 PM)
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Nishant Medical Hall
              </h3>
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-0.5">
                {STORE_INFO.tagline}
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-700 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs">Full Address:</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                    {STORE_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs">Store Timings:</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    {STORE_INFO.workingHours.weekdays}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {STORE_INFO.workingHours.sunday}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs">Direct Phone & WhatsApp:</h4>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                    {STORE_INFO.formattedPhone}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={STORE_INFO.googleMapShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
              >
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={onOpenWhatsAppOrder}
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </button>
            </div>

          </div>

          {/* Interactive Google Map Frame Column */}
          <div className="lg:col-span-7 h-[400px] sm:h-[450px] rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-xl relative">
            <iframe
              src={STORE_INFO.googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nishant Medical Hall Map Location Kurtha Arwal Bihar"
              className="w-full h-full filter contrast-105"
            />
            
            <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md text-[11px] font-bold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Kurtha, Arwal 804421</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
