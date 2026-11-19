import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "vercel",
  },
  vite: {
    server: {
      port: 3000,
      strictPort: true,
    },
  },
});
