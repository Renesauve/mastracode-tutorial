"use client";

import { useState } from "react";
import { useOS, OS } from "./OSContext";

interface CommandBlockProps {
  command: string | Partial<Record<OS, string>>;
  title?: string;
}

export function CommandBlock({ command, title }: CommandBlockProps) {
  const { os } = useOS();
  const [copied, setCopied] = useState(false);

  const cmd = typeof command === "string" ? command : command[os] || command.mac || "";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 rounded-lg border border-border overflow-hidden">
      {title && (
        <div className="px-4 py-2 bg-surface text-xs font-medium text-muted border-b border-border">
          {title}
        </div>
      )}
      <div className="relative group">
        <pre className="px-4 py-3 bg-[#1e1e2e] text-[#cdd6f4] text-sm font-mono overflow-x-auto">
          <code>
            <span className="text-[#a6e3a1] select-none">$ </span>
            {cmd}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all opacity-0 group-hover:opacity-100"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
