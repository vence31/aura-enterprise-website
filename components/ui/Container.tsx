import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({ children, className = "", size = "default" }: ContainerProps) {
  const maxStyles = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
  }[size];

  return (
    <div className={`mx-auto px-5 sm:px-8 lg:px-12 w-full ${maxStyles} ${className}`}>
      {children}
    </div>
  );
}
