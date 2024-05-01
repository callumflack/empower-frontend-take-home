export interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  authorizedDate: string;
  category: string[];
  categoryId: string;
  date: string;
  logoUrl: string;
  merchantName: string;
  pending: boolean;
  transactionType: string;
}

export interface Category {
  id: string;
  name: string;
  subCategories: string[];
}

export interface Tracker {
  categoryId: string;
  budget: number;
  percentUsed?: string;
  amountSpent?: number;
}
