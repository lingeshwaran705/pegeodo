module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "roboto-slab": ["Roboto Slab", "serif"],
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      us: "420px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1400px",
    },
    extend: {
      boxShadow: {
        "3xl": "1px 4px 10px 0 rgba(0,0,0,0.1)",
        "3xlr": "-1px 4px 10px 0 rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
