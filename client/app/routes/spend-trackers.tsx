import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { trackersQueryOptions } from "@/queries";
import { Loader } from "@/components/Loader";
import { PageNav } from "@/components/PageNav";
import { SpendTrackerDialog } from "@/components/SpendTrackerDialog";
import { SpendTrackerForm } from "@/components/SpendTrackerForm";
import { Button } from "@/components/ui/button";
import { TrackerCard } from "@/components/TrackerCard";
import { useState, useEffect } from "react";
import { SpendTracker } from "@server/types";

export const Route = createFileRoute("/spend-trackers")({
  component: SpendTrackersRoute,
  meta: () => [{ title: "Spend Trackers" }],
  pendingComponent: () => <Loader />,
  loader: ({ context: { queryClient } }) =>
    queryClient.prefetchQuery(trackersQueryOptions()),
});

function SpendTrackersRoute() {
  const { data: trackers, isLoading } = useQuery(trackersQueryOptions());

  const [localTrackers, setLocalTrackers] = useState<SpendTracker[]>([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  useEffect(() => {
    if (trackers) {
      setLocalTrackers(trackers);
    }
  }, [trackers]);

  if (isLoading) return <Loader />;

  const handleCreate = (newTracker: SpendTracker) => {
    setLocalTrackers((prev) => [...prev, newTracker]);
    console.log("Local trackers:", localTrackers);
  };

  return (
    <div className="pb-60">
      <PageNav heading="Spend Trackers">
        <div className="-mt-1">
          <SpendTrackerDialog
            open={isCreateOpen}
            onOpenChange={setIsCreateOpen}
            buttonNode={<Button size="sm">Create Spend Tracker</Button>}
          >
            <div className="space-y-1"></div>
            <SpendTrackerForm
              onSubmit={handleCreate}
              onClose={() => setIsCreateOpen(false)}
            />
          </SpendTrackerDialog>
        </div>
      </PageNav>
      <div className="container max-w-[960px] pt-8 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trackers &&
            localTrackers.map((trackers) => (
              <TrackerCard key={trackers.id} tracker={trackers} />
            ))}
        </div>
      </div>
    </div>
  );
}
