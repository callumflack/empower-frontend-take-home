import { useQuery } from '@tanstack/react-query';
import { api } from './types';
import { Transaction } from '@/components/Trackers/types';

export const GET_TRANSACTIONS = 'transactions';

export const useGetTransactions = () => {
  const fetchTransactions = async () => {
    const { data } = await api.transactions.get();
    return data as Transaction[];
  };

  return useQuery<Transaction[], Error>({
    queryKey: [GET_TRANSACTIONS],
    queryFn: fetchTransactions
  });
};
