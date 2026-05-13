"use client";

import { ReactNode } from "react";
import { useOS, OS } from "./OSContext";

interface OSOnlyProps {
  os: OS | OS[];
  children: ReactNode;
}

/**
 * Renders children only when the selected OS matches.
 * Accepts a single OS or an array of OSes.
 *
 * <OSOnly os="mac">Mac-specific content</OSOnly>
 * <OSOnly os={["mac", "linux"]}>Unix-like content</OSOnly>
 */
export function OSOnly({ os, children }: OSOnlyProps) {
  const { os: currentOS } = useOS();
  const match = Array.isArray(os) ? os.includes(currentOS) : os === currentOS;
  if (!match) return null;
  return <>{children}</>;
}
