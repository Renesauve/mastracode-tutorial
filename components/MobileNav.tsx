"use client";

import { useState } from "react";
import { SectionMeta, Sidebar } from "./Sidebar";

export function MobileNav({ sections }: { sections: SectionMeta[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md text-muted hover:text-foreground hover:bg-surface transition-colors"
        aria-label="Toggle navigation"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-4 z-40 max-h-[70vh] overflow-y-auto" onClick={() => setOpen(false)}>
          <Sidebar sections={sections} />
        </div>
      )}
    </div>
  );
}
