"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/content/siteData";
import { Container } from "@/components/ui/Container";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";

interface HeroProps {
  onOpenContact?: () => void;
  activeSegment?: "personal" | "business";
}

export function Hero({ onOpenContact, activeSegment = "business" }: HeroProps) {
  const isPersonal = activeSegment === "personal";

  return (
    <section className="relative pt-36 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-white via-[#f4f9fd] to-white overflow-hidden border-b border-slate-100">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f4fd] text-[#0070e0] text-xs font-bold uppercase tracking-wider mb-6">
              <Shield className="w-3.5 h-3.5" />
              <span>{isPersonal ? "For Everyday Commerce & Life" : "Enterprise Grade Commerce"}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#001c3f] tracking-tight leading-[1.08] mb-6">
              {isPersonal
                ? "The simpler, safer way to pay & manage funds online."
                : "Power your business with seamless digital payments & scale."}
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#596b82] font-normal leading-relaxed mb-10 max-w-xl">
              {isPersonal
                ? "Join millions who trust our platform to shop, send money, and manage global transactions with complete buyer security."
                : "A unified platform built to accelerate customer conversion, streamline operations, and deliver world-class digital payment experiences."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#0070e0] hover:bg-[#005bb5] text-white font-bold text-base shadow-pill transition-all hover:shadow-lg"
              >
                <span>{isPersonal ? "Sign Up for Free" : "Get Started with Business"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#001c3f] text-[#001c3f] hover:bg-[#001c3f]/5 font-bold text-base transition-all"
              >
                {isPersonal ? "Explore Personal" : "Contact Sales"}
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/80 w-full max-w-lg">
              {siteData.hero.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-2xl sm:text-3xl font-black text-[#001c3f] tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs text-[#596b82] font-semibold mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Column */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 p-2">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={isPersonal ? "/images/personal-lifestyle.jpg" : "/images/hero-daylight.jpg"}
                  alt="Enterprise team collaborating in clean, daylight environment"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Floating Trust Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-card-hover flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0070e0]/10 flex items-center justify-center text-[#0070e0]">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#596b82] font-semibold">Institutional Grade</div>
                    <div className="text-sm font-bold text-[#001c3f]">99.99% Reliability Guarantee</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#0070e0] bg-[#e8f4fd] px-3 py-1.5 rounded-full">
                  Verified SLA
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
