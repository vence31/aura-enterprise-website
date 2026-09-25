"use client";

import React from "react";
import { siteData } from "@/content/siteData";
import { Container } from "@/components/ui/Container";

export function Credibility() {
  return (
    <section id="credibility" className="py-24 sm:py-32 bg-[#f5f7fa] border-b border-slate-200/80 relative">
      <Container size="wide">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#0070e0] text-xs font-bold uppercase tracking-wider mb-4">
            <span>{siteData.credibility.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001c3f] tracking-tight leading-tight mb-4">
            {siteData.credibility.headline}
          </h2>
          <p className="text-[#596b82] text-base sm:text-lg">
            {siteData.credibility.description}
          </p>
        </div>

        {/* 4-Column Stat Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.credibility.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 text-center flex flex-col items-center justify-center shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#0070e0] tracking-tight mb-3">
                {stat.value}
              </div>
              <div className="text-base font-bold text-[#001c3f] mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#596b82] font-semibold">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
