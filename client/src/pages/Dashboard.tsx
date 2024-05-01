import { useGetAccounts } from '@/api/useGetAccounts';
import { useGetCategories } from '@/api/useGetCategories';
import { useGetTransactions } from '@/api/useGetTransactions';

export const Dashboard = () => {
  const { data: transactions } = useGetTransactions();
  const { data: categories } = useGetCategories();
  const { data: accounts } = useGetAccounts();
  console.log('transactions data:', transactions);
  console.log('categories data:', categories);
  console.log('accounts data:', accounts);

  return (
    <div>
      {/* authenticated user i.e. {user.firstName} */}
      <h1>Welcome Frankie</h1>
    </div>
  );
};
