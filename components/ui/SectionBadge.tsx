import React from "react";
import { Sparkles } from "lucide-react";

interface SectionBadgeProps {
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
}

export function SectionBadge({ children, icon = true, className = "" }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-5 ${className}`}
    >
      {icon && <Sparkles className="w-3.5 h-3.5 text-blue-400" />}
      <span>{children}</span>
    </div>
  );
}
