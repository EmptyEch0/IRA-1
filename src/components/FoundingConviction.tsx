import React from 'react';
import { Shield, CheckCircle2, Award } from 'lucide-react';

export const FoundingConviction: React.FC = () => {
  return (
    <section id="conviction" className="w-full bg-[#0b1928] text-white py-20 lg:py-28 border-b border-[#1b2b3d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Philosophical Manifesto */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#c5a880]"></span>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#c5a880]">
                OUR FOUNDING CONVICTION
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.14] text-[#fbf9f5]">
              A better beginning starts with the{' '}
              <span className="font-serif italic text-[#dfc8a5] underline decoration-[#c5a880]/50 underline-offset-8">
                right place.
              </span>
            </h2>

            <div className="space-y-5 text-[#b9c2cc] font-light leading-relaxed text-base sm:text-lg">
              <p>
                In an era of transactional speculation, land acquisition should remain an act of quiet confidence. IRA Promoters was established in the coastal city of Visakhapatnam to deliver verified, statutory-sound residential and open-plot foundations.
              </p>
              <p>
                Every layout is vetted against multi-tier municipal codes, ensuring unbroken title chains, unobstructed cosmic waterlines, and genuine topography conducive to long-term neighbourhood living. We treat every plot as intended canvas for family heritage.
              </p>
            </div>

            {/* Metrics Stats Grid */}
            <div className="pt-6 border-t border-[#1e3146] grid grid-cols-3 gap-6 sm:gap-8">
              <div className="space-y-1">
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
                  14<span className="text-[#c5a880]">+</span>
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#8e9ca8] font-medium">
                  DEVELOPMENT YEARS
                </div>
              </div>

              <div className="space-y-1 border-l border-[#1e3146] pl-6 sm:pl-8">
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
                  100<span className="text-[#c5a880]">%</span>
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#8e9ca8] font-medium">
                  TITLE SCRUTINY STANDARD
                </div>
              </div>

              <div className="space-y-1 border-l border-[#1e3146] pl-6 sm:pl-8">
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
                  Vizag
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#8e9ca8] font-medium">
                  REGIONAL FOCUS &amp; PROWESS
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography Card */}
          <div className="lg:col-span-5">
            <div className="relative border border-[#22354c] p-2 sm:p-3 bg-[#0d2033] shadow-2xl">
              {/* Outer decorative corner tags */}
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[5/4] bg-[#12253a]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                  alt="Architectural travertine window framing natural flora"
                  className="w-full h-full object-cover object-center filter saturate-90 hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091524]/80 via-transparent to-transparent"></div>
                
                {/* Floating pill badge */}
                <div className="absolute bottom-3 right-3 bg-[#0b1928]/90 border border-[#c5a880]/60 px-3 py-1 text-[10px] uppercase tracking-widest text-[#dfc8a5] font-semibold">
                  SITE SCRUTINY VERIFIED
                </div>
              </div>

              {/* Card Meta Footer */}
              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#91a0b0]">
                <span className="font-medium text-[#c5a880]">SEC. 01 / STATUTORY FIDELITY</span>
                <span className="text-neutral-400">TITLE SCRUTINY &amp; REVENUE TRACKING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
