import { Accounts } from '@/components/Accounts';
import { Trackers } from '@/components/Trackers/Trackers';

export const Dashboard = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <Accounts />
      <Trackers />
    </div>
  );
};
