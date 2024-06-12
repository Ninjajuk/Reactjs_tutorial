/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Button Colors
        buttonPrimary: "#3498db",
        buttonSecondary: "#2ecc71",
        buttonDanger: "#e74c3c",
        buttonWarning: "#f39c12",

        // Theme Background Colors
        themeLight: "#ffffff",
        themeDark: "#333333",
        themePrimary: "#f8f9fa",
        themeSecondary: "#ecf0f1",

        // Text Colors
        textPrimary: "#2c3e50",
        textSecondary: "#95a5a6",
        textHighlight: "#e67e22",
        textMuted: "#7f8c8d",
      },
    },
  },
  plugins: [],
};
