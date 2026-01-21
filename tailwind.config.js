/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard'],
        brand: ['Pretendard'],
      },
      maxWidth: {
        app: '500px',
      },
    },
  },
  plugins: [],
};
