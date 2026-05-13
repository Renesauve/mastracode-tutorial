"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

const STORAGE_KEY = "mastracode-tutorial:progress";
const TOTAL_STEPS = 15;

interface ChecklistContextType {
  completed: Set<string>;
  markDone: (id: string) => void;
  toggleDone: (id: string) => void;
  isDone: (id: string) => boolean;
  completedCount: number;
  totalSteps: number;
  percent: number;
}

const ChecklistContext = createContext<ChecklistContextType>({
  completed: new Set(),
  markDone: () => {},
  toggleDone: () => {},
  isDone: () => false,
  completedCount: 0,
  totalSteps: TOTAL_STEPS,
  percent: 0,
});

export function useChecklist() {
  return useContext(ChecklistContext);
}

export function ChecklistProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCompleted(new Set(JSON.parse(saved)));
      }
    } catch {}
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
    }
  }, [completed, mounted]);

  const markDone = useCallback((id: string) => {
    setCompleted((prev) => new Set([...prev, id]));
  }, []);

  const toggleDone = useCallback((id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const isDone = useCallback((id: string) => completed.has(id), [completed]);

  const completedCount = completed.size;
  const percent = Math.round((completedCount / TOTAL_STEPS) * 100);

  return (
    <ChecklistContext.Provider
      value={{ completed, markDone, toggleDone, isDone, completedCount, totalSteps: TOTAL_STEPS, percent }}
    >
      {children}
    </ChecklistContext.Provider>
  );
}
