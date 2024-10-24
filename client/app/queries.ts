import type { Account } from "@server/types";
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
