import React from 'react';
import {
  Pill,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  ExternalLink,
  Heart
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { PageTab } from '../types';

interface FooterProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenWhatsAppOrder: () => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
}

export const Footer: React.FC<FooterProps> = ({
  activeTab,
  setActiveTab,
  onOpenWhatsAppOrder,
  onOpenLegal
}) => {
  const handleNav = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Business Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <Pill className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white leading-none">
                  Nishant <span className="text-emerald-400">Medical Hall</span>
                </h3>
                <p className="text-[10px] text-slate-400 mt-1">Licensed Retail Pharmacy</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {STORE_INFO.tagline}. Dedicated to delivering 100% genuine pharmaceuticals, baby care, and medical equipment across Kurtha & Arwal district.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={onOpenWhatsAppOrder}
                className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Order</span>
              </button>
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Store</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Pharmacy Services' },
                { id: 'gallery', label: 'Store Gallery' },
                { id: 'testimonials', label: 'Customer Reviews' },
                { id: 'faq', label: 'Help & FAQs' },
                { id: 'contact', label: 'Contact & Map' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id as PageTab)}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-emerald-500">›</span> {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Prescription Medicines</li>
              <li>• OTC Fever & Pain Care</li>
              <li>• Baby Products & Infant Nutrition</li>
              <li>• Diabetic Care & Test Strips</li>
              <li>• Omron BP Monitors & Oximeters</li>
              <li>• First Aid Kits & Surgical Items</li>
              <li>• Protein & Vitamin Supplements</li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Store Contact & Hours
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-emerald-400 font-bold text-slate-200">
                  {STORE_INFO.formattedPhone}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p>{STORE_INFO.workingHours.weekdays}</p>
                  <p>{STORE_INFO.workingHours.sunday}</p>
                </div>
              </div>

              <a
                href={STORE_INFO.googleMapShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 font-bold hover:underline pt-1"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {STORE_INFO.name}. All Rights Reserved. | Developed by{' '}
            <a
              href="https://main.webmakerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-semibold"
            >
              WMIT
            </a>
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-slate-300 transition-colors"
            >
              Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
