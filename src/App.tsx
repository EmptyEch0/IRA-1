import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FoundingConviction } from './components/FoundingConviction';
import { PropertyChapters } from './components/PropertyChapters';
import { PrinciplesOfPractice } from './components/PrinciplesOfPractice';
import { ArchitecturalServices } from './components/ArchitecturalServices';
import { FoundersLeadership } from './components/FoundersLeadership';
import { TestimonialQuote } from './components/TestimonialQuote';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StatutoryPacketModal } from './components/StatutoryPacketModal';
import { ScheduleVisitModal } from './components/ScheduleVisitModal';
import { ProjectDetailsModal } from './components/ProjectDetailsModal';
import { Project } from './data/propertyData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [statutoryModalProject, setStatutoryModalProject] = useState<string | null>(null);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);

  const handleOpenStatutoryPacket = (projectName: string) => {
    setStatutoryModalProject(projectName);
  };

  const handleOpenScheduleVisit = () => {
    setScheduleModalOpen(true);
  };

  const handleOpenEnquiry = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c1c1c] flex flex-col font-sans selection:bg-[#c5a880] selection:text-white">
      {/* Top Header & Navigation */}
      <Navbar
        onOpenSchedule={handleOpenScheduleVisit}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenSchedule={handleOpenScheduleVisit}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 2. Founding Conviction (Dark Navy Section) */}
        <FoundingConviction />

        {/* 3. Curated Property Chapters (Ongoing & Completed Developments) */}
        <PropertyChapters
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenStatutoryPacket={handleOpenStatutoryPacket}
        />

        {/* 4. Principles of Practice */}
        <PrinciplesOfPractice />

        {/* 5. Architectural Services Index */}
        <ArchitecturalServices />

        {/* 6. Founders & Leadership */}
        <FoundersLeadership onOpenEnquiry={handleOpenEnquiry} />

        {/* 7. Testimonial Quote */}
        <TestimonialQuote />

        {/* 8. Contact & Direct Enquiry Ledger */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <StatutoryPacketModal
        isOpen={!!statutoryModalProject}
        onClose={() => setStatutoryModalProject(null)}
        projectName={statutoryModalProject || ''}
      />

      <ScheduleVisitModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />

      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenStatutoryPacket={handleOpenStatutoryPacket}
      />
    </div>
  );
}
