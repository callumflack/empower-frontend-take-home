import { useGetCategories } from '@/api/useGetCategories';
import { useGetTransactions } from '@/api/useGetTransactions';
import { Accounts } from '@/components/Accounts';

export const Dashboard = () => {
  const { data: transactions } = useGetTransactions();
  const { data: categories } = useGetCategories();

  return (
    <div className="w-full">
      <Accounts />
    </div>
  );
};
