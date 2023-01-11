/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,stories.tsx}'],
  theme: {
    extend: {
      width: {
        tiny: '2px',
        field: '32.6rem',
        90: '90%',
        95: '95%',
      },
      minWidth: {
        button: '8rem',
      },
      backgroundColor: {
        black: '#333333',
      },
      textColor: {
        black: '#333333',
      },
      padding: {
        badge: '2px',
      },
      colors: {
        solitude: '#f2f4f7',
        gainsboro: '#d8dbe0',
        russian: '#08081b',
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        sm: '4px',
      },
    },
  },
  plugins: [],
};
