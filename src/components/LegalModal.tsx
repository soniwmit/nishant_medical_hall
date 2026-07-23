import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      body: (
        <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            At <strong>{STORE_INFO.name}</strong>, accessible from our local store in Kurtha, Bihar and website, we prioritize customer privacy. This Privacy Policy outlines the information collected when you contact us or request medicines via WhatsApp.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">1. Information We Collect</h4>
          <p>
            We collect personal details such as your Name, Mobile Number, Prescription photos, and Delivery Address solely for prescription verification and medicine packing.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">2. Prescription Confidentiality</h4>
          <p>
            Any medical prescription uploaded or sent to us on WhatsApp is handled under strict confidentiality by qualified pharmacists in accordance with Drugs & Cosmetics Act regulations.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">3. Data Sharing</h4>
          <p>
            We never sell, rent, or trade customer health data or phone numbers to third parties.
          </p>
        </div>
      )
    },
    terms: {
      title: "Terms & Conditions",
      body: (
        <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            Welcome to <strong>{STORE_INFO.name}</strong>. By placing an order via our website or WhatsApp, you agree to these Terms.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">1. Prescription Requirements</h4>
          <p>
            Schedule H and H1 prescription drugs (including antibiotics, psychiatric, and specialized care medicines) strictly require a valid medical prescription from a registered medical practitioner.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">2. Product Availability & Prices</h4>
          <p>
            Prices are based on Maximum Retail Price (MRP) with applied local discounts. Availability is subject to real-time store stock.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">3. Payment</h4>
          <p>
            Payments are accepted via Cash, UPI (Google Pay, PhonePe, Paytm), Net Banking, and Cards at store counter or delivery.
          </p>
        </div>
      )
    },
    disclaimer: {
      title: "Medical & Health Disclaimer",
      body: (
        <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            The information provided on this website is for general informational purposes only and does not constitute formal medical advice or diagnosis.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">Consult Doctor</h4>
          <p>
            Always consult a registered physician or healthcare professional before starting any new medication, altering dosage, or discontinuing treatment.
          </p>
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">Emergency Medical Attention</h4>
          <p>
            If you are experiencing a life-threatening medical emergency, please visit the nearest hospital or emergency center immediately.
          </p>
        </div>
      )
    }
  };

  const activeContent = content[type];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8">
        
        <div className="p-5 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              {activeContent.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeContent.body}
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
