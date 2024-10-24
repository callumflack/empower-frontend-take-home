import { accountsQueryOptions } from "@/queries";
import type { Account } from "@server/types";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(accountsQueryOptions()),
});

function Index() {
  const { data: accounts, isPending, error } = useQuery(accountsQueryOptions());

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-2">
      <h3>Welcome to Spend Tracker!</h3>
      {accounts && (
        <ul>
          {accounts.map((account: Account) => (
            <li key={account.account_id}>
              {account.name} - ${account.balances.available}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
