import React from "react";
import { SpendTracker } from "@server/types";

interface TrackerCardProps {
  tracker: SpendTracker;
}

export const TrackerCard: React.FC<TrackerCardProps> = ({ tracker }) => {
  return (
    <div className="text-left border border-muted-foreground/50 rounded-lg px-5 py-4 min-h-[320px]">
      <h2 className="text-lg font-semibold">{tracker.name}</h2>
      <p className="text-muted-foreground/70 text-sm">{tracker.category_id}</p>
      <p className="text-lg font-semibold">${tracker.limit}</p>
    </div>
  );
};
