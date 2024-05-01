import { useQuery } from '@tanstack/react-query';
import { Account } from '@/components/Accounts/types';
import { api } from './types';

export const GET_ACCOUNTS = 'accounts';

export const useGetAccounts = () => {
  const fetchAccounts = async () => {
    const { data } = await api.accounts.get();
    return data as Account[];
  };

  return useQuery<Account[], Error>({
    queryKey: [GET_ACCOUNTS],
    queryFn: fetchAccounts
  });
};
