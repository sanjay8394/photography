import React from 'react';
import { Check, Star, MessageCircle, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { packagesData } from '../data/packages';
import { studioConfig } from '../data/config';
import { Reveal } from './Reveal';

export const Packages = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-24 bg-[#060B18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#E8C37B] text-xs uppercase tracking-[0.25em] font-semibold">
              <span className="w-6 h-[1px] bg-[#E8C37B]"></span>
              <span>Services & Deliverables</span>
              <span className="w-6 h-[1px] bg-[#E8C37B]"></span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
              Curated Photography & <span className="gold-gradient-text italic font-normal">Film Packages</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light">
              Tailored service tiers crafted to suit intimate celebrations, multi-day royal weddings, and bespoke destination shoots.
            </p>
          </div>
        </Reveal>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packagesData.map((pkg, index) => {
            const isPopular = pkg.popular;
            const whatsappPackageUrl = `https://wa.me/${studioConfig.whatsAppNumber}?text=${encodeURIComponent(
              `Hello! I would like to enquire about the "${pkg.name}" package for my event.`
            )}`;

            return (
              <Reveal key={pkg.id} animation="fade-up" delay={index * 120} duration={650}>
                <div
                  className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 h-full ${
                    isPopular
                      ? 'glass-card-gold border-2 border-[#E8C37B] shadow-[0_0_30px_rgba(232,195,123,0.25)] transform -translate-y-2 hover:-translate-y-3'
                      : 'glass-card border border-white/10 hover:border-[#E8C37B]/40 hover:-translate-y-1'
                  }`}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#E8C37B] text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-black" />
                      <span>{pkg.badge}</span>
                    </div>
                  )}

                  <div>
                    {/* Package Title & Subtitle */}
                    <div className="text-center pb-6 border-b border-white/10 space-y-2">
                      <span className="text-[10px] tracking-widest uppercase text-[#E8C37B] font-semibold">
                        {pkg.badge}
                      </span>
                      <h3 className="font-serif-luxury text-2xl font-bold text-white">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-gray-400 font-light min-h-[36px]">
                        {pkg.subtitle}
                      </p>
                    </div>

                    {/* Feature Deliverables List */}
                    <div className="py-6 space-y-3">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-2">
                        Included Deliverables:
                      </span>
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <Check className="w-4 h-4 text-[#E8C37B] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <a
                      href={whatsappPackageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                        isPopular
                          ? 'bg-[#25D366] text-black hover:bg-[#22bf5b] shadow-lg transform hover:-translate-y-0.5'
                          : 'bg-[#E8C37B] text-black hover:bg-[#d8b36b] transform hover:-translate-y-0.5'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 fill-black" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        if (onSelectPackage) onSelectPackage(pkg.name);
                        const enquiryEl = document.getElementById('enquiry');
                        if (enquiryEl) enquiryEl.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-2 text-[11px] font-semibold text-gray-400 hover:text-white transition-colors text-center"
                    >
                      Fill Form Request &rarr;
                    </button>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Custom Guarantee Note */}
        <Reveal animation="fade-up" delay={500}>
          <div className="mt-12 text-center text-xs text-gray-400 max-w-xl mx-auto flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E8C37B]" />
            <span>All packages include RAW file backup retention, insurance, and custom contract terms.</span>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
