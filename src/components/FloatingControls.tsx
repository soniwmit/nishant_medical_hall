import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, AlertTriangle } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface FloatingControlsProps {
  onOpenWhatsAppOrder: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenWhatsAppOrder }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          title="Back To Top"
          className="pointer-events-auto p-3 rounded-full bg-slate-900/90 dark:bg-slate-800/90 hover:bg-slate-800 text-white shadow-xl backdrop-blur-md transition-all active:scale-95 border border-slate-700"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Direct Call Button */}
      <a
        href={`tel:${STORE_INFO.phone}`}
        title={`Call ${STORE_INFO.name}`}
        className="pointer-events-auto p-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-emerald-400 shadow-xl transition-all active:scale-95 flex items-center justify-center border border-slate-700"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Button with Pulse Ring */}
      <div className="relative pointer-events-auto">
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping" />
        <button
          onClick={onOpenWhatsAppOrder}
          title="Order Genuine Medicines on WhatsApp"
          className="relative p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/50 transition-all active:scale-95 flex items-center justify-center gap-2 font-bold text-xs"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="hidden md:inline pr-1">WhatsApp Order</span>
        </button>
      </div>

    </div>
  );
};
