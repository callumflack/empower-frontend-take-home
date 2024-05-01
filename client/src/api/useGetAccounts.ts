import { useQuery } from '@tanstack/react-query';
import { api } from './types';

export const GET_ACCOUNTS = 'accounts';

export const useGetAccounts = () => {
  const fetchAccounts = async () => {
    const { data } = await api.accounts.get();
    return data;
  };

  return useQuery<any, Error>({
    queryKey: [GET_ACCOUNTS],
    queryFn: fetchAccounts
  });
};
