"use client";

import { useChecklist } from "./ChecklistContext";

export function ProgressBar() {
  const { completedCount, totalSteps, percent } = useChecklist();

  return (
    <div className="h-1 bg-surface w-full">
      <div
        className="h-full bg-accent transition-all duration-500 ease-out"
        style={{ width: `${percent}%` }}
      />
      <div className="sr-only">
        {completedCount} of {totalSteps} steps complete ({percent}%)
      </div>
    </div>
  );
}
