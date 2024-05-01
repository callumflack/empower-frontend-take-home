import { useGetCategories } from '@/api/useGetCategories';
import { useGetTransactions } from '@/api/useGetTransactions';

export const Trackers = () => {
  const { data: transactions } = useGetTransactions();
  const { data: categories } = useGetCategories();

  console.log(transactions, categories);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">Trackers</h1>
        <p className="text-mediumGrey">Weekly budget:</p>
        <p className="text-mediumGrey">Total spent:</p>
      </div>
    </div>
  );
};
