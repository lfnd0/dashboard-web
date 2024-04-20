import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'my-color': '#A9A9A9'
      }
    },
  },
  plugins: [],
};

export default config;
