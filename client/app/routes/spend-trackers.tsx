import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { trackersQueryOptions } from "@/queries";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/spend-trackers")({
  component: SpendTrackersRoute,
  pendingComponent: () => <Loader />,
  loader: ({ context: { queryClient } }) =>
    queryClient.prefetchQuery(trackersQueryOptions()),
});

function SpendTrackersRoute() {
  const { data: trackers, isLoading } = useQuery(trackersQueryOptions());

  if (isLoading) return <Loader />;

  return (
    <div className="p-2">
      <h3>Spend Trackers!</h3>
      <ul>
        {trackers &&
          trackers.map((trackers) => (
            <li key={trackers.id}>
              {trackers.name} - ${trackers.limit}
            </li>
          ))}
      </ul>
    </div>
  );
}
