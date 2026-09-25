import React from "react";

export function BrandLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="36" height="36" rx="10" fill="#001C3F" />
      <path
        d="M10 26L18 9L26 26H21.5L18 18.5L14.5 26H10Z"
        fill="white"
      />
      <circle cx="18" cy="18" r="3.2" fill="#0070E0" />
    </svg>
  );
}
