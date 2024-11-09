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
        purtle: {

          // 100:'#4F3A6F',
          // 200:'#4F3A6F',
          // 300:'#4F3A6F',
          400:'#4F3A6F',
          500:'#4F3A6F',
          200:'#4F3A6F',
          700:'#4F3A6F',
          // 800:'#4F3A6F',

        },
        grey: {
          800: '#6A6A6A',
        }

      },
    },
  },
  plugins: [],
};
export default config;
