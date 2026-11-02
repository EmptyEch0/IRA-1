import React from 'react';
import { X, MapPin, CheckCircle, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { Project, CONTACT_INFO } from '../data/propertyData';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenStatutoryPacket: (projectName: string) => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  onClose,
  onOpenStatutoryPacket
}) => {
  if (!project) return null;

  const handleRegisterWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello IRA Promoters, I would like to register my interest and receive the pricing schedule for ${project.title} (${project.location}).`
    );
    window.open(`https://wa.me/${CONTACT_INFO.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#fcfbf9] border border-[#d8cdbc] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Modal Header */}
        <div className="bg-[#0b1928] text-white p-6 flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
              {project.badge}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              {project.title}
            </h3>
            <p className="text-xs text-[#a0aec0] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
              {project.location} — {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 border border-neutral-700 hover:border-[#c5a880] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {project.image && (
            <div className="relative aspect-[16/9] overflow-hidden border border-[#ded5c5]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {project.imageBadge && (
                <div className="absolute bottom-3 right-3 bg-[#0b1928]/95 border border-[#c5a880] px-3 py-1 text-[10px] uppercase tracking-widest text-[#dfc8a5] font-semibold">
                  {project.imageBadge}
                </div>
              )}
            </div>
          )}

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0b1928]">
              Executive Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#f5f0e6] p-4 border border-[#e2d8c7] text-xs">
            {project.plotSize && (
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-[#8c7e6c]">Plot Sizes</span>
                <strong className="text-[#0b1928]">{project.plotSize}</strong>
              </div>
            )}
            <div>
              <span className="block text-[9px] uppercase tracking-wider text-[#8c7e6c]">Current Status</span>
              <strong className="text-[#0b1928]">{project.status}</strong>
            </div>
            {project.zoning && (
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-[#8c7e6c]">Zoning Classification</span>
                <strong className="text-[#0b1928]">{project.zoning}</strong>
              </div>
            )}
            {project.roads && (
              <div>
                <span className="block text-[9px] uppercase tracking-wider text-[#8c7e6c]">Avenue Width</span>
                <strong className="text-[#0b1928]">{project.roads}</strong>
              </div>
            )}
          </div>

          <div className="p-3 bg-[#faf7f2] border-l-2 border-[#c5a880] text-xs text-[#5a6778] italic">
            {project.disclaimer}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[#ded5c5] flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => onOpenStatutoryPacket(project.title)}
              className="w-full sm:w-auto text-[#0b1928] hover:text-[#b89360] flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider font-semibold py-2.5 px-4 border border-[#ded5c5]"
            >
              <FileText className="w-4 h-4 text-[#b89360]" />
              STATUTORY CLEARANCE FILE
            </button>

            <button
              onClick={handleRegisterWhatsApp}
              className="w-full sm:w-auto bg-[#c5a880] hover:bg-[#d8be97] text-[#0b1928] font-bold text-xs uppercase tracking-[0.18em] py-3 px-6 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>REGISTER VIA WHATSAPP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
