import React from 'react';
import { Check, Star, MessageCircle, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { packagesData } from '../data/packages';
import { studioConfig } from '../data/config';

export const Packages = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-24 bg-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-semibold">
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
            <span>Investment & Pricing</span>
            <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
            Curated Photography & <span className="gold-gradient-text italic font-normal">Film Packages</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Transparent investment tiers crafted to suit intimate celebrations, multi-day royal weddings, and bespoke destination shoots.
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packagesData.map((pkg) => {
            const isPopular = pkg.popular;
            const whatsappPackageUrl = `https://wa.me/${studioConfig.whatsAppNumber}?text=${encodeURIComponent(
              `Hello! I would like to enquire about the "${pkg.name}" (${pkg.priceRange}) for my event.`
            )}`;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'glass-card-gold border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.25)] transform -translate-y-2'
                    : 'glass-card border border-white/10 hover:border-[#D4AF37]/40'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md flex items-center gap-1">
                    <Star className="w-3 h-3 fill-black" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  {/* Package Title & Price */}
                  <div className="text-center pb-6 border-b border-white/10 space-y-2">
                    <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold">
                      {pkg.badge}
                    </span>
                    <h3 className="font-serif-luxury text-2xl font-bold text-white">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-light min-h-[36px]">
                      {pkg.subtitle}
                    </p>
                    <div className="pt-3">
                      <span className="font-serif-luxury text-2xl font-bold text-[#D4AF37]">
                        {pkg.priceRange}
                      </span>
                    </div>
                  </div>

                  {/* Feature Deliverables List */}
                  <div className="py-6 space-y-3">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-2">
                      Included Deliverables:
                    </span>
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
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
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                      isPopular
                        ? 'bg-[#25D366] text-black hover:bg-[#22bf5b] shadow-lg'
                        : 'bg-[#D4AF37] text-black hover:bg-[#c49f27]'
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
                    className="w-full py-2.5 text-[11px] font-semibold text-gray-400 hover:text-white transition-colors text-center"
                  >
                    Fill Form Request &rarr;
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Guarantee Note */}
        <div className="mt-12 text-center text-xs text-gray-400 max-w-xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span>All packages include RAW file backup retention, insurance, and custom contract terms.</span>
        </div>

      </div>
    </section>
  );
};
