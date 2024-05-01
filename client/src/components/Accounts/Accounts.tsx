import { useGetAccounts } from '@/api/useGetAccounts';
import { ChevronRightIcon, PlusIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

export const Accounts = () => {
  const { data: accounts } = useGetAccounts();
  console.log('accounts data:', accounts);
  const getTotal = () =>
    accounts?.reduce((a, b) => a + b.current, 0).toFixed(2);

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">All accounts</h1>
          <p className="text-mediumGrey">Total: ${getTotal()}</p>
        </div>

        <button className="h-min rounded-full bg-black p-2 text-white">
          <PlusIcon />
        </button>
      </div>
      <ul
        role="list"
        className="mt-4 divide-y divide-lightGrey border-b border-t border-lightGrey "
      >
        {accounts &&
          accounts.map((account) => (
            <li key={account.id} className="hover:text-empowerPinkDark">
              <Link to={`/accounts/${account.id}`}>
                <div className="flex items-center justify-between gap-4 p-6">
                  <div className="flex flex-col">
                    <p className="font-semibold">{account.name}</p>
                    <p className="text-mediumGrey text-sm first-letter:uppercase">
                      {account.subtype}
                      <span className="px-1">&#183;</span>
                      {account.lastFour}
                    </p>
                  </div>

                  <div className=" flex gap-6">
                    <p className="text-sm text-black">${account.current}</p>
                    <ChevronRightIcon
                      className="text-mediumGrey h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
};
