export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-16">
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>Built with Mastra Code, of course.</p>
        <div className="flex gap-4">
          <a
            href="https://docs.mastra.ai/docs/mastra-code/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Mastra Docs
          </a>
          <a
            href="https://claude.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Claude Pricing
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            View Source
          </a>
        </div>
      </div>
    </footer>
  );
}
