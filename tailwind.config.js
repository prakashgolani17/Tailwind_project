

/** @type {import('tailwindcss').Config} */
module.exports = {

  prefix: 'tw-',

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      xxsm: '150px',
      xsm: '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',

    },

    extend: {

    },
  },
  plugins: [],
}

