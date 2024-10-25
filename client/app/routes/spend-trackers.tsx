import { Loader } from "@/components/Loader";
import { PageNav } from "@/components/PageNav";
import { SpendTrackerDialog } from "@/components/SpendTrackerDialog";
import { SpendTrackerForm } from "@/components/SpendTrackerForm";
import { TrackerCard } from "@/components/TrackerCard";
import { Button } from "@/components/ui/button";
import { DialogDescription } from "@/components/ui/dialog";
import {
  categoriesQueryOptions,
  trackersQueryOptions,
  transactionsQueryOptions,
} from "@/queries";
import { DialogTitle } from "@radix-ui/react-dialog";
import { SpendTracker, Transaction } from "@server/types";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { cx } from "class-variance-authority";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/spend-trackers")({
  component: SpendTrackersRoute,
  meta: () => [{ title: "Spend Trackers" }],
  pendingComponent: () => <Loader />,
  loader: async ({ context: { queryClient } }) =>
    await Promise.all([
      queryClient.prefetchQuery(trackersQueryOptions()),
      queryClient.prefetchQuery(transactionsQueryOptions()),
      queryClient.prefetchQuery(categoriesQueryOptions()),
    ]),
});

function SpendTrackersRoute() {
  const { data: trackers, isLoading } = useSuspenseQuery(
    trackersQueryOptions()
  );
  const { data: transactions, isLoading: transactionsLoading } =
    useSuspenseQuery(transactionsQueryOptions());

  const { data: categories, isLoading: categoriesLoading } = useSuspenseQuery(
    categoriesQueryOptions()
  );

  const [localTrackers, setLocalTrackers] = useState<SpendTracker[]>([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editDialogState, setEditDialogState] = useState<{
    [key: string]: boolean;
  }>({});
  const [updatedTrackerIds, setUpdatedTrackerIds] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    if (trackers) {
      setLocalTrackers(trackers);
    }
  }, [trackers]);

  if (isLoading && transactionsLoading && categoriesLoading) return <Loader />;

  // Group transactions by cat ID (duplicated code)
  const transactionsByCategory: Record<string, Transaction[]> =
    transactions.reduce(
      (acc, transaction) => {
        const categoryId = transaction.category_id;
        if (!acc[categoryId]) {
          acc[categoryId] = [];
        }
        acc[categoryId].push(transaction);
        return acc;
      },
      {} as Record<string, Transaction[]>
    );

  const trackersWithTransactions = localTrackers.map((tracker) => {
    const trackerTransactions =
      transactionsByCategory[tracker.category_id] || [];
    const transactionCount = trackerTransactions.length;
    const totalCost = trackerTransactions.reduce(
      (sum, txn) => sum + txn.amount,
      0
    );
    const isOverLimit = totalCost > tracker.limit;
    const category =
      categories.find((cat) => cat.id === tracker.category_id)?.name ||
      "Uncategorized";

    return {
      ...tracker,
      category,
      transactions: trackerTransactions,
      transactionCount,
      totalCost,
      isOverLimit,
    };
  });

  const handleCreate = (newTracker: SpendTracker) => {
    setLocalTrackers((prev) => [...prev, newTracker]);
  };

  const handleUpdate = (updatedTracker: SpendTracker) => {
    setLocalTrackers((prev) =>
      prev.map((tracker) =>
        tracker.id === updatedTracker.id ? updatedTracker : tracker
      )
    );

    // First, set the updatedTrackerIds
    setUpdatedTrackerIds((prev) => new Set(prev).add(updatedTracker.id));

    // Then, after a brief delay, close the dialog
    setTimeout(() => {
      setEditDialogState((prev) => ({ ...prev, [updatedTracker.id]: false }));
    }, 100);

    // Remove the confirmation after 5 seconds as before
    setTimeout(() => {
      setUpdatedTrackerIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(updatedTracker.id);
        return newSet;
      });
    }, 5000);
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
          {trackersWithTransactions &&
            trackersWithTransactions.map((tracker) => (
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
                    <TrackerCard
                      tracker={tracker}
                      showConfirmation={updatedTrackerIds.has(tracker.id)}
                      transactionCount={tracker.transactionCount}
                      totalCost={tracker.totalCost}
                      isOverLimit={tracker.isOverLimit}
                    />
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
