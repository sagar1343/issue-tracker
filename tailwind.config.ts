import type { Config } from "tailwindcss";

const config: Config = {
  daisyui: {
    themes:
      [
        {
          mytheme: {
            "primary": "#0466c8",
            "primary-content": "#000a16",
            "secondary": "#e36b00",
            "secondary-content": "#120400",
            "accent": "#0075b5",
            "accent-content": "#d2e3f1",
            "neutral": "#1b0a08",
            "neutral-content": "#ccc7c6",
            "base-100": "#fff8ff",
            "base-200": "#ded8de",
            "base-300": "#beb8be",
            "base-content": "#161516",
            "info": "#00b9ff",
            "info-content": "#000d16",
            "success": "#00ea57",
            "success-content": "#001303",
            "warning": "#f3cd00",
            "warning-content": "#140f00",
            "error": "#ff637f",
            "error-content": "#160306",
          },
        }
      ]

  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
