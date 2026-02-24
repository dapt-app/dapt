import { notFound } from "next/navigation";

type Match = {
  id: string;
  home: string;
  away: string;
  league: string;
  kickoff: string;
};

const matches: Match[] = [
  {
    id: "1",
    home: "Arsenal",
    away: "Chelsea",
    league: "Premier League",
    kickoff: "Sat 28 Feb · 17:30",
  },
  {
    id: "2",
    home: "Barcelona",
    away: "Real Madrid",
    league: "La Liga",
    kickoff: "Sun 1 Mar · 20:00",
  },
  {
    id: "3",
    home: "Bayern",
    away: "Dortmund",
    league: "Bundesliga",
    kickoff: "Fri 6 Mar · 19:45",
  },
  {
    id: "4",
    home: "Inter",
    away: "Milan",
    league: "Serie A",
    kickoff: "Sat 7 Mar · 21:00",
  },
  {
    id: "5",
    home: "PSG",
    away: "Marseille",
    league: "Ligue 1",
    kickoff: "Sun 8 Mar · 21:15",
  },
  {
    id: "6",
    home: "Sporting",
    away: "Porto",
    league: "Primeira Liga",
    kickoff: "Mon 9 Mar · 20:30",
  },
];

const prediction = {
  homeWin: 0.47,
  draw: 0.24,
  awayWin: 0.29,
  confidence: 0.82,
  explanation:
    "Home side dominance in xG and shot volume over the last ten games, combined with favorable rest advantage and a stable starting XI, tilts the model toward a home result.",
};

type MatchDetailPageProps = {
  params: {
    id: string;
  };
};

export default function MatchDetailPage({ params }: MatchDetailPageProps) {
  const match = matches.find((m) => m.id === params.id);

  if (!match) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
          /match/{match.id}
        </p>
        <h1 className="text-2xl font-semibold text-zinc-50 sm:text-3xl">
          {match.home} <span className="text-zinc-500">vs</span> {match.away}
        </h1>
        <p className="flex flex-wrap gap-3 text-sm text-zinc-400">
          <span className="rounded border border-zinc-800 bg-black/40 px-2 py-0.5 font-mono text-xs text-zinc-300">
            {match.league}
          </span>
          <span className="font-mono text-xs text-zinc-400">
            Kickoff: {match.kickoff}
          </span>
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-[2fr,3fr]">
        <div className="space-y-3 rounded border border-zinc-800 bg-zinc-950/40 p-4">
          <div className="mb-1 font-mono text-[0.7rem] uppercase tracking-wide text-zinc-500">
            Probability surface
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="font-mono text-zinc-300">Home</dt>
              <dd className="font-mono text-emerald-400">
                {(prediction.homeWin * 100).toFixed(1)}%
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="font-mono text-zinc-300">Draw</dt>
              <dd className="font-mono text-emerald-400">
                {(prediction.draw * 100).toFixed(1)}%
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="font-mono text-zinc-300">Away</dt>
              <dd className="font-mono text-emerald-400">
                {(prediction.awayWin * 100).toFixed(1)}%
              </dd>
            </div>
          </dl>

          <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
            <span>Model confidence</span>
            <span className="font-mono text-emerald-400">
              {(prediction.confidence * 100).toFixed(0)}%
            </span>
          </div>
          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-zinc-900">
            <div
              className="h-full rounded-full bg-emerald-500"
              style={{ width: `${prediction.confidence * 100}%` }}
            />
          </div>
        </div>

        <div className="space-y-3 rounded border border-zinc-800 bg-zinc-950/40 p-4">
          <div className="mb-1 font-mono text-[0.7rem] uppercase tracking-wide text-zinc-500">
            Short rationale
          </div>
          <p className="text-sm text-zinc-300">{prediction.explanation}</p>
          <p className="pt-2 text-xs text-zinc-500">
            This is placeholder copy. Replace with your real model narrative
            once you connect DAPT to your pipeline.
          </p>
        </div>
      </section>
    </div>
  );
}

