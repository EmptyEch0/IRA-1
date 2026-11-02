import React from 'react';
import { X, ShieldCheck, FileCheck, CheckCircle2, Download, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/propertyData';

interface StatutoryPacketModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
}

export const StatutoryPacketModal: React.FC<StatutoryPacketModalProps> = ({
  isOpen,
  onClose,
  projectName
}) => {
  if (!isOpen) return null;

  const handleRequestPacket = () => {
    const text = encodeURIComponent(
      `Hello IRA Promoters, please provide the complete Statutory Document Packet & LP clearance records for ${projectName}.`
    );
    window.open(`https://wa.me/${CONTACT_INFO.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#fcfbf9] border border-[#d8cdbc] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="bg-[#0b1928] text-white p-6 flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
              STATUTORY FIDELITY DOSSIER
            </span>
            <h3 className="font-serif text-2xl text-white font-normal">
              {projectName}
            </h3>
            <p className="text-xs text-[#a0aec0]">
              Multi-tier statutory verification packet &amp; layout certifications
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 border border-neutral-700 hover:border-[#c5a880] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="bg-[#f5efe6] border-l-4 border-[#c5a880] p-4 text-xs text-[#524434] leading-relaxed">
            All land parcels under IRA Promoters are subjected to independent revenue scrutiny by senior advocates at the Visakhapatnam Bar, verifying unbroken link deeds over a 30-year tenure.
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0b1928] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
              Standard Statutory Compliance Verification
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-3.5 border border-[#ded5c5] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2f855a] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#0b1928] font-medium">30-Year Title Search</strong>
                  <span className="text-[#64748b] text-[11px]">Unbroken link document ledger &amp; sub-registrar verification</span>
                </div>
              </div>

              <div className="bg-white p-3.5 border border-[#ded5c5] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2f855a] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#0b1928] font-medium">Nil Encumbrance (EC)</strong>
                  <span className="text-[#64748b] text-[11px]">Certified non-mortgage &amp; non-litigation certificate</span>
                </div>
              </div>

              <div className="bg-white p-3.5 border border-[#ded5c5] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2f855a] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#0b1928] font-medium">Layout Pattern Approval</strong>
                  <span className="text-[#64748b] text-[11px]">40ft &amp; 60ft wide arterial roads &amp; public utility reserves</span>
                </div>
              </div>

              <div className="bg-white p-3.5 border border-[#ded5c5] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2f855a] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#0b1928] font-medium">Ground Demarcation Stones</strong>
                  <span className="text-[#64748b] text-[11px]">Physical peg-marking and boundary geo-tagging</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#ded5c5] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#718096]">
              Verified by IRA Promoters Legal Counsel Desk
            </span>

            <button
              onClick={handleRequestPacket}
              className="w-full sm:w-auto bg-[#0b1928] hover:bg-[#1a2d42] text-white px-6 py-3 text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#c5a880]" />
              RECEIVE FULL PDF DOSSIER VIA WHATSAPP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
