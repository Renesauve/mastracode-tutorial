"use client";

import { useState, useEffect } from "react";
import { useChecklist } from "./ChecklistContext";

export interface SectionMeta {
  id: string;
  number: number;
  title: string;
}

interface SidebarProps {
  sections: SectionMeta[];
}

export function Sidebar({ sections }: SidebarProps) {
  const { isDone, completedCount, totalSteps } = useChecklist();
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="space-y-1">
      <div className="px-3 py-2 text-xs font-semibold text-muted uppercase tracking-wider mb-2">
        Progress: {completedCount}/{totalSteps}
      </div>
      {sections.map((s) => {
        const done = isDone(s.id);
        const active = activeId === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors ${
              active
                ? "bg-accent/10 text-accent font-medium"
                : "text-muted hover:text-foreground hover:bg-surface"
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                done
                  ? "bg-success text-white"
                  : active
                  ? "bg-accent text-white"
                  : "bg-surface text-muted"
              }`}
            >
              {done ? "✓" : s.number}
            </span>
            <span className="truncate">{s.title}</span>
          </a>
        );
      })}
    </nav>
  );
}
