"use client";

import React from "react";
import { siteData } from "@/content/siteData";
import { Container } from "@/components/ui/Container";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface FeaturedSplitProps {
  onOpenContact?: () => void;
}

export function FeaturedSplit({ onOpenContact }: FeaturedSplitProps) {
  return (
    <section id="solutions" className="py-24 sm:py-32 bg-white border-b border-slate-100 relative">
      <Container size="wide">
        
        <div className="space-y-28">
          {siteData.featuredSolutions.map((item) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                item.reverseLayout ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side */}
              <div
                className={`lg:col-span-6 flex flex-col items-start ${
                  item.reverseLayout ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f7fd] text-[#0070e0] text-xs font-bold uppercase tracking-wider mb-5">
                  <span>{item.eyebrow}</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-black text-[#001c3f] tracking-tight leading-tight mb-6">
                  {item.title}
                </h3>
                
                <p className="text-base sm:text-lg text-[#596b82] leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3.5 mb-10">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm font-medium text-[#001c3f]">
                      <CheckCircle2 className="w-5 h-5 text-[#0070e0] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#001c3f] hover:bg-[#0c2340] text-white font-bold text-sm transition-all shadow-sm"
                >
                  <span>{item.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* High-Resolution Photo Side */}
              <div
                className={`lg:col-span-6 ${
                  item.reverseLayout ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-card-hover bg-white border border-slate-100 p-2">
                  <div className="relative h-[340px] sm:h-[420px] w-full rounded-2xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
