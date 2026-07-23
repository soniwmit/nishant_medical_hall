import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/storeData';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F0F5F4] dark:bg-slate-900 border-b border-emerald-100 dark:border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            Why Customers Trust Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved By Families Across Kurtha & Arwal
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Read genuine experiences from local residents, healthcare workers, and families who rely on Nishant Medical Hall.
          </p>
        </div>

        {/* Featured Review Spotlight Slider */}
        <div className="max-w-4xl mx-auto mb-14 relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-900 border border-emerald-200/80 dark:border-slate-700 shadow-xl">
          <Quote className="w-12 h-12 text-emerald-300 dark:text-emerald-800 absolute top-6 right-6 opacity-40" />

          <div className="space-y-6 relative z-10">
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Comment */}
            <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed italic">
              "{TESTIMONIALS[activeIndex].comment}"
            </p>

            {/* User Info */}
            <div className="flex items-center justify-between pt-4 border-t border-emerald-200/60 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shadow-md">
                  {TESTIMONIALS[activeIndex].avatarText}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{TESTIMONIALS[activeIndex].name}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" title="Verified Customer" />
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {TESTIMONIALS[activeIndex].location} • {TESTIMONIALS[activeIndex].date}
                  </p>
                </div>
              </div>

              {/* Slider Prev / Next Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-700 hover:bg-emerald-100 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 shadow-xs transition-colors"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-700 hover:bg-emerald-100 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 shadow-xs transition-colors"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={review.id}
              onClick={() => setActiveIndex(idx)}
              className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                activeIndex === idx
                  ? 'bg-emerald-600 text-white shadow-xl scale-[1.02]'
                  : 'bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-emerald-300'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          activeIndex === idx ? 'fill-amber-300 text-amber-300' : 'fill-amber-400 text-amber-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    activeIndex === idx ? 'bg-white/20 text-white' : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                  }`}>
                    Verified Customer
                  </span>
                </div>

                <p className={`text-xs leading-relaxed ${activeIndex === idx ? 'text-emerald-50' : 'text-slate-600 dark:text-slate-300'}`}>
                  "{review.comment}"
                </p>
              </div>

              <div className={`pt-4 mt-4 border-t ${activeIndex === idx ? 'border-white/20' : 'border-slate-200/80 dark:border-slate-700'} flex items-center gap-3`}>
                <div className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center ${
                  activeIndex === idx ? 'bg-white text-emerald-800' : 'bg-emerald-600 text-white'
                }`}>
                  {review.avatarText}
                </div>
                <div>
                  <h5 className={`text-xs font-bold ${activeIndex === idx ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {review.name}
                  </h5>
                  <p className={`text-[10px] ${activeIndex === idx ? 'text-emerald-100' : 'text-slate-500 dark:text-slate-400'}`}>
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
