/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        moveLeftRight: "moveLeftRight 4s ease-in-out infinite",
        reveal: "reveal 3s ease-in-out infinite",
      },
      keyframes: {
        moveLeftRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20px)" },
          "100%": { transform: "translateX(0)" },
        },
        reveal: {
          "0%": { opacity: "0" },
          "10%": { opacity: "1" },
          "20%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
