import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight, Camera } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { studioConfig } from '../data/config';

export const Contact = () => {
  const whatsappUrl = `https://wa.me/${studioConfig.whatsAppNumber}?text=${encodeURIComponent(
    'Hi! I would like to schedule a studio meeting or phone call to discuss our upcoming photography needs.'
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#171717] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
            <span>Get In Touch</span>
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
            Connect with Our <span className="gold-gradient-text italic font-normal">Studio Team</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            We operate out of Mumbai with global travel capabilities. Reach out directly via WhatsApp, Instagram, or phone.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#25D366] transition-all group flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-[#25D366]/10 text-[#25D366] rounded-xl border border-[#25D366]/30">
                <MessageCircle className="w-6 h-6 fill-[#25D366]" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[#25D366] transition-colors" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#25D366]">Instant Chat</span>
              <h3 className="font-serif-luxury text-xl font-bold text-white mt-1">WhatsApp Chat</h3>
              <p className="text-xs text-gray-400 mt-1">{studioConfig.whatsappFormatted}</p>
            </div>
          </a>

          {/* Instagram Handle */}
          <a
            href={studioConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#E1306C] transition-all group flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-[#E1306C]/10 text-[#E1306C] rounded-xl border border-[#E1306C]/30">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[#E1306C] transition-colors" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E1306C]">Instagram Feed</span>
              <h3 className="font-serif-luxury text-xl font-bold text-white mt-1">Follow Our Work</h3>
              <p className="text-xs text-gray-400 mt-1">{studioConfig.instagramHandle}</p>
            </div>
          </a>

          {/* Direct Call */}
          <a
            href={`tel:${studioConfig.phone.replace(/\s+/g, '')}`}
            className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#D4AF37] transition-all group flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl border border-[#D4AF37]/30">
                <Phone className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[#D4AF37] transition-colors" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">Direct Phone</span>
              <h3 className="font-serif-luxury text-xl font-bold text-white mt-1">Call Studio</h3>
              <p className="text-xs text-gray-400 mt-1">{studioConfig.phone}</p>
            </div>
          </a>

          {/* Email Inquiry */}
          <a
            href={`mailto:${studioConfig.email}`}
            className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#D4AF37] transition-all group flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl border border-[#D4AF37]/30">
                <Mail className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[#D4AF37] transition-colors" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">Official Email</span>
              <h3 className="font-serif-luxury text-xl font-bold text-white mt-1">Send Email</h3>
              <p className="text-xs text-gray-400 mt-1">{studioConfig.email}</p>
            </div>
          </a>

        </div>

        {/* Studio Location & Hours Box */}
        <div className="glass-card rounded-3xl p-8 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Studio Address & Base</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              {studioConfig.address}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Available for destination shoots across India (Jaipur, Udaipur, Goa, Kerala, Delhi NCR) and worldwide (Dubai, Turkey, Italy, Bali, UK).
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Mon - Sun: 10:00 AM - 8:00 PM IST</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-black/60 p-6 rounded-2xl border border-white/10 text-center space-y-3">
            <span className="w-3 h-3 bg-[#25D366] rounded-full inline-block animate-pulse"></span>
            <h4 className="font-serif-luxury text-xl font-bold text-white">Accepting 2026 / 2027 Bookings</h4>
            <p className="text-xs text-gray-400 font-light">
              Limited slots per wedding season to ensure maximum editorial quality for each couple.
            </p>
            <a
              href="#enquiry"
              className="inline-block mt-2 px-6 py-2.5 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#c49f27] transition-all"
            >
              Reserve Your Dates
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
