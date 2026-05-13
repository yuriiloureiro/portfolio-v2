export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
          // setup_complete
        </p>
        <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6">
          Portfolio v2
        </h1>
        <p className="text-muted text-base md:text-lg leading-relaxed">
          Base configurada com sucesso. Next.js 16 · React 19 · Tailwind 4 ·
          TypeScript · JetBrains Mono + Inter.
        </p>
        <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="font-mono text-xs text-muted">ready_to_build</span>
        </div>
      </div>
    </main>
  );
}
