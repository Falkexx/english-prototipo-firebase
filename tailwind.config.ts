import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/modal.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors:{

        "text-primary":"#1E3A8A",
        "text-secundary":"#F14968",
        "bg-primary":"#F14968",
      },
      boxShadow: {
      "buttonSubmit": "4px 8px 24px 0px rgba(241, 73, 104, 0.25)"
      }
    },
  },
  plugins: [nextui()],
};
export default config;
