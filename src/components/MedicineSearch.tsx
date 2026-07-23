import React, { useState } from 'react';
import {
  X,
  Search,
  Pill,
  MessageCircle,
  Check,
  AlertCircle,
  FileText,
  Filter
} from 'lucide-react';
import { SAMPLE_MEDICINES, CATEGORIES_LIST } from '../data/storeData';

interface MedicineSearchProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSelectMedicineForOrder: (medName: string) => void;
}

export const MedicineSearch: React.FC<MedicineSearchProps> = ({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
  onSelectMedicineForOrder
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const filtered = SAMPLE_MEDICINES.filter((med) => {
    const matchesQuery =
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.composition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCat = selectedCategory === 'All' || med.category.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesQuery && matchesCat;
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              <Pill className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Live Store Inventory Finder
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Search 100% genuine medicines & devices at Nishant Medical Hall
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-white hover:bg-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search input bar */}
        <div className="p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 space-y-3">
          <div className="relative">
            <Search className="w-5 h-5 text-emerald-600 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              autoFocus
              placeholder="Search by brand name, salt composition, or device (e.g. Paracetamol, Dolo, BP Monitor, Pantocid)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-emerald-500 font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 font-bold flex items-center gap-1 flex-shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {['All', 'Tablets', 'Capsules', 'Syrups', 'Medical Equipment', 'Baby Products', 'Diabetic Care'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-xl font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map((med) => (
                <div
                  key={med.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 uppercase">
                        {med.category}
                      </span>
                      {med.requiresPrescription && (
                        <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950 px-2 py-0.5 rounded">
                          Rx Doctor Slip
                        </span>
                      )}
                    </div>

                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                      {med.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Salt/Composition: {med.composition}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                      {med.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-black text-slate-900 dark:text-white">{med.price}</span>
                        <span className="text-xs text-slate-400 line-through">{med.mrp}</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-bold">{med.packaging}</span>
                    </div>

                    <button
                      onClick={() => {
                        onSelectMedicineForOrder(med.name);
                        onClose();
                      }}
                      className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Order on WhatsApp</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 space-y-3">
              <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                No exact match found for "{searchQuery}"
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                We carry over 1,000+ medicines, injections, and surgical items at our store counter. Send your prescription directly on WhatsApp for manual verification!
              </p>
              <button
                onClick={() => {
                  onSelectMedicineForOrder(searchQuery);
                  onClose();
                }}
                className="mt-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs inline-flex items-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire "{searchQuery}" via WhatsApp</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
