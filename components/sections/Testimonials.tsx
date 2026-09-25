"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/content/siteData";
import { Container } from "@/components/ui/Container";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = siteData.testimonials;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const current = items[activeIndex];

  return (
    <section id="testimonials" className="py-28 sm:py-36 bg-white border-b border-slate-100 relative">
      <Container size="default">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f7fd] text-[#0070e0] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Customer Success</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#001c3f] tracking-tight">
            Trusted by decisive market leaders.
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="relative rounded-3xl bg-[#f0f7fd] border border-[#d8eafc] p-8 sm:p-14 shadow-card">
          <Quote className="w-14 h-14 text-[#0070e0]/15 absolute top-8 right-8 pointer-events-none" />

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-8">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Testimonial Quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="min-h-[160px] flex flex-col justify-between"
            >
              <p className="text-xl sm:text-2xl text-[#001c3f] font-medium leading-relaxed italic mb-8">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={current.avatarSrc}
                    alt={current.author}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="text-base font-bold text-[#001c3f] tracking-tight">
                    {current.author}
                  </div>
                  <div className="text-sm text-[#596b82] font-medium">
                    {current.role}, <span className="text-[#0070e0] font-semibold">{current.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex items-center justify-between border-t border-[#d8eafc] pt-6 mt-8">
            <div className="flex items-center gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    idx === activeIndex ? "bg-[#0070e0] w-8" : "bg-slate-300 w-2"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white hover:bg-slate-50 text-[#001c3f] border border-slate-200 shadow-sm transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white hover:bg-slate-50 text-[#001c3f] border border-slate-200 shadow-sm transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
