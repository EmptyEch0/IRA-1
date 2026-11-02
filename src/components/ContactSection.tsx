import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/propertyData';
import { validateEnquiry, buildWhatsAppLink, EnquiryData } from '../utils/enquiry';

interface ContactSectionProps {
  initialRequirement?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialRequirement = '' }) => {
  const [formData, setFormData] = useState<EnquiryData>({
    fullName: '',
    phoneNumber: '',
    requirement: initialRequirement || 'Interested in Madhurawada & Bhogapuram open plots. Please share layout brochure.',
    consent: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateEnquiry(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Build and open WhatsApp link
    const whatsappUrl = buildWhatsAppLink(formData, CONTACT_INFO.phoneClean);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="w-full bg-[#0b1928] text-white py-20 lg:py-28 border-b border-[#1b2b3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Office Details */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c5a880]"></span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#c5a880]">
                VISAKHAPATNAM 530016
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.08] text-[#fbf9f5]">
              Let’s find the<br />
              <span className="font-serif italic text-[#dfc8a5] underline decoration-[#c5a880]/50 underline-offset-8">
                right place
              </span>{' '}
              to begin.
            </h2>

            <div className="space-y-6 pt-4 text-sm text-[#b8c5d3] font-light">
              {/* Address */}
              <div className="space-y-1.5 border-l-2 border-[#c5a880] pl-4">
                <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#dfc8a5]">
                  CORPORATE HEADQUARTERS:
                </div>
                <p className="leading-relaxed text-[#dbe2eb]">
                  IRA Promoters, Opp CMR Central, VIP Road, Resapuvanipalem,
                  <br />
                  Dwarkanagar, Visakhapatnam - 530016
                </p>
              </div>

              {/* Telephone */}
              <div className="space-y-1.5 border-l-2 border-[#1e3349] pl-4">
                <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#dfc8a5]">
                  DIRECT TELEPHONE:
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phoneClean}`}
                  className="text-white hover:text-[#c5a880] transition-colors font-medium text-base tracking-wide flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#c5a880]" />
                  {CONTACT_INFO.phone}
                </a>
              </div>

              {/* Hours */}
              <div className="space-y-1.5 border-l-2 border-[#1e3349] pl-4">
                <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#dfc8a5]">
                  HOURS OF ENGAGEMENT:
                </div>
                <p className="text-[#dbe2eb]">
                  Monday through Saturday: 09:30 AM – 06:30 PM IST
                </p>
              </div>
            </div>

            {/* Instant WhatsApp Banner */}
            <div className="pt-4">
              <a
                href={`https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent('Hello IRA Promoters, I would like to enquire about open plots in Visakhapatnam.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#0d2238] border border-[#20364f] hover:border-[#c5a880] text-[#dfc8a5] hover:text-white px-5 py-3.5 transition-all text-xs tracking-widest uppercase font-semibold w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4 text-[#c5a880]" />
                INSTANT CHAT VIA WHATSAPP (CLICK HERE)
              </a>
            </div>
          </div>

          {/* Right Column: Direct Enquiry Ledger Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#091524] border border-[#1e334a] p-6 sm:p-8 lg:p-10 shadow-2xl relative">
              <div className="space-y-2 mb-6">
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                  Direct Enquiry Ledger
                </h3>
                <p className="text-xs sm:text-[13px] text-[#93a2b3] font-light leading-relaxed">
                  Complete this brief form to receive your requirement directly to our investigation desk via WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#0d253d] border border-[#235079] p-6 text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-[#48bb78] mx-auto" />
                  <h4 className="font-serif text-xl text-white">Requirement Recorded</h4>
                  <p className="text-xs text-[#a0aec0] leading-relaxed">
                    Opening WhatsApp to connect directly with IRA Promoters desk at {CONTACT_INFO.phone}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-widest text-[#c5a880] hover:underline"
                  >
                    Submit another requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8e9ca8]">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. S. K. Murthy"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#0d1e31] border border-[#213750] focus:border-[#c5a880] focus:outline-none px-4 py-3 text-sm text-white placeholder-[#506375] transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8e9ca8]">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full bg-[#0d1e31] border border-[#213750] focus:border-[#c5a880] focus:outline-none px-4 py-3 text-sm text-white placeholder-[#506375] transition-colors"
                    />
                    {errors.phoneNumber && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Enquiry Requirement */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8e9ca8]">
                      ENQUIRY / REQUIREMENT
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify preferred location/interest (e.g. Madhurawada plots, Bhogapuram corridor) and approximate timeline..."
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full bg-[#0d1e31] border border-[#213750] focus:border-[#c5a880] focus:outline-none px-4 py-3 text-sm text-white placeholder-[#506375] transition-colors resize-none"
                    ></textarea>
                    {errors.requirement && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.requirement}
                      </p>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="space-y-1">
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#a0aec0]">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 accent-[#c5a880] w-4 h-4 rounded-none border-[#213750]"
                      />
                      <span>I agree to receive site enquiry info.</span>
                    </label>
                    {errors.consent && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#c5a880] hover:bg-[#d8be97] text-[#0b1928] font-bold text-xs uppercase tracking-[0.2em] py-4 transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <span>SEND ENQUIRY VIA WHATSAPP</span>
                    <Send className="w-4 h-4 text-[#0b1928]" />
                  </button>

                  <p className="text-[10px] text-[#5e7082] text-center tracking-wide">
                    Your contact information will only be used by IRA Promoters to respond to this enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
