import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        example: {
          '0%': { backgroundColor: 'red' },
          '100%': { backgroundColor: 'yellow' },
        },
        colorChange: {
          '0%': { color: 'red' },
          '100%': { color: 'yellow' },
        },
      },
      animation: {
        colorChange: 'colorChange 4s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
