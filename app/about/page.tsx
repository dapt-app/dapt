export default function AboutPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
          /about
        </p>
        <h1 className="text-2xl font-semibold text-zinc-50 sm:text-3xl">
          About DAPT
        </h1>
        <p className="max-w-xl text-sm text-zinc-400">
          DAPT (Data Analytic Prediction Terminal) is a minimal shell for
          exploring football predictions. The UI stays out of the way so you
          can focus on signal, not chrome.
        </p>
      </header>

      <section className="space-y-3 rounded border border-zinc-800 bg-zinc-950/40 p-4 text-sm text-zinc-300">
        <p>
          This build ships as a thin PWA-friendly Next.js shell. All match data,
          models, and pipelines are intentionally mocked so you can plug in your
          own stack: Supabase, warehouse tables, custom APIs, or on-box models.
        </p>
        <p>
          The design leans on a dark, terminal-style layout: monospace type,
          subtle borders, and a single accent color. It should feel fast and
          legible on both desktop and mobile.
        </p>
        <p className="text-xs text-zinc-500">
          Next steps: connect your real match feed to{" "}
          <span className="font-mono">/matches</span>, surface model outputs in{" "}
          <span className="font-mono">/match/[id]</span>, and wire operational
          health into <span className="font-mono">/admin</span>.
        </p>
      </section>
    </div>
  );
}

