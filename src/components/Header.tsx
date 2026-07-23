import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Search,
  Sun,
  Moon,
  Pill,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { PageTab } from '../types';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenWhatsAppOrder: () => void;
  onOpenMedicineSearch: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenWhatsAppOrder,
  onOpenMedicineSearch,
  darkMode,
  setDarkMode
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Emergency Announcement Bar */}
      <div className="bg-emerald-700 text-white text-xs font-medium py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
            <span>Sakura Mor, Kurtha Kinjar Road, Arwal, Bihar - 804421</span>
            <span className="hidden md:inline-block text-emerald-200">|</span>
            <span className="hidden md:flex items-center gap-1 text-emerald-100">
              <Clock className="w-3 h-3 inline" /> Open Daily: 7:00 AM – 10:00 PM
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden lg:inline text-emerald-100">Emergency Medicine Hotline:</span>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="inline-flex items-center gap-1 text-white font-bold hover:underline"
            >
              <Phone className="w-3 h-3" />
              {STORE_INFO.formattedPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-emerald-100 dark:border-slate-800 py-3'
            : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-emerald-100 dark:border-slate-800 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Name */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left focus:outline-none group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                <Pill className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="text-xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
                    Nishant <span className="text-emerald-600 dark:text-emerald-400">Medical Hall</span>
                  </h1>
                </div>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Licensed Pharmacy • Kurtha, Bihar
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 font-bold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Header Right Action CTA Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              {/* Medicine Quick Search */}
              <button
                onClick={onOpenMedicineSearch}
                title="Search Medicines"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-semibold border border-slate-200 dark:border-slate-700"
              >
                <Search className="w-4 h-4 text-emerald-600" />
                <span className="hidden md:inline">Search Medicine</span>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                title="Toggle Light/Dark Theme"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700"
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
              </button>

              {/* Phone Call CTA */}
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Call Store</span>
              </a>

              {/* WhatsApp Order CTA */}
              <button
                onClick={onOpenWhatsAppOrder}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-600/30 transition-all flex items-center gap-1.5 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Order</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
              >
                {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={onOpenMedicineSearch}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
              >
                <Search className="w-5 h-5 text-emerald-600" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <button
                onClick={() => {
                  onOpenWhatsAppOrder();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Order
              </button>
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                Call Now
              </a>
            </div>

            <div className="space-y-1 pt-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                      isActive
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-emerald-600" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
