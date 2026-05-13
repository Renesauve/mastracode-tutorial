"use client";

import { useState } from "react";

type Frequency = "casual" | "regular" | "heavy";
type ProjectSize = "small" | "big";
type Plan = "free" | "pro" | "max100" | "max200";

const plans: Record<Plan, { name: string; price: string; desc: string }> = {
  free: {
    name: "Free",
    price: "$0",
    desc: "Very limited usage. Good to try it out, but you'll hit limits quickly.",
  },
  pro: {
    name: "Pro",
    price: "$20/mo",
    desc: "Best for most beginners. Enough for 1-2 coding sessions per day. Resets every 5 hours.",
  },
  max100: {
    name: "Max",
    price: "$100/mo",
    desc: "5x more usage than Pro. Great if you're coding every day and working on bigger projects.",
  },
  max200: {
    name: "Max (Ultra)",
    price: "$200/mo",
    desc: "Maximum power. Access to the most capable models. For serious daily development.",
  },
};

function recommend(freq: Frequency, size: ProjectSize): Plan {
  if (freq === "casual" && size === "small") return "pro";
  if (freq === "casual" && size === "big") return "pro";
  if (freq === "regular" && size === "small") return "pro";
  if (freq === "regular" && size === "big") return "max100";
  if (freq === "heavy") return size === "small" ? "max100" : "max200";
  return "pro";
}

export function PlanPicker() {
  const [freq, setFreq] = useState<Frequency | null>(null);
  const [size, setSize] = useState<ProjectSize | null>(null);

  const rec = freq && size ? recommend(freq, size) : null;

  return (
    <div className="my-6 space-y-6">
      {/* Question 1 */}
      <div>
        <p className="font-medium mb-2">How often will you code?</p>
        <div className="flex flex-wrap gap-2">
          {([
            ["casual", "A few times a week"],
            ["regular", "Most days"],
            ["heavy", "All day every day"],
          ] as const).map(([val, label]) => (
            <button
              key={val}
              onClick={() => setFreq(val)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                freq === val
                  ? "bg-accent text-white border-accent"
                  : "border-border text-foreground hover:border-accent/50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Question 2 */}
      <div>
        <p className="font-medium mb-2">What kind of projects?</p>
        <div className="flex flex-wrap gap-2">
          {([
            ["small", "Small experiments & landing pages"],
            ["big", "Full websites & web apps"],
          ] as const).map(([val, label]) => (
            <button
              key={val}
              onClick={() => setSize(val)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                size === val
                  ? "bg-accent text-white border-accent"
                  : "border-border text-foreground hover:border-accent/50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {rec && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
          {(Object.entries(plans) as [Plan, (typeof plans)[Plan]][]).map(([key, plan]) => (
            <div
              key={key}
              className={`rounded-lg border-2 p-4 transition-all ${
                key === rec
                  ? "border-accent bg-accent/5 shadow-md scale-[1.02]"
                  : "border-border"
              }`}
            >
              {key === rec && (
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                  ★ Recommended
                </div>
              )}
              <div className="font-bold text-lg">{plan.name}</div>
              <div className="text-2xl font-bold text-accent mt-1">{plan.price}</div>
              <p className="text-sm text-muted mt-2">{plan.desc}</p>
            </div>
          ))}
        </div>
      )}

      {rec && (
        <p className="text-sm text-muted">
          👉 Based on your answers, we recommend <strong className="text-foreground">{plans[rec].name} ({plans[rec].price})</strong>.{" "}
          <a href="https://claude.com/pricing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            See all plans →
          </a>
        </p>
      )}
    </div>
  );
}
