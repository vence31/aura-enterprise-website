"use client";

import React from "react";
import { siteData } from "@/content/siteData";
import { Container } from "@/components/ui/Container";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface FinalCTAProps {
  onOpenContact?: () => void;
}

export function FinalCTA({ onOpenContact }: FinalCTAProps) {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative">
      <Container size="default">
        <div className="relative rounded-3xl bg-[#001c3f] text-white p-10 sm:p-20 text-center shadow-2xl overflow-hidden">
          {/* Subtle ambient circle */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0070e0]/20 blur-3xl rounded-full pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#60a5fa] text-xs font-bold uppercase tracking-wider mb-6">
            <span>{siteData.finalCta.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-6 max-w-2xl mx-auto text-white">
            {siteData.finalCta.headline}
          </h2>

          <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mb-10">
            {siteData.finalCta.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#0070e0] hover:bg-[#005bb5] text-white font-bold text-base shadow-pill transition-all hover:shadow-lg"
            >
              <span>{siteData.finalCta.primaryButton.label}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/80 hover:bg-white/10 text-white font-bold text-base transition-all"
            >
              {siteData.finalCta.secondaryButton.label}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{siteData.finalCta.guaranteeText}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
