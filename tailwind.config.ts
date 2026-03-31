import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0f2742",
        steel: "#2f6fab",
        mist: "#f3f5f8",
        ok: "#1f9d55",
        warn: "#e6a700",
        danger: "#d64545",
      },
    },
  },
  plugins: [],
};

export default config;
