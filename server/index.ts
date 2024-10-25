import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { accounts, categories, transactions } from "./mockData";
import { spendTrackers } from "./mockSpendTrackers";

const app = new Hono();

app
  .get("/accounts", (c) => {
    return c.json(accounts);
  })
  .get("/categories", (c) => {
    return c.json(categories);
  })
  .get("/transactions", (c) => {
    return c.json(transactions);
  })
  .get("/trackers", (c) => c.json(spendTrackers));

const port = 3001;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
