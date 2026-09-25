"use client";

import React from "react";
import { siteData } from "@/content/siteData";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, Zap, Lock } from "lucide-react";

export function ValueProp() {
  const icons = [ShieldCheck, Zap, Lock];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-b border-slate-100 relative">
      <Container size="default">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f7fd] text-[#0070e0] text-xs font-bold uppercase tracking-wider mb-4">
            <span>{siteData.valueProp.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001c3f] tracking-tight leading-tight mb-6">
            {siteData.valueProp.headline}
          </h2>
          <p className="text-lg text-[#596b82] leading-relaxed">
            {siteData.valueProp.statement}
          </p>
        </div>

        {/* 3 Clean White Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.valueProp.points.map((point, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={point.title}
                className="p-8 sm:p-10 rounded-3xl bg-[#f5f7fa] border border-slate-200/70 hover:bg-white hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-[#0070e0] text-[#0070e0] group-hover:text-white flex items-center justify-center mb-6 shadow-sm transition-colors duration-300 border border-slate-200/50">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#001c3f] mb-3 tracking-tight">
                  {point.title}
                </h3>
                <p className="text-sm text-[#596b82] leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
