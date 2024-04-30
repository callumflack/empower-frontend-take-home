import { useQuery } from '@tanstack/react-query';
import { api } from './types';

export const GET_TRANSACTIONS = 'transactions';

export const useGetTransactions = () => {
  const fetchTransactions = async () => {
    const { data } = await api.transactions.get();
    return data;
  };

  return useQuery<any, Error>({
    queryKey: [GET_TRANSACTIONS],
    queryFn: fetchTransactions
  });
};
