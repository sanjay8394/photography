import React, { useState } from 'react';
import { Maximize2, MapPin, Sparkles, Filter } from 'lucide-react';
import { portfolioCategories, portfolioItems } from '../data/portfolio';
import { LightboxModal } from './LightboxModal';

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setSelectedItemIndex(index);
  };

  const handleNavigateLightbox = (direction) => {
    if (selectedItemIndex === null) return;
    if (direction === 'next') {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    } else {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
            <span>Visual Storytelling</span>
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
            Curated Portfolio & <span className="gold-gradient-text italic font-normal">Fine-Art Galleries</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Explore our featured showcase across weddings, drone cinema, pre-wedding journeys, and luxury galas.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedItemIndex(null);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 cursor-pointer hover:border-[#D4AF37]/50 transition-all duration-500 shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-md text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] border border-[#D4AF37]/30">
                    {item.category}
                  </span>
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute top-4 right-4 z-10 p-2.5 bg-black/60 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                  <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
                </div>

                {/* Card Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-gray-300 font-light">
                    <span>{item.client}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <MapPin className="w-3 h-3 text-[#D4AF37]" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItemIndex !== null && (
          <LightboxModal
            item={filteredItems[selectedItemIndex]}
            items={filteredItems}
            onClose={() => setSelectedItemIndex(null)}
            onNavigate={handleNavigateLightbox}
          />
        )}

      </div>
    </section>
  );
};
