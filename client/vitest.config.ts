import { defineConfig } from "vitest/config";
import tsConfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    TanStackRouterVite({
      root: "./app",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom", // Simulates a browser environment
    setupFiles: "./setupTests.ts", // Optional: Global test setup
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
