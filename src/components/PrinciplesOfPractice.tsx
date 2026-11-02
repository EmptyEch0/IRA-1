import React from 'react';
import { PRINCIPLES } from '../data/propertyData';

export const PrinciplesOfPractice: React.FC = () => {
  return (
    <section id="principles" className="w-full bg-[#f6f2ea] py-20 lg:py-28 border-b border-[#e5ded4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8f7e69]">
              DISCIPLINE &amp; GOVERNANCE
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.08] text-[#0b1928]">
              Principles of<br />
              <span className="font-serif italic text-[#9a7e58]">Practice.</span>
            </h2>

            <p className="text-[#596677] text-sm sm:text-base font-light leading-relaxed max-w-md">
              We operate on non-speculative principles. Each land parcel is vetted for rigorous title, structural and legal science before being introduced to our community.
            </p>

            <div className="pt-4 hidden lg:block">
              <div className="w-16 h-[1px] bg-[#c5a880]"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8f7e69] block mt-3">
                FOUNDATIONAL PILLARS OF IRA PROMOTERS
              </span>
            </div>
          </div>

          {/* Right Column: 3 Numbered Principles */}
          <div className="lg:col-span-7 space-y-10">
            {PRINCIPLES.map((principle, index) => (
              <div
                key={principle.number}
                className={`pb-10 ${index !== PRINCIPLES.length - 1 ? 'border-b border-[#ded5c5]' : ''} space-y-4`}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-4xl sm:text-5xl font-light text-[#0b1928] tracking-tight">
                    {principle.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9a7e58]">
                    {principle.tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#0b1928] font-normal">
                  {principle.title}
                </h3>

                <p className="text-sm sm:text-[15px] text-[#556372] font-light leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
