import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { CONTACT_INFO } from '../data/propertyData';

interface NavbarProps {
  onOpenSchedule: () => void;
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule, onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-xs border-b border-[#e8e2d8]">
      {/* Top Announcement Bar */}
      <div className="bg-[#0b1928] text-[#c5a880] text-[11px] font-medium tracking-widest px-4 py-2 border-b border-[#1b2b3d]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse"></span>
            <span className="uppercase text-neutral-300 tracking-wider">
              IRA PROMOTERS <span className="text-[#c5a880] mx-1.5">/</span> VISAKHAPATNAM <span className="text-[#c5a880] mx-1.5">/</span> ARCHITECTURAL LAND & PLOTS
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-6 text-[11px] uppercase tracking-wider text-neutral-300">
            <button
              onClick={onOpenEnquiry}
              className="hover:text-[#c5a880] transition-colors cursor-pointer text-left"
            >
              START A QUERY
            </button>
            <span className="text-neutral-600">|</span>
            <a
              href={`tel:${CONTACT_INFO.phoneClean}`}
              className="hover:text-[#c5a880] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#c5a880]" />
              {CONTACT_INFO.phone}
            </a>
            <span className="text-neutral-600">|</span>
            <button
              onClick={onOpenSchedule}
              className="text-[#c5a880] hover:text-[#dfc8a5] transition-colors cursor-pointer"
            >
              SCHEDULE VISIT
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 border border-[#c5a880] flex items-center justify-center bg-[#faf7f2] shadow-xs group-hover:border-[#0b1928] transition-colors">
            {/* Elegant Monogram */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-serif text-lg font-bold text-[#0b1928] tracking-tighter leading-none">
                IRA
              </span>
              <div className="w-4 h-[1px] bg-[#c5a880] my-0.5"></div>
              <span className="text-[7px] tracking-widest text-[#8a7251] font-semibold">19</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#0b1928] leading-tight">
              IRA PROMOTERS
            </span>
            <span className="text-[9px] uppercase tracking-[0.22em] text-[#8c827a] font-medium">
              Architectural Portfolios
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-[12px] uppercase tracking-[0.16em] font-medium text-[#2d3748]">
          <a href="#home" className="hover:text-[#c5a880] transition-colors py-1 border-b border-transparent hover:border-[#c5a880]">
            HOME
          </a>
          <a href="#conviction" className="hover:text-[#c5a880] transition-colors py-1 border-b border-transparent hover:border-[#c5a880]">
            ABOUT US
          </a>
          <a href="#principles" className="hover:text-[#c5a880] transition-colors py-1 border-b border-transparent hover:border-[#c5a880]">
            FOUNDATIONAL PILLARS
          </a>
          <a href="#projects" className="hover:text-[#c5a880] transition-colors py-1 border-b border-transparent hover:border-[#c5a880]">
            PROJECTS
          </a>
          <a href="#services" className="hover:text-[#c5a880] transition-colors py-1 border-b border-transparent hover:border-[#c5a880]">
            REGULATORY STATUS
          </a>
          <a href="#contact" className="hover:text-[#c5a880] transition-colors py-1 border-b border-transparent hover:border-[#c5a880]">
            CONTACT US
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${CONTACT_INFO.phoneClean}`}
            className="w-10 h-10 border border-[#e2d9cd] rounded-none flex items-center justify-center text-[#0b1928] hover:border-[#c5a880] hover:text-[#c5a880] transition-colors"
            title="Call Support Desk"
            aria-label="Call IRA Promoters"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-[#0b1928] hover:bg-[#13283f] text-[#f4efe6] text-[12px] font-semibold uppercase tracking-[0.18em] px-5 py-3 transition-colors shadow-xs"
          >
            EXPLORE PROJECTS
            <ArrowUpRight className="w-4 h-4 text-[#c5a880]" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[#d9d0c2] text-[#0b1928] hover:bg-[#faf7f2]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e2d9cd] bg-[#fbf9f5] px-6 py-6 shadow-xl space-y-4">
          <nav className="flex flex-col space-y-3 text-[13px] uppercase tracking-wider font-medium text-[#1a202c]">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#e8e2d8] hover:text-[#c5a880]"
            >
              HOME
            </a>
            <a
              href="#conviction"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#e8e2d8] hover:text-[#c5a880]"
            >
              ABOUT US
            </a>
            <a
              href="#principles"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#e8e2d8] hover:text-[#c5a880]"
            >
              FOUNDATIONAL PILLARS
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#e8e2d8] hover:text-[#c5a880]"
            >
              PROJECTS
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#e8e2d8] hover:text-[#c5a880]"
            >
              REGULATORY STATUS
            </a>
            <a
              href="#leadership"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#e8e2d8] hover:text-[#c5a880]"
            >
              LEADERSHIP
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#e8e2d8] hover:text-[#c5a880]"
            >
              CONTACT US
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#0b1928] text-white py-3 text-xs tracking-widest font-semibold uppercase"
            >
              EXPLORE PROJECTS
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="w-full text-center border border-[#0b1928] py-2.5 text-xs tracking-widest font-semibold uppercase text-[#0b1928]"
            >
              SCHEDULE A SITE VISIT
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
