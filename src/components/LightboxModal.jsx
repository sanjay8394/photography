import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, User, MessageCircle, ExternalLink } from 'lucide-react';
import { studioConfig } from '../data/config';

export const LightboxModal = ({ item, items, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (!item) return null;

  const whatsappMessage = `Hi! I saw the photo "${item.title}" (${item.client}, ${item.location}) in your online portfolio and would like to inquire about similar photography for my event.`;
  const whatsappUrl = `https://wa.me/${studioConfig.whatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 animate-fadeIn">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 text-gray-300 hover:text-white bg-white/10 hover:bg-[#D4AF37] hover:text-black rounded-full transition-all"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation Button */}
      {items.length > 1 && (
        <button
          onClick={() => onNavigate('prev')}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 text-white bg-black/50 hover:bg-[#D4AF37] hover:text-black border border-white/20 rounded-full transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Navigation Button */}
      {items.length > 1 && (
        <button
          onClick={() => onNavigate('next')}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 text-white bg-black/50 hover:bg-[#D4AF37] hover:text-black border border-white/20 rounded-full transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Content Modal Container */}
      <div className="max-w-6xl w-full max-h-[90vh] flex flex-col lg:flex-row glass-card rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
        
        {/* Main Image Stage */}
        <div className="lg:w-3/4 bg-black flex items-center justify-center relative min-h-[300px] sm:min-h-[450px] lg:min-h-[600px] p-2">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[85vh] max-w-full object-contain rounded"
          />
        </div>

        {/* Sidebar Info */}
        <div className="lg:w-1/4 p-6 flex flex-col justify-between space-y-6 bg-[#171717] border-t lg:border-t-0 lg:border-l border-white/10">
          
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase font-bold tracking-widest rounded">
              {item.category} • {item.subcategory}
            </div>

            <h3 className="font-serif-luxury text-2xl font-bold text-white leading-tight">
              {item.title}
            </h3>

            <div className="space-y-2 pt-2 text-xs text-gray-300 border-t border-white/10">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-medium text-white">{item.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>{item.location}</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-light leading-relaxed pt-2">
              {item.description}
            </p>
          </div>

          {/* WhatsApp Instant CTA */}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold tracking-wider uppercase text-black bg-[#25D366] hover:bg-[#22bf5b] rounded-xl transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
              <span>Enquire Similar Shoot</span>
            </a>
            <p className="text-[10px] text-center text-gray-400">
              Opens WhatsApp with pre-filled photo details
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
