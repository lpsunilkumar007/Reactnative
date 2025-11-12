/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        white: "rgba(255, 255, 255, 1)",
        primaryColor: "#009281",
        secondaryBg: "rgba(230, 244, 242, 1)",
        neutralColor: "rgba(14, 13, 57, 1)",
        bodyText: "#454567",
        borderColor: "#c3c3ce",
      },
    },
  },
  plugins: [],
};
