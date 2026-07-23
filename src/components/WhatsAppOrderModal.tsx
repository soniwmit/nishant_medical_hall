import React, { useState } from 'react';
import {
  X,
  MessageCircle,
  Phone,
  Upload,
  FileText,
  CheckCircle2,
  Clock,
  Pill,
  Image as ImageIcon
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { WhatsAppOrderFormData } from '../types';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicineName: prefilledMedicine,
    hasPrescription: 'No',
    preferredTime: 'Morning (8 AM - 12 PM)',
    message: ''
  });

  const [prescriptionPreview, setPrescriptionPreview] = useState<string | null>(null);
  const [prescriptionName, setPrescriptionName] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPrescriptionName(file.name);
      setFormData(prev => ({ ...prev, hasPrescription: 'Yes', prescriptionFileName: file.name }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrescriptionPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.mobileNumber) {
      alert('Please fill in your Customer Name and Mobile Number.');
      return;
    }

    // Prefilled message exactly matching prompt specifications
    let formattedText = `Hello Nishant Medical Hall\n\n`;
    formattedText += `Customer Name:\n${formData.customerName}\n\n`;
    formattedText += `Phone:\n${formData.mobileNumber}\n\n`;
    if (formData.email) {
      formattedText += `Email:\n${formData.email}\n\n`;
    }
    formattedText += `Medicine Required:\n${formData.medicineName || 'As per prescription image'}\n\n`;
    formattedText += `Address:\n${formData.address || 'Local Kurtha Counter Pickup'}\n\n`;
    formattedText += `Prescription:\n${formData.hasPrescription}${prescriptionName ? ` (${prescriptionName})` : ''}\n\n`;
    if (formData.preferredTime) {
      formattedText += `Preferred Time:\n${formData.preferredTime}\n\n`;
    }
    if (formData.message) {
      formattedText += `Message:\n${formData.message}\n\n`;
    }
    formattedText += `[Sent via Nishant Medical Hall Website]`;

    const encoded = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encoded}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-white">
              <MessageCircle className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold leading-tight">
                WhatsApp Medicine Order Form
              </h2>
              <p className="text-xs text-emerald-100">
                Direct to Nishant Medical Hall Kurtha Counter
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="p-6 space-y-4 text-left">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Customer Name *</label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Mobile Number *</label>
              <input
                type="tel"
                required
                placeholder="10-digit phone number"
                value={formData.mobileNumber}
                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Email Address (Optional)</label>
              <input
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Preferred Pickup / Delivery Time</label>
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
              >
                <option value="Instant Counter Pickup">Instant Counter Pickup (Within 15 mins)</option>
                <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 9 PM)">Evening (4 PM - 9 PM)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Delivery Address / Landmark</label>
            <input
              type="text"
              placeholder="e.g. Sakura Mor, Kurtha / Kinjar Road Arwal"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Medicine Name(s) & Quantity</label>
            <textarea
              rows={2}
              placeholder="e.g. Paracetamol 650mg (2 strips), Pantocid 40mg (1 strip), Omron BP Monitor"
              value={formData.medicineName}
              onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Prescription Upload Box */}
          <div className="space-y-2 pt-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>Upload Doctor Prescription Photo (Optional)</span>
              <span className="text-[10px] text-emerald-600 font-semibold">JPG, PNG, PDF</span>
            </label>

            <div className="relative border-2 border-dashed border-emerald-300 dark:border-slate-700 hover:border-emerald-500 rounded-2xl p-4 text-center bg-emerald-50/40 dark:bg-slate-800/40 transition-colors cursor-pointer">
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              {prescriptionPreview ? (
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={prescriptionPreview}
                    alt="Prescription preview"
                    className="w-12 h-12 object-cover rounded-xl border border-emerald-400"
                  />
                  <div className="text-left">
                    <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Prescription Attached
                    </p>
                    <p className="text-[11px] text-slate-500 truncate max-w-[200px]">{prescriptionName}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-1">
                  <Upload className="w-6 h-6 text-emerald-600 mx-auto" />
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-200">
                    Click or Drag & Drop Prescription Slip Photo
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Our pharmacist will read dosage details directly from the slip.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Additional Instructions / Message</label>
            <input
              type="text"
              placeholder="Any specific brand preference or urgent note..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Form Submit Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
            <button
              type="submit"
              className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${STORE_INFO.phone}`}
              className="py-3.5 px-4 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Now: {STORE_INFO.phone}</span>
            </a>
          </div>

        </form>

      </div>
    </div>
  );
};
