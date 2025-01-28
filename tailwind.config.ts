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
        deepTeal: '#343D46',
        yellowone: '#F46838',
        geenshot: "#164C45",
        yellowtwo: '#E3C75F',
        selectedB: 'rgba(52, 61, 70, 0.5)',
        calipso: "#09a698",
        reactColor: "#61DAFB",
        typeScriptColor: "#3178C6",
      },
    },
  },
  plugins: [],
} satisfies Config;
