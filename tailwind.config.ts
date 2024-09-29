import type { Config } from "tailwindcss";

const config: Config = {
  daisyui: {
    themes: ['corporate'],
  },

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        custom: "calc(100vh - 133px)"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography'),],
};
export default config;
