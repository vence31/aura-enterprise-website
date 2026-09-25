"use client";

import React, { useState, useEffect } from "react";
import { siteData } from "@/content/siteData";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenContact?: () => void;
  activeSegment?: "personal" | "business";
  onSegmentChange?: (segment: "personal" | "business") => void;
}

export function Navbar({ onOpenContact, activeSegment = "business", onSegmentChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-sm"
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand & Audience Segment Switcher */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-3 group">
              <BrandLogo className="w-8 h-8 transition-transform group-hover:scale-105" />
              <span className="font-bold text-xl tracking-tight text-[#001c3f] group-hover:text-[#0070e0] transition-colors">
                {siteData.brand.name}
              </span>
            </a>

            {/* PayPal-Style Segment Switcher */}
            <div className="hidden lg:flex items-center p-1 bg-[#f5f7fa] rounded-full border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => onSegmentChange?.("personal")}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  activeSegment === "personal"
                    ? "bg-white text-[#001c3f] shadow-sm font-bold"
                    : "text-slate-600 hover:text-[#001c3f]"
                }`}
              >
                Personal
              </button>
              <button
                onClick={() => onSegmentChange?.("business")}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  activeSegment === "business"
                    ? "bg-[#001c3f] text-white shadow-sm font-bold"
                    : "text-slate-600 hover:text-[#001c3f]"
                }`}
              >
                Business
              </button>
            </div>
          </div>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {siteData.navigation.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[#001c3f] hover:text-[#0070e0] transition-colors flex items-center gap-1"
              >
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-full border-2 border-[#001c3f] text-[#001c3f] hover:bg-[#001c3f]/5 text-sm font-bold transition-all"
            >
              Sign In
            </button>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0070e0] hover:bg-[#005bb5] text-white text-sm font-bold shadow-pill transition-all hover:shadow-md"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-xl bg-slate-100 text-[#001c3f] hover:bg-slate-200"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <Container className="py-6 flex flex-col gap-4">
              {/* Segmented Switcher for Mobile */}
              <div className="flex items-center p-1 bg-[#f5f7fa] rounded-full border border-slate-200 text-xs font-semibold mb-2">
                <button
                  onClick={() => {
                    onSegmentChange?.("personal");
                  }}
                  className={`flex-1 py-2 rounded-full text-center ${
                    activeSegment === "personal"
                      ? "bg-white text-[#001c3f] shadow-sm font-bold"
                      : "text-slate-600"
                  }`}
                >
                  Personal
                </button>
                <button
                  onClick={() => {
                    onSegmentChange?.("business");
                  }}
                  className={`flex-1 py-2 rounded-full text-center ${
                    activeSegment === "business"
                      ? "bg-[#001c3f] text-white shadow-sm font-bold"
                      : "text-slate-600"
                  }`}
                >
                  Business
                </button>
              </div>

              {siteData.navigation.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-[#001c3f] hover:text-[#0070e0] py-2 border-b border-slate-100"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenContact?.();
                  }}
                  className="w-full py-3 rounded-full bg-[#0070e0] text-white font-bold text-center shadow-pill"
                >
                  Get Started
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenContact?.();
                  }}
                  className="w-full py-3 rounded-full border-2 border-[#001c3f] text-[#001c3f] font-bold text-center"
                >
                  Sign In
                </button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
