import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { accounts, categories, transactions } from "./mockData";
import { Account } from "../client/src/components/Accounts/types";
import { Transaction } from "../client/src/api/types";

const app = new Elysia()
  .use(cors())
  .get("/transactions", () => {
    const result: Transaction[] = transactions.map((x) => ({
      id: x.transaction_id,
      accountId: x.account_id,
      amount: x.amount,
      authorizedDate: x.authorized_date,
      category: x.category,
      categoryId: x.category_id,
      date: x.date,
      logoUrl: x.logo_url,
      merchantName: x.merchant_name,
      pending: x.pending,
      personalFinanceCategory: x.personal_finance_category,
      transactionType: x.transaction_type,
    }));

    return result;
  })
  .get("/categories", () => {
    return categories;
  })
  .get("/accounts", () => {
    const result: Account[] = accounts.map((x) => ({
      id: x.account_id,
      available: x.balances.available,
      current: x.balances.current,
      currencyCode: x.balances.iso_currency_code,
      lastFour: x.mask,
      limit: x.balances.limit,
      name: x.name,
      officialName: x.official_name,
      subtype: x.subtype,
      type: x.type,
    }));

    return result;
  })
  .listen(3000);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
