import React from 'react';
import { Heart, MessageCircle, Phone, Mail, ChevronUp } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { studioConfig } from '../data/config';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37] bg-black overflow-hidden flex items-center justify-center">
                <img src="/logo.jpg" alt="Abhi Photography Emblem" className="w-full h-full object-cover" />
              </div>
              <span className="font-serif-luxury text-2xl font-bold tracking-wider text-white">
                {studioConfig.brandName}
              </span>
            </div>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              {studioConfig.aboutShort}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={studioConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-[#E1306C] rounded-full text-gray-300 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${studioConfig.whatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-[#25D366] rounded-full text-gray-300 hover:text-black transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href={`mailto:${studioConfig.email}`}
                className="p-2 bg-white/5 hover:bg-[#D4AF37] rounded-full text-gray-300 hover:text-black transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-lg font-bold text-white tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home Banner</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Studio</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Services & Pricing</a></li>
              <li><a href="#drone" className="hover:text-[#D4AF37] transition-colors">4K Drone Showcase</a></li>
              <li><a href="#packages" className="hover:text-[#D4AF37] transition-colors">Wedding Packages</a></li>
              <li><a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Client Reviews</a></li>
              <li><a href="#enquiry" className="hover:text-[#D4AF37] transition-colors">Enquire Now</a></li>
            </ul>
          </div>

          {/* Services Offered */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-lg font-bold text-white tracking-wider">Specializations</h4>
            <ul className="space-y-2 text-xs font-light">
              <li>Traditional & Candid Wedding Photography</li>
              <li>Cinematic 4K Wedding Films & Teasers</li>
              <li>Destination Pre-Wedding Shoots</li>
              <li>UAV Drone Aerial Photography</li>
              <li>Post-Wedding & Honeymoon Portraits</li>
              <li>Handcrafted Leather Archival Albums</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-lg font-bold text-white tracking-wider">Direct Contact</h4>
            <p className="text-xs font-light">{studioConfig.address}</p>
            <p className="text-xs text-[#D4AF37] font-semibold">{studioConfig.phone}</p>
            <p className="text-xs text-gray-400">{studioConfig.email}</p>
            <a
              href="#enquiry"
              className="inline-block mt-2 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-black bg-[#D4AF37] rounded-lg hover:bg-[#c49f27] transition-colors"
            >
              Book Direct Enquiry
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-light gap-4">
          <p>© {new Date().getFullYear()} {studioConfig.brandName} PHOTOGRAPHY. All rights reserved.</p>
          
          <div className="flex items-center gap-1 text-gray-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for timeless wedding memories</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-gray-400 hover:text-[#D4AF37] transition-colors"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
