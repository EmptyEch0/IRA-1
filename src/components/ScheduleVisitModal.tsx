import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, ONGOING_PROJECTS, COMPLETED_PROJECTS } from '../data/propertyData';

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({ isOpen, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(ONGOING_PROJECTS[0].title);
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [pickupHub, setPickupHub] = useState('CMR Central, VIP Road');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim() || !visitorPhone.trim()) return;

    setConfirmed(true);
    const msg = encodeURIComponent(
      `Hello IRA Promoters, I would like to schedule an accompanied site inspection:\n\n*Project:* ${selectedProject}\n*Name:* ${visitorName}\n*Phone:* ${visitorPhone}\n*Preferred Date:* ${visitDate || 'This Weekend'}\n*Pickup Hub:* ${pickupHub}`
    );
    window.open(`https://wa.me/${CONTACT_INFO.phoneClean}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#fcfbf9] border border-[#d8cdbc] max-w-lg w-full shadow-2xl relative">
        <div className="bg-[#0b1928] text-white p-6 flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
              ACCOMPANIED GROUND INSPECTION
            </span>
            <h3 className="font-serif text-2xl text-white font-normal">
              Schedule a Site Visit
            </h3>
            <p className="text-xs text-[#a0aec0]">
              Complimentary chauffeured property tour across Visakhapatnam corridors
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 border border-neutral-700 hover:border-[#c5a880] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {confirmed ? (
            <div className="text-center py-6 space-y-4">
              <CheckCircle className="w-12 h-12 text-[#48bb78] mx-auto" />
              <h4 className="font-serif text-2xl text-[#0b1928]">Site Visit Initiated</h4>
              <p className="text-xs text-[#526071] leading-relaxed">
                Opening WhatsApp to confirm your site vehicle and dedicated land counselor for {selectedProject}.
              </p>
              <button
                onClick={onClose}
                className="bg-[#0b1928] text-white px-6 py-2.5 text-xs uppercase tracking-widest font-semibold"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleBook} className="space-y-4 text-xs">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#63533b] mb-1">
                  Select Development
                </label>
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full bg-white border border-[#ded5c5] px-3 py-2.5 text-[#0b1928] font-medium focus:outline-none focus:border-[#c5a880]"
                >
                  <optgroup label="Ongoing Developments">
                    {ONGOING_PROJECTS.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title} ({p.location})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Completed Reference Enclaves">
                    {COMPLETED_PROJECTS.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#63533b] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. S. K. Murthy"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="w-full bg-white border border-[#ded5c5] px-3 py-2.5 text-[#0b1928] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#63533b] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={visitorPhone}
                    onChange={(e) => setVisitorPhone(e.target.value)}
                    className="w-full bg-white border border-[#ded5c5] px-3 py-2.5 text-[#0b1928] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#63533b] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full bg-white border border-[#ded5c5] px-3 py-2.5 text-[#0b1928] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-[#63533b] mb-1">
                    Meeting / Pickup Hub
                  </label>
                  <select
                    value={pickupHub}
                    onChange={(e) => setPickupHub(e.target.value)}
                    className="w-full bg-white border border-[#ded5c5] px-3 py-2.5 text-[#0b1928] focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="CMR Central, VIP Road">CMR Central, VIP Road</option>
                    <option value="Madhurawada Junction">Madhurawada Junction</option>
                    <option value="Bhogapuram Highway">Bhogapuram Highway</option>
                    <option value="Direct at Site Location">Direct at Site Location</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-[#0b1928] hover:bg-[#1a2d42] text-white py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>CONFIRM APPOINTMENT VIA WHATSAPP</span>
                  <ArrowRight className="w-4 h-4 text-[#c5a880]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
