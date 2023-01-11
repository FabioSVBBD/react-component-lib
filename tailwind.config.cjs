/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,stories.tsx}'],
  theme: {
    extend: {
      minWidth: {
        button: '8rem',
      },
    },
  },
  plugins: [],
};
