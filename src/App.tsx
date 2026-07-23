import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedCategories } from './components/FeaturedCategories';
import { WorkingProcess } from './components/WorkingProcess';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { GoogleMapSection } from './components/GoogleMapSection';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { GalleryPage } from './components/GalleryPage';
import { ContactPage } from './components/ContactPage';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { MedicineSearch } from './components/MedicineSearch';
import { FloatingControls } from './components/FloatingControls';
import { Footer } from './components/Footer';
import { SEOMeta } from './components/SEOMeta';
import { LegalModal } from './components/LegalModal';
import { PageTab } from './types';
import { STORE_INFO } from './data/storeData';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';
import { useTracker } from './hooks/useTracker';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState<string>('');
  const [isMedicineSearchOpen, setIsMedicineSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Global analytics tracking hook
  useTracker(activeTab);

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenWhatsAppOrder = (medName?: string) => {
    if (medName) {
      setPrefilledMedicine(medName);
    } else {
      setPrefilledMedicine('');
    }
    setIsWhatsAppModalOpen(true);
  };

  const handleOpenMedicineSearch = () => {
    setIsMedicineSearchOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F0F5F4] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300 flex flex-col justify-between">
      
      {/* Inject SEO Structured Data Schemas */}
      <SEOMeta activeTab={activeTab} />

      <div>
        {/* Sticky Header */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()}
          onOpenMedicineSearch={handleOpenMedicineSearch}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Breadcrumb Navigation Bar for Sub-Pages */}
        {activeTab !== 'home' && (
          <div className="bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 py-3 px-4">
            <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <button
                onClick={() => {
                  setActiveTab('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1"
              >
                <HomeIcon className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-emerald-700 dark:text-emerald-400 font-bold capitalize">
                {activeTab}
              </span>
            </div>
          </div>
        )}

        {/* Dynamic Main View Switcher */}
        <main>
          {activeTab === 'home' && (
            <React.Fragment>
              <Hero
                onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()}
                onOpenMedicineSearch={handleOpenMedicineSearch}
                setActiveTab={setActiveTab}
                setSearchQuery={setSearchQuery}
              />
              <WhyChooseUs onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />
              <ServicesSection
                onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()}
                setActiveTab={setActiveTab}
              />
              <FeaturedCategories
                onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()}
                onOpenMedicineSearch={handleOpenMedicineSearch}
                setSearchQuery={setSearchQuery}
              />
              <WorkingProcess onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />
              <Testimonials />
              <FAQSection onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />
              <GoogleMapSection onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />
            </React.Fragment>
          )}

          {activeTab === 'about' && (
            <AboutPage onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />
          )}

          {activeTab === 'services' && (
            <ServicesPage onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />
          )}

          {activeTab === 'gallery' && (
            <GalleryPage onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />
          )}

          {activeTab === 'testimonials' && (
            <div className="py-8">
              <Testimonials />
              <WhyChooseUs onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="py-8">
              <FAQSection onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />
            </div>
          )}

          {activeTab === 'contact' && (
            <ContactPage onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Floating Action Buttons */}
      <FloatingControls onOpenWhatsAppOrder={() => handleOpenWhatsAppOrder()} />

      {/* WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        prefilledMedicine={prefilledMedicine}
      />

      {/* Medicine Search Drawer */}
      <MedicineSearch
        isOpen={isMedicineSearchOpen}
        onClose={() => setIsMedicineSearchOpen(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelectMedicineForOrder={(medName) => handleOpenWhatsAppOrder(medName)}
      />

      {/* Legal Information Modal */}
      <LegalModal
        isOpen={!!legalModalType}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
