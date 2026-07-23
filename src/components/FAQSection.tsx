import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS_LIST } from '../data/storeData';

interface FAQSectionProps {
  onOpenWhatsAppOrder: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenWhatsAppOrder }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [faqSearch, setFaqSearch] = useState('');
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Medicines', 'Orders', 'Store'];

  const filteredFaqs = FAQS_LIST.filter(faq => {
    const matchesCategory = activeFaqCategory === 'All' || faq.category === activeFaqCategory;
    const matchesQuery = faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F0F5F4]/60 dark:bg-slate-950/80 border-b border-emerald-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            Help & Information
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base max-w-2xl mx-auto">
            Find quick answers to common questions regarding prescription fulfillment, WhatsApp ordering, store hours, and genuine medicine guarantees.
          </p>
        </div>

        {/* FAQ Search Bar & Categories */}
        <div className="space-y-4 mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search FAQ (e.g. delivery, prescription, hours, payments)..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFaqCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeFaqCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 10 FAQs Accordion */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span className="text-base font-bold text-slate-900 dark:text-white">
                        {faq.question}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/80 leading-relaxed bg-slate-50/50 dark:bg-slate-900/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <p className="text-slate-500">No matching questions found. Have a specific inquiry?</p>
              <button
                onClick={onOpenWhatsAppOrder}
                className="mt-3 text-xs font-bold text-emerald-600 hover:underline inline-flex items-center gap-1"
              >
                <MessageCircle className="w-4 h-4" /> Ask us directly on WhatsApp
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
