import React, { useState } from 'react';
import { User, PhoneCall, ExternalLink, ShieldCheck, Check } from 'lucide-react';
import { LEADERSHIP, CONTACT_INFO } from '../data/propertyData';

interface FoundersLeadershipProps {
  onOpenEnquiry: () => void;
}

export const FoundersLeadership: React.FC<FoundersLeadershipProps> = ({ onOpenEnquiry }) => {
  const [selectedLeader, setSelectedLeader] = useState<string | null>(null);

  const portraitImages: Record<string, string> = {
    'Mr. Ravi Pendurti': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    'Ms. Sailaja Lalitha Podipireddi': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  };

  return (
    <section id="leadership" className="w-full bg-[#f6f2ea] py-20 lg:py-28 border-b border-[#e5ded4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8f7e69]">
            STEWARDSHIP
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#0b1928]">
            Founders &amp; Leadership
          </h2>
          <p className="text-[#556372] text-xs sm:text-sm font-light leading-relaxed">
            Directed by disciplined practitioners combining financial acumen, strategic marketing, and hands-on regional ground mastery.
          </p>
        </div>

        {/* 2 Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {LEADERSHIP.map((leader) => (
            <div
              key={leader.name}
              className="bg-white border border-[#ded5c5] shadow-xs flex flex-col justify-between group hover:border-[#b89360] transition-colors"
            >
              <div>
                {/* Photo / Portrait Placeholder Container */}
                <div className="p-8 sm:p-10 bg-[#f4eee4] border-b border-[#ded5c5] flex flex-col items-center justify-center">
                  <div className="relative w-36 h-44 sm:w-44 sm:h-52 border border-[#d8cdbc] bg-[#ece4d6] p-2 shadow-xs overflow-hidden">
                    <img
                      src={portraitImages[leader.name]}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-1 right-1 bg-white/90 p-1 rounded-none border border-[#d8cdbc]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#8f7e69]" />
                    </div>
                  </div>
                  <span className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#8c7e6c]">
                    LEADERSHIP PORTFOLIO VIZAG
                  </span>
                </div>

                {/* Profile Information */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#8f7e69] block">
                      {leader.role}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0b1928] font-normal mt-1">
                      {leader.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#556372] font-light leading-relaxed">
                    {leader.bio}
                  </p>

                  <div className="pt-2 text-[11px] text-[#718096] border-t border-[#f0ebd2] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#8f7e69]" />
                    <span>{leader.credential}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="border-t border-[#ded5c5] bg-[#faf8f5] px-6 py-4 flex items-center justify-between text-[11px] uppercase tracking-wider font-semibold">
                <button
                  onClick={onOpenEnquiry}
                  className="text-[#0b1928] hover:text-[#b89360] flex items-center gap-1.5 transition-colors cursor-pointer text-[10px] sm:text-[11px]"
                >
                  <PhoneCall className="w-3 h-3 text-[#b89360]" />
                  DIRECT CALL / APPOINTMENT
                </button>

                <button
                  onClick={() => setSelectedLeader(selectedLeader === leader.name ? null : leader.name)}
                  className="text-[#8f7e69] hover:text-[#0b1928] flex items-center gap-1 transition-colors cursor-pointer text-[10px] sm:text-[11px]"
                >
                  <span>VERIFIED CREDENTIAL</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              {/* Expanded credential modal/drawer */}
              {selectedLeader === leader.name && (
                <div className="border-t border-[#ded5c5] bg-[#fbf9f6] p-4 text-xs text-[#4a5568] space-y-1">
                  <div className="font-semibold text-[#0b1928] uppercase text-[10px] tracking-wider">
                    Institutional Verification &amp; Standing:
                  </div>
                  <div>• Statutory RERA Registration: Complete and verified with AP-RERA authorities.</div>
                  <div>• VMRDA Master Plan Consultant: Expertise in Visakhapatnam urban boundary guidelines.</div>
                  <div>• Office: Opp CMR Central, VIP Road, Resapuvanipalem, Visakhapatnam.</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
