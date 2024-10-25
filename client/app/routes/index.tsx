import { Loader } from "@/components/Loader";
import { PageNav } from "@/components/PageNav";
import { TransactionsList } from "@/components/TransactionsList";
import {
  accountsQueryOptions,
  transactionsQueryOptions,
  categoriesQueryOptions,
} from "@/queries";
import type { Transaction } from "@server/types";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import type { TransactionGroup, TransactionWithCategory } from "@/types";

export const Route = createFileRoute("/")({
  component: Index,
  meta: () => [{ title: "Spending Overview" }],
  pendingComponent: () => <Loader />,
  loader: async ({ context: { queryClient } }) => {
    await Promise.all([
      // prefetchQuery seems to work better than ensureQueryData, but this may have to do with local dev server on 3001 with TS Start SSR
      queryClient.prefetchQuery(accountsQueryOptions()),
      queryClient.prefetchQuery(transactionsQueryOptions()),
      queryClient.prefetchQuery(categoriesQueryOptions()),
    ]);
  },
});

function Index() {
  const { data: accounts } = useSuspenseQuery(accountsQueryOptions());
  const { data: categories } = useSuspenseQuery(categoriesQueryOptions());
  const { data: transactions, isLoading } = useSuspenseQuery({
    ...transactionsQueryOptions(),
    select: (transactions: Transaction[]): TransactionGroup[] => {
      // Group by account_id
      const grouped = transactions.reduce<
        Record<string, TransactionWithCategory[]>
      >((acc, transaction) => {
        const accountId = transaction.account_id;
        if (!acc[accountId]) {
          acc[accountId] = [];
        }
        // Add category name to transaction
        const category = categories.find(
          (c) => c.id === transaction.category_id
        );
        acc[accountId].push({
          ...transaction,
          categoryName: category?.name || "Uncategorized",
        });
        return acc;
      }, {});

      // Convert to array of groups
      return Object.entries(grouped).map(([accountId, transactions]) => {
        const account = accounts.find((a) => a.account_id === accountId);
        return {
          accountId,
          transactions,
          accountName: account?.name || "Unknown Account",
          accountBalance: account?.balances.available || 0,
        };
      });
    },
  });

  if (isLoading) return <Loader />;

  return (
    <div className="pb-60">
      <PageNav heading="Welcome to your Spending" />

      <div className="container max-w-[960px] pt-10 space-y-8">
        {transactions &&
          transactions.map((group, i) => (
            <div key={`${group.accountId}-${i}`} className="">
              <div className="space-y-3">
                <h2 className="text-lg font-semibold flex items-baseline gap-2.5">
                  <span>{group.accountName}</span>
                  <span className="text-foreground/50 text-base font-normal">
                    ${group.accountBalance} available
                  </span>
                </h2>
                <hr className="border-t border-muted-foreground/50" />
              </div>
              <TransactionsList transactions={group.transactions} />
            </div>
          ))}
      </div>
    </div>
  );
}
