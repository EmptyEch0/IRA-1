import React from 'react';
import { Check } from 'lucide-react';
import { SERVICES } from '../data/propertyData';

export const ArchitecturalServices: React.FC = () => {
  return (
    <section id="services" className="w-full bg-[#fbf9f5] py-20 lg:py-24 border-b border-[#e6dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-2 mb-12">
          <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#8f7e69]">
            SCOPE OF OPERATIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0b1928]">
            Architectural Services Index
          </h2>
        </div>

        {/* 2-Column Grid of 6 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="py-4 border-b border-[#e5dfd4] flex items-center justify-between group hover:border-[#c5a880] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#8f7e69] font-medium">
                  {service.id}.
                </span>
                <span className="text-sm sm:text-base font-normal text-[#2d3748] group-hover:text-[#0b1928] transition-colors">
                  {service.title}
                </span>
              </div>
              <Check className="w-4 h-4 text-[#8f7e69] group-hover:text-[#c5a880] transition-colors shrink-0 ml-2" />
            </div>
          ))}
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-8 text-[11px] text-[#718096] italic">
          * Detailed plan subject to confirmation at commencement of formal registration.
        </div>
      </div>
    </section>
  );
};
