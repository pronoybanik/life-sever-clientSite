/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
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

