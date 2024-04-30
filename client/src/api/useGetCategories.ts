import { useQuery } from '@tanstack/react-query';
import { api } from './types';

export const GET_CATEGORIES = 'categories';

export const useGetCategories = () => {
  const fetchCategories = async () => {
    const { data } = await api.categories.get();
    return data;
  };

  return useQuery<any, Error>({
    queryKey: [GET_CATEGORIES],
    queryFn: fetchCategories
  });
};
