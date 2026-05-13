interface IllustrationProps {
  label: string;
  caption?: string;
}

export function Illustration({ label, caption }: IllustrationProps) {
  return (
    <div className="my-6 rounded-lg border-2 border-dashed border-border p-8 flex flex-col items-center justify-center bg-surface/50 min-h-[160px]">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-muted mb-3">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M4 32l12-8 8 6 12-10 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="text-sm font-medium text-muted text-center">{label}</p>
      {caption && <p className="text-xs text-muted/70 mt-1 text-center">{caption}</p>}
    </div>
  );
}
