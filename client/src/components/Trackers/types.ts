export interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  authorizedDate: string;
  category: string;
  categoryId: string;
  date: string;
  logoUrl: string;
  merchantName: string;
  pending: boolean;
  personalFinanceCategory: string[];
  transactionType: string;
}
