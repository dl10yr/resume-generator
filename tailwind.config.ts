import type { Config } from "tailwindcss";

// Tailwind CSS v4: config is optional; keep minimal explicit config
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
