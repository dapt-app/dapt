import Link from "next/link";

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

export default function MatchesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
          /matches
        </p>
        <h1 className="text-2xl font-semibold text-zinc-50 sm:text-3xl">
          Upcoming matches
        </h1>
        <p className="max-w-xl text-sm text-zinc-400">
          Temporary sample fixtures. Wire your own feed to replace this static
          array with live data.
        </p>
      </header>

      <div className="overflow-hidden rounded border border-zinc-800 bg-zinc-950/40">
        <div className="border-b border-zinc-800 bg-zinc-950/60 px-4 py-2 text-xs font-mono text-zinc-500">
          id │ home vs away │ league │ kickoff
        </div>
        <ul className="divide-y divide-zinc-800">
          {matches.map((match) => (
            <li key={match.id}>
              <Link
                href={`/match/${match.id}`}
                className="flex items-center gap-4 px-4 py-3 text-sm text-zinc-200 transition hover:bg-emerald-500/5"
              >
                <span className="w-10 font-mono text-xs text-zinc-500">
                  #{match.id.padStart(2, "0")}
                </span>
                <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                  <div className="flex-1 font-mono">
                    <span className="text-zinc-100">{match.home}</span>
                    <span className="mx-2 text-zinc-500">vs</span>
                    <span className="text-zinc-100">{match.away}</span>
                  </div>
                  <div className="flex flex-1 flex-wrap items-center gap-3 text-xs text-zinc-400 sm:justify-end">
                    <span className="rounded border border-zinc-800 bg-black/40 px-2 py-0.5 font-mono">
                      {match.league}
                    </span>
                    <span className="font-mono text-zinc-300">
                      {match.kickoff}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

