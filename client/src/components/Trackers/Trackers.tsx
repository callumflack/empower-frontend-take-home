import { useGetCategories } from '@/api/useGetCategories';
import { useGetTrackers } from '@/api/useGetTrackers';
import { useGetTransactions } from '@/api/useGetTransactions';
import { getPercentage } from '@/utils';
import { ProgressBar } from '../ProgressBar';

export const Trackers = () => {
  const { data: trackers } = useGetTrackers();
  const { data: transactions } = useGetTransactions();
  const { data: categories } = useGetCategories();

  const getWeeklyTotal = () =>
    trackers?.reduce((a, b) => a + b.budget, 0).toFixed(2);
  const weeklyTotal = Number(getWeeklyTotal());

  const getTotalSpent = () =>
    transactions?.reduce((a, b) => a + b.amount, 0).toFixed(2);
  const totalSpent = Number(getTotalSpent());

  const getTrackerTotal = (id: string) =>
    Number(
      transactions
        ?.filter((x) => x.categoryId === id)
        .reduce((a, b) => a + b.amount, 0)
        .toFixed(2)
    );

  const getCategoryName = (id: string) =>
    categories?.find((x) => x.id === id)?.name;

  console.log('trackers', trackers);
  console.log('transactions', transactions);
  console.log('categories', categories);

  return (
    <section className="border-light rounded-md border p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Trackers</h1>
        <p className="text-mediumGrey">Weekly budget: ${weeklyTotal}</p>
        <p className="text-mediumGrey">Total spent: ${totalSpent}</p>
      </div>

      <div className="flex flex-col gap-6">
        {trackers &&
          trackers.map((tracker) => {
            const trackerTotal = getTrackerTotal(tracker.categoryId);
            const trackerPercentage = getPercentage(
              trackerTotal,
              tracker.budget
            );

            return (
              <div key={tracker.categoryId}>
                <p>{getCategoryName(tracker.categoryId)}</p>
                <p>${trackerTotal}</p>
                <ProgressBar width={trackerPercentage} />
              </div>
            );
          })}
      </div>
    </section>
  );
};
