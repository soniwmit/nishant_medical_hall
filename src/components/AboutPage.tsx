import React from 'react';
import {
  ShieldCheck,
  Award,
  HeartPulse,
  Clock,
  UserCheck,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  Pill,
  Sparkles
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface AboutPageProps {
  onOpenWhatsAppOrder: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenWhatsAppOrder }) => {
  const timeline = [
    { year: '2012', title: 'Establishment of Nishant Medical Hall', desc: 'Opened our doors at Sakura Mor, Kurtha to provide authentic medicines to local residents.' },
    { year: '2015', title: 'Cold Chain & Vaccine Facility', desc: 'Upgraded store infrastructure with specialized medical refrigeration for insulin and vaccines.' },
    { year: '2018', title: 'Surgical & Diabetic Care Expansion', desc: 'Expanded inventory to include glucometers, digital BP monitors, and hospital surgical supplies.' },
    { year: '2021', title: 'Digital WhatsApp Ordering', desc: 'Introduced quick prescription upload via WhatsApp for instant medicine packing and zero queue time.' },
    { year: 'Present', title: '10,000+ Happy Patients Served', desc: 'Recognized as Kurtha and Arwal district’s most trusted local retail pharmacy.' }
  ];

  return (
    <div className="py-12 lg:py-20 bg-[#F0F5F4] dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            About Our Pharmacy
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Nishant Medical Hall
          </h1>
          <p className="text-lg text-emerald-700 dark:text-emerald-400 font-bold">
            {STORE_INFO.tagline}
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Serving Kurtha, Kinjar, and the wider Arwal district with uncompromised commitment to genuine pharmaceuticals and patient health.
          </p>
        </div>

        {/* Business Story & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Our Journey & Dedication
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              A Legacy of Trust in Local Healthcare
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Founded at Sakura Mor in Kurtha, Bihar, <strong>Nishant Medical Hall</strong> was created with a clear objective: ensuring every family in our town and surrounding villages has immediate access to 100% genuine, unadulterated medicines at fair and transparent prices.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              We understand that behind every prescription is a loved one seeking healing. That’s why we source our entire inventory directly from licensed pharmaceutical companies and certified drug distributors, storing all medicines under strict temperature-controlled standards.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">100% Authentic</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Strict Drug License Compliance</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                <HeartPulse className="w-6 h-6 text-emerald-600 mb-2" />
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">Patient Care First</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Friendly & Ethical Guidance</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 dark:border-slate-800 relative">
            <img
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80"
              alt="Nishant Medical Hall Shelves"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <p className="text-xs font-bold text-emerald-400">Sakura Mor Store Counter</p>
              <h3 className="text-lg font-extrabold">Serving Over 10,000 Families in Kurtha & Arwal</h3>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              To make reliable, high-quality, genuine medicines and medical devices available to every citizen of Kurtha and nearby regions at affordable prices without delays.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              To be the most modern, accessible, and trusted healthcare retail hub in Arwal district through digital prescription support and personalized patient care.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Values</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Integrity in medicine sourcing, zero tolerance for fake products, transparent discount rates, and polite, patient-centric customer service.
            </p>
          </div>
        </div>

        {/* Founder & Owner Message */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-900 via-slate-900 to-slate-950 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-[10px] font-bold uppercase tracking-wider">
              Management Message
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">"Your Well-Being Is Our Primary Duty"</h3>
            <p className="text-sm text-slate-200 leading-relaxed italic">
              "When we started Nishant Medical Hall at Sakura Mor, our primary aim was to eliminate the struggle local residents faced in finding authentic life-saving medicines locally. We take great pride in serving our community with complete honesty and dedication every day."
            </p>
            <div className="pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-black text-sm">
                N
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Nishant Kumar & Management Team</h4>
                <p className="text-xs text-emerald-400">Proprietor, Nishant Medical Hall, Kurtha</p>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Timeline */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Our Growth Journey
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Milestones of serving Kurtha and Arwal district</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700"
              >
                <span className="px-3 py-1 rounded-xl bg-emerald-600 text-white font-black text-xs whitespace-nowrap">
                  {item.year}
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={onOpenWhatsAppOrder}
            className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/30 transition-all inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Order Genuine Medicines on WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
