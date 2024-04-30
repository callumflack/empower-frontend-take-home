import { useGetCategories } from '@/api/useGetCategories';
import { useGetTransactions } from '@/api/useGetTransactions';

export const Dashboard = () => {
  const { data: transactions } = useGetTransactions();
  const { data: categories } = useGetCategories();
  console.log('transactions data:', transactions);
  console.log('categories data:', categories);

  return (
    <div>
      <h1>Overview</h1>
    </div>
  );
};
