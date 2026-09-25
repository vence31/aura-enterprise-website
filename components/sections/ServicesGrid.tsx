"use client";

import React from "react";
import { siteData } from "@/content/siteData";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Layout, Zap, Layers, CheckCircle } from "lucide-react";

const iconMap = {
  Layout: Layout,
  Zap: Zap,
  Layers: Layers,
};

interface ServicesGridProps {
  onOpenContact?: () => void;
}

export function ServicesGrid({ onOpenContact }: ServicesGridProps) {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#f5f7fa] border-b border-slate-200/80 relative">
      <Container size="wide">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#0070e0] text-xs font-bold uppercase tracking-wider mb-4">
              <span>Solutions & Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001c3f] tracking-tight leading-tight">
              Built for speed, simplicity & institutional scale.
            </h2>
          </div>
          <p className="text-[#596b82] text-base sm:text-lg max-w-md">
            Everything you need to accept global payments, streamline operations, and deliver seamless customer journeys.
          </p>
        </div>

        {/* 3-Column Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.services.map((service) => {
            const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Layout;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 hover:shadow-card-hover transition-all duration-300 group"
              >
                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-bold text-[#0070e0] uppercase tracking-wider">
                      {service.category}
                    </span>
                    <div className="p-3.5 rounded-2xl bg-[#f0f7fd] text-[#0070e0] group-hover:bg-[#0070e0] group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Body */}
                  <h3 className="text-2xl font-bold text-[#001c3f] mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#596b82] leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="text-xs font-semibold text-[#001c3f] flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#0070e0] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sub CTA link */}
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0070e0] hover:text-[#00457c] transition-colors pt-4 border-t border-slate-100 text-left"
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
