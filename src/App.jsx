import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { DroneSection } from './components/DroneSection';
import { Packages } from './components/Packages';
import { Testimonials } from './components/Testimonials';
import { EnquiryForm } from './components/EnquiryForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  const handleSelectPackage = (packageName) => {
    setSelectedPackage(packageName);
  };

  return (
    <div className="min-h-screen bg-[#060B18] text-white selection:bg-[#E8C37B] selection:text-black antialiased overflow-x-hidden">
      
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Hero Banner with Photo Carousel */}
      <Hero />

      {/* About & Studio Narrative */}
      <About />

      {/* Photography & Cinematography Services */}
      <Services onSelectService={handleSelectService} />

      {/* Dedicated Drone Aerial Showcase */}
      <DroneSection />

      {/* Packages & Pricing Investment */}
      <Packages onSelectPackage={handleSelectPackage} />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Enquiry Form with WhatsApp Integration */}
      <EnquiryForm selectedService={selectedService} selectedPackage={selectedPackage} />

      {/* Studio Contact & Location */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}
