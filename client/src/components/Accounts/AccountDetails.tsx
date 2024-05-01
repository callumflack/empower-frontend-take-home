import { useGetAccounts } from '@/api/useGetAccounts';
import { useGetTransactions } from '@/api/useGetTransactions';
import { useParams } from 'react-router-dom';

export const AccountDetails = () => {
  const params = useParams();
  const { data: accounts } = useGetAccounts();
  // this should probably be get transactions by id
  // depending on how many transactions there are
  // you could paginate or lazy load
  const { data: transactions } = useGetTransactions();

  const account = accounts?.find((x) => x.id === params.id);

  const accountTransactions = transactions?.filter(
    (x) => x.accountId === account?.id
  );

  return (
    <section>
      <h1 className="text-2xl font-semibold">{account?.name}</h1>
      <div>
        {accountTransactions?.map((transaction) => (
          <div key={transaction.id}>
            <p>{transaction.merchantName}</p>
            render other transaction details...
          </div>
        ))}
      </div>
    </section>
  );
};
