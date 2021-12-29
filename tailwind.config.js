// todo: check how to organize color

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        red: "#ff0052",
      },
      screens: {
        "max-2xl": { max: "1535px" },
        "max-xl": { max: "1279px" },
        "max-lg": { max: "1024px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "639px" },
      },
      flex: {
        1: "1 1 0%",
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
        6: "6 6 0%",
        7: "7 7 0%",
        8: "8 8 0%",
      },
      fontFamily: {
        sans: ["FreightSansProMedium"],
        display: ["FreightSansProMedium"],
        body: ["FreightSansProMedium"],
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    // ...
  ],
};
