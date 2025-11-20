/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',
        'primary-dark': '#E85A2B',
        'primary-light': '#FF8558',
      },
    },
  },
  plugins: [],
};
