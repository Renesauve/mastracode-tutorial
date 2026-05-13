"use client";

import { useState, ReactNode } from "react";

interface JargonProps {
  term: string;
  children: ReactNode;
}

export function Jargon({ term, children }: JargonProps) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-0.5 border-b border-dashed border-accent/50 text-accent hover:border-accent cursor-help"
      >
        {term}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          className="inline opacity-60"
          fill="none"
        >
          <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" />
          <text
            x="6"
            y="9"
            textAnchor="middle"
            fill="currentColor"
            fontSize="8"
            fontWeight="bold"
          >
            ?
          </text>
        </svg>
      </button>
      {open && (
        <span className="block mt-2 mb-2 p-3 rounded-lg bg-accent/5 border border-accent/20 text-sm text-foreground/80 leading-relaxed">
          {children}
        </span>
      )}
    </span>
  );
}
