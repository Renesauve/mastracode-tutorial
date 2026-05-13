"use client";

import { ReactNode } from "react";
import { useChecklist } from "./ChecklistContext";

interface SectionProps {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
}

export function Section({ id, number, title, children }: SectionProps) {
  const { isDone, toggleDone } = useChecklist();
  const done = isDone(id);

  return (
    <section id={id} className="scroll-mt-20 mb-16">
      <div className="flex items-start gap-4 mb-6">
        <button
          onClick={() => toggleDone(id)}
          className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all ${
            done
              ? "bg-success border-success text-white"
              : "border-border text-muted hover:border-accent hover:text-accent"
          }`}
          aria-label={done ? `Step ${number} complete` : `Mark step ${number} complete`}
        >
          {done ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            number
          )}
        </button>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        </div>
      </div>
      <div className="pl-12 space-y-4 text-foreground/90 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
