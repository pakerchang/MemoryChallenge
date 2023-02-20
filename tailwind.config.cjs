/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const MyClass = plugin(({ addUtilities }) =>
  addUtilities({
    ".custom-rotate3d-y-180": {
      transform: "rotateY(180deg)",
    },
    ".custom-preserve-3d": {
      transformStyle: "preserve-3d"
    },
    ".custom-perspective": {
      perspective: "10000px"
    },
    ".custom-backface-hidden": {
      backfaceVisibility: "hidden"
    }
  })
);

module.exports = {
  content: ["./src/**/*.{vue,ts,js}"],
  theme: {
    extend: {},
  },
  plugins: [MyClass],
};
