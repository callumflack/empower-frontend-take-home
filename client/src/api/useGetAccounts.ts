import { useQuery } from '@tanstack/react-query';
import { Account } from '@/components/Accounts/types';
import { api } from './types';

export const GET_ACCOUNTS = 'accounts';

export const useGetAccounts = () => {
  const fetchAccounts = async () => {
    const { data } = await api.accounts.get();
    return data as Account[];
    // For each query, I would handle and error case as well
    // throw error if error, return data if not null
  };

  return useQuery<Account[], Error>({
    queryKey: [GET_ACCOUNTS],
    queryFn: fetchAccounts
  });
};
