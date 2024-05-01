import { useGetAccounts } from '@/api/useGetAccounts';
import { useGetTransactions } from '@/api/useGetTransactions';
import { useParams } from 'react-router-dom';

export const AccountDetails = () => {
  const { data: accounts } = useGetAccounts();
  // this should probably be get transactions by id
  const { data: transactions } = useGetTransactions();
  const params = useParams();
  const account = accounts?.find((x) => x.id === params.id);

  return (
    <div>
      <h1 className="text-2xl font-semibold">{account?.name}</h1>
      render account details here...
    </div>
  );
};
