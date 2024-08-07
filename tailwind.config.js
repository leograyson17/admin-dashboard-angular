/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
    './node_modules/preline/preline.js',

  ],
  
  theme: {
    extend: {},
  }, 
  plugins: [
    require('flowbite/plugin')({
        charts: true,
    }),
    require('preline/plugin'),

    
  ]
}

