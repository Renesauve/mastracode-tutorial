"use client";

import { useState, ReactNode } from "react";

interface StuckPanelProps {
  children: ReactNode;
}

export function StuckPanel({ children }: StuckPanelProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-4 rounded-lg border border-amber-200 dark:border-amber-900/50 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-4 py-3 bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-200 text-sm font-medium hover:bg-amber-100 dark:hover:bg-amber-950/50 transition-colors"
      >
        <span className="text-base">{open ? "▼" : "▶"}</span>
        <span>🤔 I&apos;m stuck — common problems &amp; fixes</span>
      </button>
      {open && (
        <div className="px-4 py-3 bg-amber-50/50 dark:bg-amber-950/10 text-sm space-y-3 border-t border-amber-200 dark:border-amber-900/50">
          {children}
        </div>
      )}
    </div>
  );
}

export function StuckItem({ problem, fix }: { problem: string; fix: string }) {
  return (
    <div className="flex gap-2">
      <span className="font-semibold text-amber-700 dark:text-amber-300 flex-shrink-0">Problem:</span>
      <div>
        <span className="text-amber-800 dark:text-amber-200">{problem}</span>
        <br />
        <span className="text-amber-700/80 dark:text-amber-300/80">→ {fix}</span>
      </div>
    </div>
  );
}
