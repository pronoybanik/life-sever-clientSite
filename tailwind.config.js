/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

// tailwind.config.js

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: [
//       {
//         whitebg: {
//           ...require("daisyui/src/colors/themes")["[data-theme=light]"],
//           "base-100": "#F8F8F8", // sets base background to white
//         },
//       },
//     ],
//   },
// };

