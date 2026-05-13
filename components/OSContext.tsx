"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type OS = "mac" | "windows" | "linux";

interface OSContextType {
  os: OS;
  setOS: (os: OS) => void;
}

const OSContext = createContext<OSContextType>({ os: "mac", setOS: () => {} });

export function useOS() {
  return useContext(OSContext);
}

function detectOS(): OS {
  if (typeof window === "undefined") return "mac";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("win")) return "windows";
  if (ua.includes("linux")) return "linux";
  return "mac";
}

export function OSProvider({ children }: { children: ReactNode }) {
  const [os, setOS] = useState<OS>("mac");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setOS(detectOS());
    setMounted(true);
  }, []);

  if (!mounted) {
    return <OSContext.Provider value={{ os: "mac", setOS }}>{children}</OSContext.Provider>;
  }

  return <OSContext.Provider value={{ os, setOS }}>{children}</OSContext.Provider>;
}

export function OSSwitcher() {
  const { os, setOS } = useOS();
  return (
    <div className="flex items-center gap-1 text-sm">
      <span className="text-muted mr-1">OS:</span>
      {(["mac", "windows", "linux"] as const).map((o) => (
        <button
          key={o}
          onClick={() => setOS(o)}
          className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
            os === o
              ? "bg-accent text-white"
              : "bg-surface text-muted hover:text-foreground"
          }`}
        >
          {o === "mac" ? "Mac" : o === "windows" ? "Windows" : "Linux"}
        </button>
      ))}
    </div>
  );
}
