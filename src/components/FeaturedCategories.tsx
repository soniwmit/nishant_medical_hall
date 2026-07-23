import React, { useState } from 'react';
import {
  Pill,
  Syringe,
  Stethoscope,
  Award,
  Sparkles,
  HeartPulse,
  ShieldCheck,
  Activity,
  ShoppingBag,
  Search,
  MessageCircle,
  FileText,
  Check,
  ChevronRight
} from 'lucide-react';
import { CATEGORIES_LIST, SAMPLE_MEDICINES } from '../data/storeData';
import { CategoryItem, MedicineProduct } from '../types';

interface FeaturedCategoriesProps {
  onOpenWhatsAppOrder: () => void;
  onOpenMedicineSearch: () => void;
  setSearchQuery: (q: string) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({
  onOpenWhatsAppOrder,
  onOpenMedicineSearch,
  setSearchQuery
}) => {
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill': return <Pill className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Syringe': return <Syringe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Award': return <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default: return <Pill className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const filteredMedicines = selectedCategoryName === 'All'
    ? SAMPLE_MEDICINES.slice(0, 6)
    : SAMPLE_MEDICINES.filter(m => m.category.toLowerCase().includes(selectedCategoryName.toLowerCase()));

  const handleCategoryClick = (catName: string) => {
    setSelectedCategoryName(catName);
    setSearchQuery(catName);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F0F5F4]/60 dark:bg-slate-900 border-b border-emerald-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              Browse Medicine Inventory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Medicine Categories
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xl">
              Explore our well-stocked inventory of authentic pharmaceuticals, surgical items, and health supplements.
            </p>
          </div>

          <button
            onClick={onOpenMedicineSearch}
            className="px-5 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 font-bold text-xs border border-emerald-200 dark:border-emerald-800 flex items-center gap-2 self-start md:self-auto transition-colors"
          >
            <Search className="w-4 h-4 text-emerald-600" />
            <span>Search All 1,000+ Products</span>
          </button>
        </div>

        {/* 12 Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
          {CATEGORIES_LIST.map((cat) => {
            const isSelected = selectedCategoryName === cat.name;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.name)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/20'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 dark:bg-emerald-950/80'
                  }`}>
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/60 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}>
                    {cat.itemCount}+ Items
                  </span>
                </div>

                <div>
                  <h3 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400'}`}>
                    {cat.name}
                  </h3>
                  <p className={`text-[11px] mt-0.5 line-clamp-1 ${isSelected ? 'text-emerald-100' : 'text-slate-500 dark:text-slate-400'}`}>
                    {cat.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Popular Sample Items Preview */}
        <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Pill className="w-5 h-5 text-emerald-600" />
              <span>Popular Products & Medicines in Stock</span>
            </h3>
            {selectedCategoryName !== 'All' && (
              <button
                onClick={() => setSelectedCategoryName('All')}
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Reset Filter (Show All)
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedicines.map((med) => (
              <div
                key={med.id}
                className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        {med.category}
                      </span>
                      <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                        {med.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Composition: {med.composition}
                      </p>
                    </div>
                    {med.requiresPrescription && (
                      <span className="px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 text-[10px] font-bold border border-rose-200 dark:border-rose-800 whitespace-nowrap">
                        Rx Required
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {med.description}
                  </p>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-slate-500 dark:text-slate-400">Pack: {med.packaging}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> In Stock
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-black text-slate-900 dark:text-white">{med.price}</span>
                      <span className="text-xs text-slate-400 line-through">{med.mrp}</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">{med.discount}</span>
                  </div>

                  <button
                    onClick={onOpenWhatsAppOrder}
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
