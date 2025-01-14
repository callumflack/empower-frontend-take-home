import type {
  Account,
  Category,
  Transaction,
  SpendTracker,
} from "@server/types";
import { queryOptions } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/start";
import axios from "redaxios";

// NB! We're using TS Start server functions (internal SSR to the client) to fetch from the server. Might be issues with external HTTP access from the TS Start server
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

export const fetchTrackers = createServerFn("GET", async () => {
  console.info("Fetching trackers...");
  return axios
    .get<SpendTracker[]>(`${API_BASE_URL}/trackers`)
    .then((r) => r.data)
    .catch(() => {
      throw new Error("Failed to fetch trackers");
    });
});

export const trackersQueryOptions = () =>
  queryOptions({
    queryKey: ["trackers"],
    queryFn: () => fetchTrackers(),
  });
