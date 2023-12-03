/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        xsm:'100px',
        sm: '575px',
        md: '765px',
        lg: '1000px',
        xl: '1200px',
        // 2xl: '1536px',
      }
    },
  },
  plugins: [],
}

