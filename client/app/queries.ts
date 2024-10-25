import type { Account, Category, Transaction } from "@server/types";
import { queryOptions } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/start";
import axios from "redaxios";

// NB! We're using server functions to fetch from the server. Might be issues with HTTP access from the TS Start server.
const API_BASE_URL = "http://127.0.0.1:3001";

export const fetchAccounts = createServerFn("GET", async () => {
  return axios
    .get<Account[]>(`${API_BASE_URL}/accounts`)
    .then((r) => r.data)
    .catch(() => {
      throw new Error("Failed to fetch accounts");
    });
});

export const accountsQueryOptions = () =>
  queryOptions<Account[]>({
    queryKey: ["accounts"],
    queryFn: () => fetchAccounts(),
  });

export const fetchCategories = createServerFn("GET", async () => {
  return axios
    .get<Category[]>(`${API_BASE_URL}/categories`)
    .then((r) => r.data)
    .catch(() => {
      throw new Error("Failed to fetch transactions");
    });
});

export const categoriesQueryOptions = () =>
  queryOptions<Category[]>({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });

export const fetchTransactions = createServerFn("GET", async () => {
  return axios
    .get<Transaction[]>(`${API_BASE_URL}/transactions`)
    .then((r) => r.data)
    .catch(() => {
      throw new Error("Failed to fetch transactions");
    });
});

export const transactionsQueryOptions = () =>
  queryOptions({
    queryKey: ["transactions"],
    queryFn: () => fetchTransactions(),
  });
