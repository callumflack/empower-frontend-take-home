import { useGetCategories } from '@/api/useGetCategories';
import { useGetTrackers } from '@/api/useGetTrackers';
import { useGetTransactions } from '@/api/useGetTransactions';
import { getPercentage } from '@/utils';
import { ProgressBar } from '../ProgressBar';
import { FormEvent, useEffect, useState } from 'react';
import { AddButton } from '../AddButton';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { Tracker } from './types';

export const Trackers = () => {
  const { data: trackersData } = useGetTrackers();
  const { data: transactions } = useGetTransactions();
  const { data: categories } = useGetCategories();

  const [trackers, setTrackers] = useState(trackersData);
  const [selectedTracker, setSelected] = useState<Tracker | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!trackers) {
      setTrackers(trackersData);
    }
  }, [trackersData]);

  const getWeeklyTotal = () =>
    trackers?.reduce((a, b) => a + b.budget, 0).toFixed(2);
  const weeklyBudget = Number(getWeeklyTotal());

  const getTotalSpent = () =>
    transactions?.reduce((a, b) => a + b.amount, 0).toFixed(2);
  const totalSpent = Number(getTotalSpent());

  const getTrackerTotal = (id: string) =>
    Number(
      transactions
        ?.filter((x) => x.categoryId === id)
        .reduce((a, b) => a + b.amount, 0)
        .toFixed(2)
    );

  const getCategoryName = (id: string) =>
    categories?.find((x) => x.id === id)?.name;

  const trackerOptions = categories?.filter((x) => {
    const foundTracker = trackers?.find((t) => t.categoryId === x.id);
    if (foundTracker) return false;
    return x;
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const result = {
      categoryId: formData.get('category'),
      budget: Number(formData.get('budget'))
    } as Tracker;

    setTrackers((x) => [...(x as Tracker[]), result]);
    setModalOpen(false);
  };

  return (
    <section className="border-light rounded-md border p-6">
      <div className="mb-4 flex justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Trackers</h1>
          <p className="text-mediumGrey">Weekly budget: ${weeklyBudget}</p>
          <p className="text-mediumGrey">Total spent: ${totalSpent}</p>
        </div>

        <AddButton type="button" onClick={() => setModalOpen(true)} />
      </div>

      <div className="flex flex-col gap-6">
        {trackers &&
          trackers.map((tracker) => {
            const trackerTotal = getTrackerTotal(tracker.categoryId);
            const trackerPercentage = getPercentage(
              trackerTotal,
              tracker.budget
            );

            return (
              <div key={tracker.categoryId}>
                <div className="mb-2 flex justify-between">
                  <div>
                    <p>{getCategoryName(tracker.categoryId)}</p>
                    <p className="text-sm text-mediumGrey">
                      {trackerPercentage}%
                    </p>
                  </div>
                  <div className="text-sm">
                    <p>${trackerTotal.toFixed(2)}</p>
                    <p className="text-mediumGrey">of ${tracker.budget}</p>
                  </div>
                </div>
                <ProgressBar width={trackerPercentage} />
              </div>
            );
          })}
      </div>

      <Modal title="Add New Tracker" isOpen={modalOpen} setOpen={setModalOpen}>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <select
            name="category"
            className="w-full rounded-md border border-black bg-transparent px-4 py-2"
          >
            {trackerOptions?.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          <Input
            name="budget"
            className="border-black"
            placeholder="Budget Amount"
            type="number"
          />
          <button
            className="w-min rounded-full bg-black px-6 py-3 text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </Modal>
    </section>
  );
};
