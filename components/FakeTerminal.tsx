"use client";

import { useState, useRef, useCallback } from "react";

interface FakeTerminalProps {
  command: string;
  output: string;
  title?: string;
}

export function FakeTerminal({ command, output, title = "Terminal" }: FakeTerminalProps) {
  const [displayedCmd, setDisplayedCmd] = useState("");
  const [displayedOutput, setDisplayedOutput] = useState("");
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const cancelRef = useRef(false);

  const run = useCallback(() => {
    if (running) return;
    cancelRef.current = false;
    setRunning(true);
    setDone(false);
    setDisplayedCmd("");
    setDisplayedOutput("");

    let i = 0;
    const typeCmd = () => {
      if (cancelRef.current) return;
      if (i < command.length) {
        setDisplayedCmd(command.slice(0, i + 1));
        i++;
        setTimeout(typeCmd, 30 + Math.random() * 30);
      } else {
        setTimeout(showOutput, 300);
      }
    };

    const showOutput = () => {
      if (cancelRef.current) return;
      setDisplayedOutput(output);
      setRunning(false);
      setDone(true);
    };

    typeCmd();
  }, [command, output, running]);

  const reset = () => {
    cancelRef.current = true;
    setRunning(false);
    setDone(false);
    setDisplayedCmd("");
    setDisplayedOutput("");
  };

  return (
    <div className="my-4 rounded-lg border border-border overflow-hidden shadow-lg">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#1e1e2e] border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#f38ba8]" />
          <span className="w-3 h-3 rounded-full bg-[#f9e2af]" />
          <span className="w-3 h-3 rounded-full bg-[#a6e3a1]" />
        </div>
        <span className="text-xs text-white/40 font-mono ml-2">{title}</span>
      </div>

      {/* Terminal body */}
      <div className="bg-[#1e1e2e] p-4 font-mono text-sm min-h-[100px]">
        {(displayedCmd || running) && (
          <div className="text-[#cdd6f4]">
            <span className="text-[#a6e3a1]">$ </span>
            {displayedCmd}
            {running && <span className="animate-blink text-[#cdd6f4]">▋</span>}
          </div>
        )}
        {displayedOutput && (
          <pre className="text-[#bac2de] mt-2 whitespace-pre-wrap">{displayedOutput}</pre>
        )}
        {!displayedCmd && !running && !done && (
          <div className="text-[#6c7086]">
            <span className="text-[#a6e3a1]">$ </span>
            <span className="animate-blink">▋</span>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex gap-2 px-4 py-2 bg-[#181825] border-t border-white/10">
        <button
          onClick={run}
          disabled={running}
          className="px-3 py-1 rounded text-xs font-medium bg-[#a6e3a1] text-[#1e1e2e] hover:bg-[#94e2d5] disabled:opacity-50 transition-colors"
        >
          {done ? "Run again" : running ? "Running..." : "▶ Run"}
        </button>
        {done && (
          <button
            onClick={reset}
            className="px-3 py-1 rounded text-xs font-medium bg-white/10 text-white/60 hover:bg-white/20 transition-colors"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
