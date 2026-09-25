"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ValueProp } from "@/components/sections/ValueProp";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { FeaturedSplit } from "@/components/sections/FeaturedSplit";
import { Credibility } from "@/components/sections/Credibility";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ContactModal } from "@/components/ui/ContactModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState<"personal" | "business">("business");

  return (
    <div className="min-h-screen bg-white text-[#0c2340] selection:bg-[#0070e0] selection:text-white font-sans antialiased overflow-x-hidden">
      <Navbar
        onOpenContact={() => setModalOpen(true)}
        activeSegment={activeSegment}
        onSegmentChange={setActiveSegment}
      />
      <main>
        <Hero
          onOpenContact={() => setModalOpen(true)}
          activeSegment={activeSegment}
        />
        <ValueProp />
        <ServicesGrid onOpenContact={() => setModalOpen(true)} />
        <BrandStatement />
        <FeaturedSplit onOpenContact={() => setModalOpen(true)} />
        <Credibility />
        <Testimonials />
        <FinalCTA onOpenContact={() => setModalOpen(true)} />
      </main>
      <Footer />
      
      {/* Interactive Contact & Project Intake Modal */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
