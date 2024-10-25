import { SpendTracker } from "./types";

// Initial dummy data for spend trackers
export let spendTrackers: SpendTracker[] = [
  {
    id: "1",
    name: "Weekly Groceries",
    limit: 150,
    // category: "Groceries",
    category_id: "5",
  },
  {
    id: "2",
    name: "Monthly Entertainment",
    limit: 200,
    // category: "Shopping",
    category_id: "2",
  },
  {
    id: "3",
    name: "Daily Coffee",
    limit: 50,
    // category: "Food",
    category_id: "1",
  },
];
