/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     './src/views/*.{pug,html}',
     './src/*.js',

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

