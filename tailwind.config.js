/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0064FF', 
        success: '#2BC48A',
        danger: '#F04452',
      },
    },
  },
  plugins: [],
};
