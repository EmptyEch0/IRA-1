import React from 'react';
import { ArrowUpRight, MessageSquare, Compass, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/propertyData';

interface HeroProps {
  onOpenSchedule: () => void;
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule, onOpenEnquiry }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello IRA Promoters, I visited your website and would like to learn more about your premium residential plots and villa layouts in Visakhapatnam."
    );
    window.open(`https://wa.me/${CONTACT_INFO.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="relative w-full min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=85"
          alt="Luxury villa overlooking coastline at twilight"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Deep luxury gradients: dark gradient on top for contrast, rich navy wash at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#091524] via-[#091524]/60 to-[#0b1928]/50"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#091524]/40 to-[#07101a]/85"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 border border-[#c5a880]/40 bg-[#091524]/70 backdrop-blur-md px-3.5 py-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#c5a880] rounded-full"></span>
            <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#dfc8a5]">
              THE PURSUIT OF ENDURING GROUND
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-wide leading-[1.08]">
            <span className="block uppercase tracking-wider">HAPPINESS IN EVERY</span>
            <span className="block mt-1">
              Nook <span className="font-serif italic font-normal text-[#dfc8a5] px-1 text-5xl sm:text-7xl lg:text-8xl">&amp;</span> Corner
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#e2ded9] text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
            Rooted in Visakhapatnam. Curating clear-title open-plots, residential layouts, and enduring architectural land ready for generations legacy.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 bg-[#c5a880] hover:bg-[#d8be97] text-[#0b1928] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase px-7 py-4 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              EXPLORE PROJECTS
              <ArrowUpRight className="w-4 h-4 text-[#0b1928]" />
            </a>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2.5 border border-white/80 hover:border-white bg-black/20 hover:bg-white/10 text-white font-medium text-xs sm:text-[13px] tracking-[0.2em] uppercase px-7 py-4 backdrop-blur-sm transition-all duration-200 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#dfc8a5]" />
              WHATSAPP US
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Ticker / Verified Corridor Bar */}
      <div className="relative z-10 w-full bg-[#071321]/90 backdrop-blur-md border-t border-[#203247] py-3.5 px-4 sm:px-6 lg:px-8 text-xs text-neutral-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0" />
            <span className="tracking-wide text-neutral-200 font-normal">
              <strong className="text-[#dfc8a5] font-medium uppercase tracking-wider">Verified Lands:</strong> CMR Central Yendada <span className="text-[#c5a880] mx-1">|</span> Hill View Enclave <span className="text-[#c5a880] mx-1">|</span> Madhurawada &amp; Bhogapuram
            </span>
          </div>

          <a
            href="#projects"
            className="flex items-center gap-1.5 text-[#dfc8a5] hover:text-white transition-colors text-[11px] uppercase tracking-widest font-medium"
          >
            <span>Discover your true site today</span>
            <span className="text-sm">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
