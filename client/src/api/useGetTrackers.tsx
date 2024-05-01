import { useQuery } from '@tanstack/react-query';
import { api } from './types';
import { Tracker } from '@/components/Trackers/types';

export const GET_TRACKERS = 'trackers';

export const useGetTrackers = () => {
  const fetchTrackers = async () => {
    const { data } = await api.trackers.get();
    return data as Tracker[];
  };

  return useQuery<Tracker[], Error>({
    queryKey: [GET_TRACKERS],
    queryFn: fetchTrackers
  });
};
