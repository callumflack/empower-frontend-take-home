import { Hono } from "hono";
import { accounts, categories, trackers, transactions } from "./mockData";

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
  .get("/trackers", (c) => {
    return c.json(trackers);
  });

export default app;
