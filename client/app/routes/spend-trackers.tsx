import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/spend-trackers")({
  component: SpendTrackersRoute,
});

function SpendTrackersRoute() {
  return (
    <div className="p-2">
      <h3>Spend Trackers!</h3>
    </div>
  );
}
