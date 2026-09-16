import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { studioConfig } from '../data/config';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'drone', 'packages', 'testimonials', 'enquiry', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Drone 4K', href: '#drone' },
    { name: 'Packages', href: '#packages' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Enquire', href: '#enquiry' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${studioConfig.whatsAppNumber}?text=${encodeURIComponent(
    'Hello! I visited Abhi Photography website and would like to inquire about booking a shoot.'
  )}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Custom Emblem */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group cursor-pointer shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#E8C37B]/60 overflow-hidden bg-black flex items-center justify-center group-hover:border-[#E8C37B] transition-all duration-300 shadow-md group-hover:scale-105">
              <img src="/logo.jpg" alt="Abhi Photography Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#E8C37B] transition-colors">
                {studioConfig.brandName}
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#B5B5B5] uppercase font-light">
                {studioConfig.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-xs xl:text-sm font-medium tracking-wider uppercase transition-all duration-200 relative ${
                    isActive ? 'text-[#E8C37B]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#E8C37B] rounded-full shadow-[0_0_8px_#E8C37B]"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* WhatsApp Fast CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider text-black bg-[#25D366] hover:bg-[#22bf5b] rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/20 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] bg-[#25D366]/10 rounded-full border border-[#25D366]/30 sm:hidden"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-[#25D366]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-gray-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#E8C37B]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-[#E8C37B]/20 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-lg text-xs font-semibold tracking-widest uppercase transition-all ${
                    isActive
                      ? 'bg-[#E8C37B]/20 text-[#E8C37B] border border-[#E8C37B]/40'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold tracking-wider text-black bg-[#25D366] rounded-lg shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
              <span>Direct WhatsApp Enquiry</span>
            </a>
            <a
              href={`tel:${studioConfig.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold tracking-wider text-white bg-white/10 hover:bg-white/20 rounded-lg border border-white/15"
            >
              <Phone className="w-4 h-4 text-[#E8C37B]" />
              <span>Call Us: {studioConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
