import { useState } from "react";
import { ChevronUp } from "lucide-react";

const leagues = [
  "English Premier League",
  "Italian Serie A",
  "German Bundesliga",
  "Spanish La Liga",
  "MLS",
  "International Teams",
];

export default function LeagueFilter() {
  const [selectedLeague, setSelectedLeague] = useState("");

  return (
    <div className="w-max font-archivo">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className=" font-bold uppercase tracking-tight ">League</h2>

        <ChevronUp size={14} strokeWidth={3} className="text-muted-text" />
      </div>

      {/* League list */}
      <div className="space-y-3 py-4">
        {leagues.map((league) => {
          const isSelected = selectedLeague === league;
          return (
            <label
              key={league}
              className="flex cursor-pointer items-center gap-3"
            >
              <input
                type="checkbox"
                name="league"
                value={league}
                checked={isSelected}
                onChange={() => setSelectedLeague(league)}
                className="checked:border-blue-500 checked:bg-blue-500 focus:outline-none w-3 h-3"
              />
              <span className="text-base text-muted-text ">{league}</span>
            </label>
          );
        })}
      </div>

      {/* Bottom divider */}
      <div className="h-px" />
    </div>
  );
}
