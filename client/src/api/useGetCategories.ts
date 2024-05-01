import { useQuery } from '@tanstack/react-query';
import { api } from './types';
import { Category } from '@/components/Trackers/types';

export const GET_CATEGORIES = 'categories';

export const useGetCategories = () => {
  const fetchCategories = async () => {
    const { data } = await api.categories.get();
    return data as Category[];
  };

  return useQuery<Category[], Error>({
    queryKey: [GET_CATEGORIES],
    queryFn: fetchCategories
  });
};
