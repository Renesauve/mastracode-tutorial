export function Hero() {
  return (
    <div className="py-16 md:py-24 text-center space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
        <span>✨</span> Free tutorial — no experience needed
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
        Build websites by
        <br />
        <span className="text-accent">talking to your computer</span>
      </h1>
      <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
        Mastra Code is a tool that turns plain English into real websites. 
        This guide takes you from &quot;I&apos;ve never coded before&quot; to 
        &quot;I just deployed my first website&quot; — step by step.
      </p>
      <div className="flex items-center justify-center gap-4 pt-4">
        <a
          href="#what-is-this"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-colors"
        >
          Start the tutorial
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <p className="text-sm text-muted/60">
        Takes about 30 minutes to complete all setup steps
      </p>
    </div>
  );
}
