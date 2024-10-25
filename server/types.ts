export interface Account {
  account_id: string;
  balances: {
    available: number;
    current: number;
    iso_currency_code: "USD";
  };
  name: string;
  official_name: string;
  subtype: string;
  type: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Transaction {
  account_id: string;
  amount: number;
  iso_currency_code: "USD";
  category_id: string;
  date: string;
  merchant_name: string;
  merchant_id: string;
  logo_url: string;
  website: string;
  payment_channel: string;
  pending: boolean;
}

export interface SpendTracker {
  id: string;
  name: string;
  limit: number;
  // category: string;
  category_id: string;
}

export interface SpendTrackerWithTransactions extends SpendTracker {
  category?: string;
  transactions?: Transaction[];
  transactionCount?: number;
  totalCost?: number;
  isOverLimit?: boolean;
}
