/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: {
      "nice-sky-blue": "#2563eb",
      "nice-amber": "#d97706" 
    },},
  },
  plugins: [require("daisyui")],
};

