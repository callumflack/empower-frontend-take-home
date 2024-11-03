import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import axios from "redaxios";
import { fetchAccounts } from "../app/queries";
import type { Account } from "@server/types";

vi.mock("redaxios");

describe("fetchAccounts", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch accounts successfully", async () => {
    const mockAccounts: Account[] = [
      /*...*/
    ];

    (axios.get as Mock).mockResolvedValue({
      data: mockAccounts,
    });

    const accounts = await fetchAccounts();

    expect(axios.get).toHaveBeenCalledWith("http://127.0.0.1:3001/accounts");
    expect(accounts).toEqual(mockAccounts);
  });

  it("should handle fetch error", async () => {
    (axios.get as Mock).mockRejectedValue(new Error("Network Error"));

    await expect(fetchAccounts()).rejects.toThrow("Failed to fetch accounts");
  });
});
