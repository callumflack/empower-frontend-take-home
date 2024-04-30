import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { categories, transactions } from "./mockData";

const app = new Elysia()
  .use(cors())
  .get("/transactions", () => {
    return transactions;
  })
  .get("/categories", () => {
    return categories;
  })
  .listen(3000);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
