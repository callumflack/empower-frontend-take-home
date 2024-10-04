import { Account, Transaction } from "./types";

export const accounts: Account[] = [
  {
    account_id: "1",
    balances: {
      available: 110.94,
      current: 110.94,
      iso_currency_code: "USD",
    },
    name: "Plaid Checking",
    official_name: "Plaid Gold Standard 0% Interest Checking",
    subtype: "checking",
    type: "depository",
  },
  {
    account_id: "2",
    balances: {
      available: 2000.34,
      current: 2028.34,
      iso_currency_code: "USD",
    },
    name: "Demo Bank",
    official_name: "Demo Bank Financial Inc. Spending Account",
    subtype: "savings",
    type: "depository",
  },
];

export const transactions: Transaction[] = [
  {
    account_id: "1",
    amount: 28.34,
    iso_currency_code: "USD",
    category_id: "1",
    date: "2024-04-30",
    datetime: "2024-04-30T15:10:09Z",
    authorized_date: "2024-04-29",
    authorized_datetime: "2024-04-29T08:01:58Z",
    name: "Dd Doordash Burgerking",
    merchant_name: "Burger King",
    merchant_entity_id: "mVrw538wamwdm22mK8jqpp7qd5br0eeV9o4a1",
    logo_url: "https://plaid-merchant-logos.plaid.com/burger_king_155.png",
    website: "burgerking.com",
    payment_channel: "online",
    pending: true,
    pending_transaction_id: null,
  },
  {
    account_id: "2",
    amount: 72.1,
    iso_currency_code: "USD",
    category_id: "2",
    date: "2024-04-29",
    datetime: "2024-04-29T11:01:01Z",
    authorized_date: "2024-04-28",
    authorized_datetime: "2024-04-28T10:34:50Z",
    name: "PURCHASE WM SUPERCENTER #1700",
    merchant_name: "Walmart",
    merchant_entity_id: "O5W5j4dN9OR3E6ypQmjdkWZZRoXEzVMz2ByWM",
    logo_url: "https://plaid-merchant-logos.plaid.com/walmart_1100.png",
    website: "walmart.com",
    payment_channel: "in store",
    pending: false,
    pending_transaction_id: "no86Eox18VHMvaOVL7gPUM9ap3aR1LsAVZ5nc",
  },
];

export const categories = [
  {
    id: "1",
    name: "Food",
  },
  {
    id: "2",
    name: "Shopping",
  },
  {
    id: "3",
    name: "Education",
  },
  {
    id: "4",
    name: "Transportation",
  },
  {
    id: "5",
    name: "Groceries",
  },
];
