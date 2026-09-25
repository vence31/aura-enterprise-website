import React from "react";
import { siteData } from "@/content/siteData";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#f5f7fa] border-t border-slate-200 pt-16 pb-14 text-[#596b82]">
      <Container size="wide">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 pb-16 border-b border-slate-200">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-3">
              <BrandLogo className="w-8 h-8" />
              <span className="font-bold text-xl text-[#001c3f] tracking-tight">
                {siteData.brand.name}
              </span>
            </a>
            <p className="text-sm leading-relaxed text-[#596b82] max-w-sm">
              {siteData.brand.tagline}
            </p>
            <div className="flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-[#001c3f]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>All Systems Operational (99.99%)</span>
            </div>
          </div>

          {/* Links Columns */}
          {siteData.footer.columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-[#001c3f] uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#596b82] hover:text-[#0070e0] font-medium transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar with Region Selector */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#596b82]">
          <div className="flex items-center gap-4">
            <p>{siteData.footer.copyright}</p>
            <div className="flex items-center gap-1 font-semibold text-[#001c3f] hover:text-[#0070e0] cursor-pointer">
              <Globe className="w-3.5 h-3.5" />
              <span>Australia (English)</span>
            </div>
          </div>
          <p>{siteData.footer.complianceNote}</p>
        </div>

      </Container>
    </footer>
  );
}
