export default function AdminPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
          /admin
        </p>
        <h1 className="text-2xl font-semibold text-zinc-50 sm:text-3xl">
          Admin: coming soon
        </h1>
        <p className="max-w-xl text-sm text-zinc-400">
          This is a placeholder surface for monitoring pipelines, models, and
          deployment status. Wire your own metrics and health checks here.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2 rounded border border-zinc-800 bg-zinc-950/40 p-4">
          <div className="font-mono text-xs uppercase tracking-wide text-zinc-500">
            Ingestion status
          </div>
          <div className="font-mono text-sm text-emerald-400">OK · 12 feeds</div>
          <p className="text-xs text-zinc-500">
            Last successful pull: <span className="text-zinc-300">~3 min ago</span>
          </p>
        </div>

        <div className="space-y-2 rounded border border-zinc-800 bg-zinc-950/40 p-4">
          <div className="font-mono text-xs uppercase tracking-wide text-zinc-500">
            Model deployments
          </div>
          <div className="font-mono text-sm text-emerald-400">v0.1 · green</div>
          <p className="text-xs text-zinc-500">
            Placeholder slot for model registry and rollout status.
          </p>
        </div>

        <div className="space-y-2 rounded border border-zinc-800 bg-zinc-950/40 p-4">
          <div className="font-mono text-xs uppercase tracking-wide text-zinc-500">
            Queue depth
          </div>
          <div className="font-mono text-sm text-emerald-400">42 pending</div>
          <p className="text-xs text-zinc-500">
            Swap this for your actual job metrics (e.g. compute queue, ETL
            backlog).
          </p>
        </div>
      </section>
    </div>
  );
}

