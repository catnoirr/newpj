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
          400: '#888888',
           
        },
        purcel: {
          800: '#341266',
          
        },
        grayis: {
          400: '#878C91',
          
        },
        blue: {
          600: '#341266',
          
        },
        beige: {
          400: '#FFF6ED',
          
        },
        green: {
          100: '#34B9662B'
          
        },
        grays: {
          100: '#F2F0F5'
          
        },

      },
    },
  },
  plugins: [],
};
export default config;
