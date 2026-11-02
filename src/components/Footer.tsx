import React from 'react';
import { CONTACT_INFO } from '../data/propertyData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#07111c] text-[#a0aec0] py-16 border-t border-[#152332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Footer Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-10 border-b border-[#182a3d]">
          <div className="space-y-2 max-w-md">
            <span className="font-serif text-2xl font-bold tracking-wider text-white">
              IRA PROMOTERS
            </span>
            <p className="text-xs text-[#718096] font-light leading-relaxed">
              Architectural land curators, statutory open-plots and residential developments across Visakhapatnam.
            </p>
          </div>

          {/* Footer Nav Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.16em] font-medium text-[#c5a880]">
            <a href="#projects" className="hover:text-white transition-colors">
              ARCHITECTURAL PORTFOLIO
            </a>
            <a href="#conviction" className="hover:text-white transition-colors">
              LAND ACQUISITION
            </a>
            <a href="#principles" className="hover:text-white transition-colors">
              REGULATORY REVIEWS
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              FINANCE ARCHITECTURE
            </a>
            <a href="#conviction" className="hover:text-white transition-colors">
              TERMS OF INTEGRITY
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              VISIT PROTOCOL
            </a>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#637282]">
          <div>
            © 2026 IRA Promoters. All rights reserved. Visakhapatnam, Andhra Pradesh.
          </div>
          <div className="text-[11px] uppercase tracking-wider text-[#a0aec0]">
            DIRECT ENQUIRY: <a href={`tel:${CONTACT_INFO.phoneClean}`} className="text-[#c5a880] hover:underline font-medium">{CONTACT_INFO.phone}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
