// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   presets: [require('./tailwind-preset.js')],
//   content: [
//     './app/**/*.{js,ts,jsx,tsx}',
//     './app/**/**/*.{js,ts,jsx,tsx}',
//     './src/**/*.{js,ts,jsx,tsx}',
//     './src/**/**/*.{js,ts,jsx,tsx}',
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// tailwind.config.js
// import preset from "./tailwind-preset.js";

// /** @type {import('tailwindcss').Config} */
// export default {
//   presets: [preset],
// };

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./tailwind-preset.js')],
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
       fontFamily: {
        futura: ['Bungee', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      textShadow: {
        sm: '0 1px 10px var(--tw-shadow-color)',
        DEFAULT: '0 2px 10px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      keyframes: {
        draw: {
          '50%': { strokeDashoffset: '0' },
        },
        fadeIn: {
          '0%': { filter: 'blur(40px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        fadeInOut: {
          '0%': { filter: 'blur(40px)', opacity: '0' },
          '50%': { filter: 'blur(0)', opacity: '1' },
          '100%': { filter: 'blur(40px)', opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out 1',
        fadeInFast: 'fadeIn 1s ease-in-out 1',
        fadeInOutSlow: 'fadeInOut 3s ease-in-out 1',
        path: 'draw 3.5s infinite',
      },
    },
  },
};

