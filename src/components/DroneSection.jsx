import React from 'react';
import { Aperture, ShieldCheck, Film, Compass, MessageCircle, Play } from 'lucide-react';
import { studioConfig } from '../data/config';

export const DroneSection = () => {
  const droneFeatures = [
    {
      title: "4K 60fps Aerial Cinema",
      desc: "Butter-smooth flight paths capturing sweeping palace architecture, coastal waves, and grand wedding processions."
    },
    {
      title: "48MP HDR Aerial Stills",
      desc: "Ultra-detailed aerial photography formatted for massive wall prints and fine-art albums."
    },
    {
      title: "Venue Establishing Shots",
      desc: "Contextual aerial cinematography establishing your luxury resort or heritage fort venue in cinematic grandeur."
    },
    {
      title: "UAV Licensed Operators",
      desc: "Experienced drone pilots adhering strictly to safety protocols, wind resistance, and flight permits."
    }
  ];

  const whatsappDroneUrl = `https://wa.me/${studioConfig.whatsAppNumber}?text=${encodeURIComponent(
    'Hello! I am interested in booking 4K Drone Aerial Photography & Videography for my event.'
  )}`;

  return (
    <section id="drone" className="py-24 bg-gradient-to-b from-[#171717] via-[#0D0D0D] to-[#171717] relative overflow-hidden">
      
      {/* Background Drone Image with Grid Effect */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=2000&q=90"
          alt="Drone Flight Grid"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Drone Showcase Text */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">
              <Compass className="w-4 h-4 animate-spin-slow" />
              <span>Dedicated Drone Showcase</span>
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-6xl font-bold text-white leading-tight">
              Elevate Your Story with <br />
              <span className="gold-gradient-text italic font-normal">Cinematic Aerial Cinema</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
              Standard ground-level cameras can only reveal part of the story. Our dedicated drone team provides Hollywood-grade 4K aerial videography and high-resolution aerial stills that capture the grand scale of your wedding venue.
            </p>

            {/* Drone Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {droneFeatures.map((feat, idx) => (
                <div key={idx} className="p-4 glass-card rounded-xl border border-white/10 hover:border-[#D4AF37]/40 transition-all">
                  <div className="flex items-center gap-2 mb-2 text-[#D4AF37]">
                    <Aperture className="w-4 h-4" />
                    <h3 className="font-serif-luxury text-base font-bold text-white">{feat.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* Drone CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={whatsappDroneUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold tracking-widest uppercase text-black bg-[#25D366] hover:bg-[#22bf5b] rounded-full transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
                <span>Book Drone Coverage</span>
              </a>

              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/20"
              >
                <span>Request Gear Sheet</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Video/Image Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden glass-card-gold p-3 border border-[#D4AF37]/40 shadow-2xl group">
              
              <div className="relative h-96 sm:h-[480px] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=85"
                  alt="Aerial Drone Perspective"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Simulated Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/90 text-black flex items-center justify-center shadow-[0_0_30px_#D4AF37] group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-black translate-x-0.5" />
                  </div>
                </div>

                {/* Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl border border-white/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-bold">Equipment Spec</span>
                      <h4 className="font-serif-luxury text-lg font-bold text-white">DJI Mavic 3 Pro Cine Dual-Cam</h4>
                    </div>
                    <span className="px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase font-bold rounded">
                      Apple ProRes 422
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
