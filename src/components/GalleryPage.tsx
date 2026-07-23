import React, { useState } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MessageCircle,
  Pill
} from 'lucide-react';
import { GALLERY_IMAGES } from '../data/storeData';
import { GalleryImage } from '../types';

interface GalleryPageProps {
  onOpenWhatsAppOrder: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenWhatsAppOrder }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const categories = ['All', 'Store Front', 'Shelves', 'Equipment', 'Products', 'Staff'];

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const openLightbox = (img: GalleryImage) => {
    setLightboxImage(img);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setZoomLevel(1);
  };

  const handleNextLightbox = () => {
    if (!lightboxImage) return;
    const currentIndex = filteredImages.findIndex(i => i.id === lightboxImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setLightboxImage(filteredImages[nextIndex]);
    setZoomLevel(1);
  };

  const handlePrevLightbox = () => {
    if (!lightboxImage) return;
    const currentIndex = filteredImages.findIndex(i => i.id === lightboxImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxImage(filteredImages[prevIndex]);
    setZoomLevel(1);
  };

  return (
    <div className="py-12 lg:py-20 bg-[#F0F5F4] dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            Store Visuals & Infrastructure
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Nishant Medical Hall Gallery
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Take a virtual tour of our clean, well-stocked pharmacy counter at Sakura Mor, Kurtha, equipped with specialized medicine storage and medical devices.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => openLightbox(img)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-2xl bg-white/90 text-slate-900 font-bold text-xs flex items-center gap-2 shadow-lg">
                    <Maximize2 className="w-4 h-4 text-emerald-600" />
                    <span>View Full Size</span>
                  </div>
                </div>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-bold backdrop-blur-md">
                  {img.category}
                </span>
              </div>

              <div className="p-5 space-y-1 bg-white dark:bg-slate-900">
                <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full Screen Lightbox Modal */}
        {lightboxImage && (
          <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200">
            
            {/* Top Lightbox Controls */}
            <div className="flex items-center justify-between text-white max-w-7xl w-full mx-auto">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-600 text-[10px] font-bold uppercase">
                  {lightboxImage.category}
                </span>
                <h3 className="text-lg font-bold">{lightboxImage.title}</h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel(prev => Math.min(prev + 0.3, 2.5))}
                  title="Zoom In"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setZoomLevel(prev => Math.max(prev - 0.3, 0.7))}
                  title="Zoom Out"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <button
                  onClick={closeLightbox}
                  title="Close Gallery"
                  className="p-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Main Lightbox Image Stage */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <button
                onClick={handlePrevLightbox}
                className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white shadow-xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="overflow-auto max-h-[75vh] max-w-[90vw] transition-transform duration-200 flex items-center justify-center">
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.title}
                  style={{ transform: `scale(${zoomLevel})` }}
                  className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl transition-transform"
                />
              </div>

              <button
                onClick={handleNextLightbox}
                className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white shadow-xl"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer Note */}
            <div className="max-w-3xl mx-auto w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
              <p className="text-xs text-slate-300 text-center sm:text-left">
                {lightboxImage.description}
              </p>
              <button
                onClick={() => {
                  closeLightbox();
                  onOpenWhatsAppOrder();
                }}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire Products</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
