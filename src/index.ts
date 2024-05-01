import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { accounts, categories, transactions } from "./mockData";
import { Account } from "../client/src/components/Accounts/types";

const app = new Elysia()
  .use(cors())
  .get("/transactions", () => {
    return transactions;
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
