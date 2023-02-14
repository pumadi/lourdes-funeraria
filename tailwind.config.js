/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#174580",
        "blue-light": "#1d56a0",
        "blue-dark": "#123766",
        "whatsapp": "#25d366",
        "whatsapp-dark": "#128c7e",
        "black": "#121212"
      }
    },
  },
  plugins: [],
}
