import type { Config } from "tailwindcss";

export default {
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
        deepTeal: '#16232E',
        yellowone: '#CC8D1A',
        geenshot: "#164C45",
        yellowtwo: '#E3C75F',
      },
    },
  },
  plugins: [],
} satisfies Config;
