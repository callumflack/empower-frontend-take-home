import { SpendTrackerWithTransactions } from "@server/types";
import { cx } from "class-variance-authority";
import { CheckIcon, Cog } from "lucide-react";
import React from "react";
import { buttonVariants } from "./ui/button";

interface TrackerCardProps {
  tracker: SpendTrackerWithTransactions;
  showConfirmation?: boolean;
  transactionCount?: number;
  totalCost?: number;
  isOverLimit?: boolean;
}

export const TrackerCard: React.FC<TrackerCardProps> = ({
  tracker,
  showConfirmation,
  transactionCount = 0,
  totalCost = 0,
  isOverLimit = false,
}) => {
  return (
    <div className="text-left border border-muted-foreground/50 rounded-lg p-5 pt-4 min-h-[280px] group relative flex flex-col">
      {/* heading */}
      <div className="X">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold truncate max-w-5/6">
            {tracker.name}
          </h2>
          <div className="flex items-center gap-2">
            <CheckIcon
              className={cx(
                "size-[1.5em] text-green-500 transition-opacity duration-700",
                showConfirmation ? "opacity-100" : "opacity-0"
              )}
              aria-hidden={!showConfirmation}
            />
          </div>
        </div>
        {showConfirmation && (
          <span className="sr-only">Tracker updated successfully</span>
        )}
        <div className="text-muted-foreground/70 text-xs flex items-center gap-1.5 pt-0.5">
          {tracker.category}
          <hr className="w-px border-l h-[1em] border-muted-foreground/50 transform translate-y-px" />
          7 days
          <hr className="w-px border-l h-[1em] border-muted-foreground/50 transform translate-y-px" />
          {transactionCount} transaction{transactionCount === 1 ? "" : "s"}
        </div>
      </div>

      {/* limit v transaction visuals */}
      <div className="mt-auto space-y-1">
        {/* <p className="text-xl font-medium leading-none tracking-[-0.01em] text-muted-foreground/70 pb-2">
          Last 7 days
        </p> */}
        <p className="text-[48px] font-normal leading-none tracking-tight text-muted-foreground/70">
          ${tracker.limit}{" "}
          <span className="text-xs tracking-normal">limit</span>
        </p>
        <p
          className={cx(
            "text-[48px] font-normal leading-none tracking-tight",
            isOverLimit ? "text-red-500" : "text-green-500"
          )}
        >
          ${totalCost.toFixed(2)}{" "}
          <span className="text-xs tracking-normal">
            {isOverLimit ? "exceeded" : "nice"}
            {/* spent */}
          </span>
        </p>
      </div>

      {/* edit pseudo-button */}
      <div className="absolute top-0 right-0">
        <div className="p-2.5">
          <div
            className={cx(
              buttonVariants({
                variant: "outline",
                size: "icon",
              }),
              "group-hover:opacity-100 opacity-0 transition-opacity duration-200 text-muted-foreground"
            )}
          >
            <Cog className="size-em" />
            <span className="sr-only">Configure</span>
          </div>
        </div>
      </div>
    </div>
  );
};
