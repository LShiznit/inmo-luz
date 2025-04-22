import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ofelia: ["Ofelia-Display", "sans-serif"],
        avenir: ["Avenir", "sans-serif"],
      },
    },
    screens: {
      "2xs": "400px", // Custom breakpoint
      xs: "480px", // Custom breakpoint
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};

export default config;
