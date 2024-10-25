import type { Transaction } from "@server/types";

export interface TransactionWithCategory extends Transaction {
  categoryName: string;
}

export interface TransactionGroup {
  accountId: string;
  transactions: TransactionWithCategory[];
  accountName: string;
  accountBalance: number;
}
