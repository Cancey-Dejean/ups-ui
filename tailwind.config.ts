import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "container-desktop": "1220px",
        "container-mobile": "1220px",
      },
      screens: {
        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px" },
        // => @media (min-width: 768px) { ... }

        lg: { min: "992px" },
        // => @media (min-width: 1024px) { ... }

        xl: { min: "1200px" },
        // => @media (min-width: 1200px) { ... }

        "2xl": { min: "1400px" },
        // => @media (min-width: 1400px) { ... }
      },
    },
  },
  plugins: [],
}
export default config
