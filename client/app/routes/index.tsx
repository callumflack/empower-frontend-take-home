import { createFileRoute } from "@tanstack/react-router";
import { useQuery, queryOptions } from "@tanstack/react-query";

async function fetchAccounts() {
  // https://jsonplaceholder.typicode.com/users
  const response = await fetch("http://localhost:3001/accounts");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

const accountsQueryOptions = queryOptions({
  queryKey: ["accounts"],
  queryFn: fetchAccounts,
});

export const Route = createFileRoute("/")({
  component: Index,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(accountsQueryOptions),
});

function Index() {
  const { data: accounts, isPending, error } = useQuery(accountsQueryOptions);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-2">
      <h3>Welcome to Spend Tracker!</h3>
      {accounts && (
        <ul>
          {accounts.map((account: any) => (
            <li key={account.account_id}>
              {account.name} - ${account.balances.available}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
