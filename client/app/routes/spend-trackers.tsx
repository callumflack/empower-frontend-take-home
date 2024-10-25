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
import { cx } from "class-variance-authority";
import { DialogTitle } from "@radix-ui/react-dialog";
import { DialogDescription } from "@/components/ui/dialog";

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
  const [editDialogState, setEditDialogState] = useState<{
    [key: string]: boolean;
  }>({});

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

  const handleUpdate = (updatedTracker: SpendTracker) => {
    setLocalTrackers((prev) =>
      prev.map((tracker) =>
        tracker.id === updatedTracker.id ? updatedTracker : tracker
      )
    );
    setEditDialogState((prev) => ({ ...prev, [updatedTracker.id]: false }));
  };

  const handleDelete = (id: string) => {
    setLocalTrackers((prev) => prev.filter((tracker) => tracker.id !== id));
    setEditDialogState((prev) => ({ ...prev, [id]: false }));
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
            <div className="space-y-1">
              <DialogTitle>Create a Spend Tracker</DialogTitle>
              <DialogDescription>This is a description</DialogDescription>
            </div>
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
            localTrackers.map((tracker) => (
              <SpendTrackerDialog
                key={tracker.id}
                open={editDialogState[tracker.id] || false}
                onOpenChange={(open) =>
                  setEditDialogState((prev) => ({
                    ...prev,
                    [tracker.id]: open,
                  }))
                }
                buttonNode={
                  <button
                    className={cx(
                      "w-full rounded-lg border border-transparent",
                      "focus:outline-none",
                      "focus:ring-8 focus:ring-green-200 focus:border focus:border-muted-foreground",
                      "focus-visible:ring-8 focus-visible:ring-green-200 focus-visible:border focus-visible:border-muted-foreground"
                    )}
                  >
                    <TrackerCard tracker={tracker} />
                  </button>
                }
              >
                <div className="space-y-1">
                  <DialogTitle>Edit Spend Tracker</DialogTitle>
                  <DialogDescription>This is a description</DialogDescription>
                </div>
                <SpendTrackerForm
                  initialData={tracker}
                  onSubmit={handleUpdate}
                  onClose={() =>
                    setEditDialogState((prev) => ({
                      ...prev,
                      [tracker.id]: false,
                    }))
                  }
                  deleteButton={
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => handleDelete(tracker.id)}
                    >
                      Delete
                    </Button>
                  }
                />
              </SpendTrackerDialog>
            ))}
        </div>
      </div>
    </div>
  );
}
