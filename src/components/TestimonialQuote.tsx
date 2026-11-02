import React from 'react';
import { Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIAL } from '../data/propertyData';

export const TestimonialQuote: React.FC = () => {
  return (
    <section className="w-full bg-[#fbf9f5] py-16 lg:py-24 border-b border-[#e6dfd5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Parchment Box with Dashed / Stitched Border */}
        <div className="relative bg-[#fbf8f2] border-2 border-dashed border-[#c8b9a2] p-8 sm:p-12 lg:p-16 shadow-xs text-center space-y-8">
          {/* Top Label Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e5dcce] pb-4">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8f7e69]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
              <span>{TESTIMONIAL.tag}</span>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#2f855a] font-semibold bg-white border border-[#d8cdbc] px-2.5 py-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{TESTIMONIAL.verificationTag}</span>
            </div>
          </div>

          {/* Quote Body */}
          <div className="space-y-6">
            <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#0b1928] font-normal leading-[1.35] max-w-3xl mx-auto">
              {TESTIMONIAL.quote}
            </blockquote>
          </div>

          {/* Author Details */}
          <div className="pt-2">
            <div className="font-serif text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-[#0b1928]">
              {TESTIMONIAL.author}
            </div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#8f7e69] font-medium mt-1">
              {TESTIMONIAL.designation}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
