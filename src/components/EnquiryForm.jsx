import React, { useState, useEffect } from 'react';
import { Send, MessageCircle, Calendar, MapPin, User, Phone, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { studioConfig } from '../data/config';
import { Reveal } from './Reveal';

export const EnquiryForm = ({ selectedService, selectedPackage }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    whatsAppNumber: '',
    eventType: 'Wedding',
    eventDate: '',
    location: '',
    numberOfEvents: '1',
    packageInterested: 'Not Sure',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, eventType: selectedService }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, packageInterested: selectedPackage }));
    }
  }, [selectedPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
    if (!formData.eventType) newErrors.eventType = 'Please select an event type';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    if (!formData.location.trim()) newErrors.location = 'Event location is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Construct structured WhatsApp message text
    const messageLines = [
      `📸 *NEW PHOTOGRAPHY ENQUIRY*`,
      `---------------------------------`,
      `👤 *Name:* ${formData.fullName}`,
      `📞 *Phone:* ${formData.phone}`,
      `💬 *WhatsApp:* ${formData.whatsAppNumber || formData.phone}`,
      `🎉 *Event Type:* ${formData.eventType}`,
      `📅 *Event Date:* ${formData.eventDate}`,
      `📍 *Location:* ${formData.location}`,
      `🔢 *No. of Events:* ${formData.numberOfEvents}`,
      `💎 *Package:* ${formData.packageInterested}`,
      formData.message ? `📝 *Message:* ${formData.message}` : '',
      `---------------------------------`,
      `Sent via ${studioConfig.brandName} Website Enquiry Form`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${studioConfig.whatsAppNumber}?text=${encodeURIComponent(messageLines)}`;
    
    setSubmitted(true);
    
    // Open WhatsApp in new browser tab
    window.open(whatsappUrl, '_blank');
  };

  const eventTypeOptions = [
    "Wedding",
    "Pre-Wedding",
    "Post-Wedding",
    "Reception",
    "Engagement",
    "Birthday",
    "Anniversary",
    "Baby Event",
    "Drone Aerial Shoot",
    "Other"
  ];

  const packageOptions = [
    "Silver Heritage",
    "Gold Cinematic",
    "Platinum Royal",
    "Custom Bespoke Package",
    "Not Sure"
  ];

  return (
    <section id="enquiry" className="py-24 bg-[#060B18] relative">
      
      {/* Background Ambient Light */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#E8C37B]/5 blur-[120px] rounded-full pointer-events-none ambient-glow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#E8C37B] text-xs uppercase tracking-[0.25em] font-semibold">
              <span className="w-6 h-[1px] bg-[#E8C37B]"></span>
              <span>Check Availability & Quotes</span>
              <span className="w-6 h-[1px] bg-[#E8C37B]"></span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white">
              Send a Direct <span className="gold-gradient-text italic font-normal">WhatsApp Enquiry</span>
            </h2>
            <p className="text-gray-400 text-sm font-light">
              Fill in your event details below. Submitting will open WhatsApp with a pre-filled enquiry message directly to our studio team.
            </p>
          </div>
        </Reveal>

        {/* Main Form Container */}
        <Reveal animation="zoom-in" delay={150} duration={800}>
          <div className="glass-card-gold rounded-3xl p-6 sm:p-10 border border-[#E8C37B]/30 shadow-2xl">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-3xl font-bold text-white">Opening WhatsApp...</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Your enquiry details have been formatted into WhatsApp. If WhatsApp didn't open automatically, click the button below:
                </p>
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:bg-[#22bf5b] transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 fill-black text-[#25D366]" />
                  <span>Open WhatsApp Chat Again</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Full Name <span className="text-[#E8C37B]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ananya Sharma"
                        className={`w-full pl-11 pr-4 py-3 bg-black/60 border ${errors.fullName ? 'border-red-500' : 'border-white/15 focus:border-[#E8C37B]'} rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.fullName && <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-[#E8C37B]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full pl-11 pr-4 py-3 bg-black/60 border ${errors.phone ? 'border-red-500' : 'border-white/15 focus:border-[#E8C37B]'} rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.phone && <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
                  </div>
                </div>

                {/* Row 2: WhatsApp Number & Event Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      WhatsApp Number <span className="text-gray-500 text-[10px]">(Optional if same)</span>
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                      <input
                        type="tel"
                        name="whatsAppNumber"
                        value={formData.whatsAppNumber}
                        onChange={handleChange}
                        placeholder="WhatsApp phone number"
                        className="w-full pl-11 pr-4 py-3 bg-black/60 border border-white/15 focus:border-[#E8C37B] rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Event Type <span className="text-[#E8C37B]">*</span>
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-[#E8C37B] rounded-xl text-sm text-white focus:outline-none transition-colors"
                    >
                      {eventTypeOptions.map(opt => (
                        <option key={opt} value={opt} className="bg-[#131D35] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Event Date & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Event Date <span className="text-[#E8C37B]">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className={`w-full pl-11 pr-4 py-3 bg-black/60 border ${errors.eventDate ? 'border-red-500' : 'border-white/15 focus:border-[#E8C37B]'} rounded-xl text-sm text-white focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.eventDate && <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.eventDate}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Event Location / City <span className="text-[#E8C37B]">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Udaipur, Rajasthan / Goa"
                        className={`w-full pl-11 pr-4 py-3 bg-black/60 border ${errors.location ? 'border-red-500' : 'border-white/15 focus:border-[#E8C37B]'} rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.location && <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.location}</p>}
                  </div>
                </div>

                {/* Row 4: No. of Events & Package Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Number of Events / Days
                    </label>
                    <select
                      name="numberOfEvents"
                      value={formData.numberOfEvents}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-[#E8C37B] rounded-xl text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="1" className="bg-[#131D35]">1 Day / Single Event</option>
                      <option value="2" className="bg-[#131D35]">2 Days</option>
                      <option value="3" className="bg-[#131D35]">3 Days</option>
                      <option value="4+" className="bg-[#131D35]">4+ Days Grand Destination</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Package Interested In
                    </label>
                    <select
                      name="packageInterested"
                      value={formData.packageInterested}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-[#E8C37B] rounded-xl text-sm text-white focus:outline-none transition-colors"
                    >
                      {packageOptions.map(pkg => (
                        <option key={pkg} value={pkg} className="bg-[#131D35]">
                          {pkg}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 5: Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Special Requests / Message
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event vision, drone needs, or specific venue details..."
                    className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-[#E8C37B] rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#22bf5b] text-black font-bold text-xs sm:text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-black text-[#25D366]" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-gray-500 font-light">
                  🔒 We respect your privacy. No personal data is stored on external servers.
                </p>

              </form>
            )}

          </div>
        </Reveal>

      </div>
    </section>
  );
};
