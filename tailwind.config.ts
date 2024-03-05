import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-positive": "rgb(60, 187, 180)",
        "yellow-negative": "rgb(249, 173, 29)",
        "dark-background": "rgba(0, 0, 0, 0.4)",
        "darker-background": "rgba(0, 0, 0, 0.6)",
        "darker-gray": "rgb(51, 51, 51)",
        "dark-gray": "rgb(70, 70, 70)",
        "light-gray": "rgb(235, 235, 235)",
        "light-gray-background": "rgba(48, 48, 48, 0.6)",
        "light-background": "rgba(255, 255, 255, 0.4)",
        "lighter-background": "rgba(255, 255, 255, 0.8)",
        white: "rgb(255, 255, 255)",
      },
    },
  },
  plugins: [],
}
export default config
