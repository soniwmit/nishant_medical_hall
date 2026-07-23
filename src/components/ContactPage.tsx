import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertTriangle,
  Building
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface ContactPageProps {
  onOpenWhatsAppOrder: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenWhatsAppOrder }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Create formatted message and open WhatsApp
    const text = `Hello *Nishant Medical Hall*,\n\nI have an inquiry from your website:\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'N/A'}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encoded}`, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
    }, 4000);
  };

  return (
    <div className="py-12 lg:py-20 bg-[#F0F5F4] dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Contact Nishant Medical Hall
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Have questions about medicine availability, doctor prescriptions, or health devices? Call us or send a direct message below.
          </p>
        </div>

        {/* Emergency Alert Banner */}
        <div className="p-6 rounded-3xl bg-amber-500/10 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">24/7 Emergency Medicine Need?</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">Call our emergency store hotline anytime for urgent life-saving drug requests.</p>
            </div>
          </div>
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 whitespace-nowrap shadow-md"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call Hotline: {STORE_INFO.phone}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Business Details Card */}
          <div className="lg:col-span-5 space-y-8 bg-slate-50 dark:bg-slate-800/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                Store Location & Contact
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Serving Kurtha, Kinjar Road, and Arwal District
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Store Address</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                    {STORE_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Phone Number</h3>
                  <a href={`tel:${STORE_INFO.phone}`} className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                    {STORE_INFO.formattedPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">WhatsApp Support</h3>
                  <button onClick={onOpenWhatsAppOrder} className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                    {STORE_INFO.formattedWhatsapp} (Instant Reply)
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Working Hours</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    {STORE_INFO.workingHours.weekdays}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {STORE_INFO.workingHours.sunday}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <button
                onClick={onOpenWhatsAppOrder}
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick WhatsApp Prescription Order</span>
              </button>
            </div>
          </div>

          {/* Right Interactive Contact Form Column */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                Send Us a Direct Message
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Fill out the form below. Message will automatically open in WhatsApp for instant response!
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 text-emerald-900 dark:text-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-base">Message Transmitted!</h3>
                <p className="text-xs">Your inquiry has been formatted and opened in WhatsApp. Our store team will assist you immediately.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9955983898"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Medicine Availability">Medicine Availability Check</option>
                      <option value="Prescription Order">Prescription Fulfillment</option>
                      <option value="Medical Device Purchase">Medical Device Inquiry</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Message / Medicine Details</label>
                  <textarea
                    rows={4}
                    placeholder="Type the names of medicines, required quantity, or doctor's prescription details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30 transition-all active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Embedded Map at bottom */}
        <div className="rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-xl h-[380px]">
          <iframe
            src={STORE_INFO.googleMapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title="Google Map Location Nishant Medical Hall Kurtha"
            className="w-full h-full"
          />
        </div>

      </div>
    </div>
  );
};
