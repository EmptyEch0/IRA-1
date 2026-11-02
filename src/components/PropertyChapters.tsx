import React from 'react';
import { ArrowRight, FileText, CheckCircle, Shield, Compass, Landmark } from 'lucide-react';
import { ONGOING_PROJECTS, COMPLETED_PROJECTS, Project } from '../data/propertyData';

interface PropertyChaptersProps {
  onSelectProject: (project: Project) => void;
  onOpenStatutoryPacket: (projectName: string) => void;
}

export const PropertyChapters: React.FC<PropertyChaptersProps> = ({
  onSelectProject,
  onOpenStatutoryPacket
}) => {
  return (
    <section id="projects" className="w-full bg-[#fbf9f5] py-20 lg:py-28 border-b border-[#e6dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#e2d9cd] gap-6">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#8f7e69]">
              LAND SUITABLE FOR VILLA
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#0b1928] tracking-tight">
              Curated Property Chapters
            </h2>
          </div>
          <p className="max-w-md text-[#5c6874] text-xs sm:text-sm font-light leading-relaxed">
            Explore ongoing initiatives and completed developments. All listings undergo multi-tier statutory clearance and survey demarcation.
          </p>
        </div>

        {/* Section 1: Ongoing Initiatives */}
        <div className="pt-12">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#b89360]"></span>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1928]">
              ONGOING INITIATIVES
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Card 1: The Coastal Panorama Layout (Span 7) */}
            <div className="lg:col-span-7 bg-white border border-[#ded5c5] shadow-xs flex flex-col justify-between group hover:border-[#c5a880] transition-colors">
              <div>
                {/* Status Bar */}
                <div className="px-4 py-2.5 bg-[#f5f1ea] border-b border-[#ded5c5] flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#0b1928] bg-white border border-[#d8cdbc] px-2.5 py-0.5">
                    UNDER DEVELOPMENT
                  </span>
                  <span className="text-[10px] tracking-wider text-[#796f62] uppercase">
                    VIZAG COASTAL CORRIDOR
                  </span>
                </div>

                {/* Imagery with Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e2d8]">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
                    alt="The Coastal Panorama Layout coastal view"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 right-3 bg-[#0b1928]/95 border border-[#c5a880] px-3 py-1 text-[10px] uppercase tracking-widest text-[#dfc8a5] font-semibold">
                    ALL APPROVALS SANCTIONED
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#0b1928] font-normal tracking-wide">
                      The Coastal Panorama Layout
                    </h4>
                    <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#8f7e69] block mt-1">
                      MADHURAWADA GROWTH CORRIDOR
                    </span>
                  </div>

                  {/* Spec Row */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#ede7dc] text-[10px] sm:text-[11px] uppercase tracking-wider text-[#526071]">
                    <div>
                      <span className="block text-[#928676] text-[9px]">TYPE</span>
                      <strong className="text-[#0b1928] font-medium">OPEN PLOTS / VILLA</strong>
                    </div>
                    <div className="border-l border-[#ede7dc] pl-2 sm:pl-3">
                      <span className="block text-[#928676] text-[9px]">STATUS</span>
                      <strong className="text-[#0b1928] font-medium">GROUND WORK</strong>
                    </div>
                    <div className="border-l border-[#ede7dc] pl-2 sm:pl-3">
                      <span className="block text-[#928676] text-[9px]">LOCATION</span>
                      <strong className="text-[#0b1928] font-medium">VIZAG HILLS</strong>
                    </div>
                  </div>

                  {/* Project Note */}
                  <p className="text-xs sm:text-[13px] text-[#556372] leading-relaxed italic bg-[#faf7f2] p-3.5 border-l-2 border-[#c5a880]">
                    “Project details to be confirmed. Complete restrictions, statutory approvals, and title schedules will be updated upon formal clearance.”
                  </p>
                </div>
              </div>

              {/* Bottom Interactive Bar */}
              <div className="border-t border-[#ded5c5] bg-[#faf8f5] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs uppercase tracking-widest font-semibold">
                <button
                  onClick={() => onOpenStatutoryPacket('The Coastal Panorama Layout')}
                  className="w-full sm:w-auto text-[#0b1928] hover:text-[#b89360] flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-[11px]"
                >
                  <FileText className="w-3.5 h-3.5 text-[#b89360]" />
                  STATUTORY DOCUMENT PACKET
                </button>

                <button
                  onClick={() => onSelectProject(ONGOING_PROJECTS[0])}
                  className="w-full sm:w-auto text-[#b89360] hover:text-[#0b1928] flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-[11px]"
                >
                  REGISTER INTEREST TODAY
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Airport Vista Enclave (Span 5) */}
            <div className="lg:col-span-5 bg-white border border-[#ded5c5] shadow-xs flex flex-col justify-between group hover:border-[#c5a880] transition-colors">
              <div>
                {/* Status Bar */}
                <div className="px-4 py-2.5 bg-[#f5f1ea] border-b border-[#ded5c5] flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#63533b] bg-white border border-[#d8cdbc] px-2.5 py-0.5">
                    APPLICATION SUBMITTED
                  </span>
                  <span className="text-[10px] tracking-wider text-[#796f62] uppercase">
                    NORTH CORRIDOR
                  </span>
                </div>

                {/* Elegant Parchment Plaque Box */}
                <div className="p-8 sm:p-10 bg-[#f7f3ec] border-b border-[#ded5c5] text-center flex flex-col items-center justify-center space-y-4">
                  {/* Monogram emblem */}
                  <div className="w-14 h-14 rounded-full border border-[#c5a880] flex items-center justify-center bg-white shadow-xs">
                    <Landmark className="w-6 h-6 text-[#9a7e58]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#0b1928] font-normal tracking-wide">
                      Airport Vista Enclave
                    </h4>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#8f7e69] font-medium block mt-1">
                      BHOGAPURAM AIRPORT PRECINCT
                    </span>
                  </div>

                  <div className="inline-block bg-[#0b1928] text-[#dfc8a5] text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-semibold">
                    A 25-ACRE MASTER PLAN
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 space-y-5">
                  <p className="text-xs sm:text-[13px] text-[#4a5563] font-light leading-relaxed">
                    Strategically situated in the high-velocity Bhogapuram International Airport proximity zone, designed for forward-looking capital appreciation and serene open skylines.
                  </p>

                  <div className="space-y-1.5 text-[11px] uppercase tracking-wider text-[#4a5568] bg-[#fbf9f6] p-3 border border-[#ece4d8]">
                    <div className="flex justify-between">
                      <span className="text-[#8c7e6c]">ZONING:</span>
                      <strong className="text-[#0b1928]">CLEAR RESIDENTIAL</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8c7e6c]">ROADS:</span>
                      <strong className="text-[#0b1928]">40 / 60 FT WIDE BLACKTOP</strong>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#718096] italic">
                    Project details to be confirmed upon final layout release.
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="border-t border-[#ded5c5] bg-[#faf8f5] p-5">
                <button
                  onClick={() => onSelectProject(ONGOING_PROJECTS[1])}
                  className="w-full text-center bg-[#0b1928] hover:bg-[#1a2d42] text-white py-3 text-xs tracking-[0.2em] uppercase font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>REGISTER YOUR DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c5a880]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Completed Developments */}
        <div className="pt-20">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#52637a]"></span>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b1928]">
              COMPLETED DEVELOPMENTS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPLETED_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="bg-white border border-[#ded5c5] shadow-xs flex flex-col justify-between group hover:border-[#a3947f] transition-colors"
              >
                <div>
                  {/* Status Bar */}
                  <div className="px-4 py-2.5 bg-[#f5f1ea] border-b border-[#ded5c5] flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#4a5568] bg-white border border-[#d8cdbc] px-2.5 py-0.5">
                      HANDED OVER
                    </span>
                    <span className="text-[10px] tracking-wider text-[#796f62] uppercase">
                      100% REGISTRATION
                    </span>
                  </div>

                  {/* Parchment Plaque Box */}
                  <div className="p-10 sm:p-12 bg-[#f4eee4] border-b border-[#ded5c5] text-center flex flex-col items-center justify-center space-y-3">
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#0b1928] font-normal tracking-wide">
                      {proj.title}
                    </h4>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#8c7e6c] font-medium">
                      {proj.subtitle}
                    </span>

                    <div className="inline-block mt-3 bg-[#0b1928] text-[#dfc8a5] text-[9px] uppercase tracking-[0.2em] px-3 py-1 font-semibold">
                      {proj.secondaryBadge}
                    </div>
                  </div>

                  {/* Card Description */}
                  <div className="p-6 space-y-3">
                    <h5 className="font-serif text-lg text-[#0b1928] font-medium">
                      {proj.title}
                    </h5>
                    <p className="text-xs sm:text-[13px] text-[#556372] leading-relaxed">
                      “{proj.description}”
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#ded5c5] bg-[#faf8f5] px-6 py-3.5 flex items-center justify-between text-[11px] uppercase tracking-wider text-[#718096]">
                  <span className="flex items-center gap-1.5 text-[#2f855a]">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Clear Title Handover
                  </span>
                  <button
                    onClick={() => onSelectProject(proj)}
                    className="text-[#0b1928] hover:text-[#b89360] font-medium tracking-widest text-[10px]"
                  >
                    VIEW ARCHIVE ↗
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
