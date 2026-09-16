import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { studioConfig } from '../data/config';

export const FloatingWhatsApp = () => {
  const [showBubble, setShowBubble] = useState(true);

  const whatsappUrl = `https://wa.me/${studioConfig.whatsAppNumber}?text=${encodeURIComponent(
    'Hello! I am on your website and would like to check availability for an upcoming photography shoot.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      
      {/* Preview Tooltip Bubble */}
      {showBubble && (
        <div className="relative glass-card p-3.5 rounded-2xl border border-[#25D366]/40 shadow-2xl max-w-xs animate-bounce space-y-1">
          <button
            onClick={() => setShowBubble(false)}
            className="absolute -top-2 -right-2 p-1 bg-black text-gray-400 hover:text-white rounded-full border border-white/20"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span className="text-[11px] font-bold text-white uppercase tracking-wider">Need a Quick Quote?</span>
          </div>
          <p className="text-xs text-gray-300 font-light">
            Chat with our studio director directly on WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300 whatsapp-pulse"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-black text-[#25D366]" />
      </a>

    </div>
  );
};
