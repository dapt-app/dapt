import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
          DAPT — Data Analytic Prediction Terminal
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Read the game like a{" "}
          <span className="text-emerald-400">terminal</span>.
        </h1>
        <p className="max-w-xl text-sm text-zinc-400 sm:text-base">
          DAPT is a focused shell for football prediction work. Inspect
          fixtures, probabilities, and model confidence in a fast, minimal,
          terminal-inspired interface.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="/matches"
          className="inline-flex items-center gap-2 rounded border border-emerald-400 bg-emerald-500/10 px-4 py-2 text-sm font-mono uppercase tracking-wide text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.25)] transition hover:bg-emerald-500/20 hover:text-emerald-200"
        >
          ▸ Open Matches
        </Link>
        <span className="text-xs text-zinc-500">
          Hint: pin this tab as your match-day terminal.
        </span>
      </div>

      <section className="mt-8 grid gap-4 text-xs text-zinc-400 sm:grid-cols-3 sm:text-sm">
        <div className="rounded border border-zinc-800 bg-zinc-950/40 p-3">
          <div className="mb-1 font-mono text-[0.7rem] uppercase tracking-wide text-zinc-500">
            Pipeline
          </div>
          <p className="text-zinc-400">
            Plug in your own data sources and models behind this shell.
          </p>
        </div>
        <div className="rounded border border-zinc-800 bg-zinc-950/40 p-3">
          <div className="mb-1 font-mono text-[0.7rem] uppercase tracking-wide text-zinc-500">
            Snapshot reads
          </div>
          <p className="text-zinc-400">
            Quickly scan upcoming fixtures and key prediction signals.
          </p>
        </div>
        <div className="rounded border border-zinc-800 bg-zinc-950/40 p-3">
          <div className="mb-1 font-mono text-[0.7rem] uppercase tracking-wide text-zinc-500">
            Admin surface
          </div>
          <p className="text-zinc-400">
            Monitor model health and ingestion status from the Admin view.
          </p>
        </div>
      </section>
    </div>
  );
}
