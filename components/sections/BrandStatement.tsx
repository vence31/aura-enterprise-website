"use client";

import React from "react";
import { siteData } from "@/content/siteData";
import { Container } from "@/components/ui/Container";

export function BrandStatement() {
  return (
    <section className="py-28 sm:py-36 bg-[#001c3f] text-white relative overflow-hidden">
      <Container size="default">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0070e0] bg-white/10 px-4 py-1.5 rounded-full mb-8 inline-block">
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-8 text-white">
            Great design is not decoration. It is your most{" "}
            <span className="text-[#0070e0] underline decoration-[#0070e0]/40 underline-offset-8">
              decisive
            </span>{" "}
            competitive advantage.
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {siteData.brandStatement.subtext}
          </p>
        </div>
      </Container>
    </section>
  );
}
