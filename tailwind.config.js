/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./flaskr/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'light': {
           'primary' : '#2633e8',
           'primary-focus' : '#0d1ad9',
           'primary-content' : '#ffffff',

           'secondary' : '#f48e2f',
           'secondary-focus' : '#e17714',
           'secondary-content' : '#ffffff',

           'accent' : '#1ed9aa',
           'accent-focus' : '#02b185',
           'accent-content' : '#ffffff',

           'neutral' : '#3b424e',
           'neutral-focus' : '#2a2e37',
           'neutral-content' : '#ffffff',

           'base-100' : '#ffffff',
           'base-200' : '#f9fafb',
           'base-300' : '#ced3d9',
           'base-content' : '#1e2734',

           'info' : '#1c92f2',
           'success' : '#009485',
           'warning' : '#ff9900',
           'error' : '#f41f43',

          '--rounded-box': '1rem',          
          '--rounded-btn': '2rem',        
          '--rounded-badge': '1rem',      

          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       

          '--btn-text-case': 'capitalize',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '1px',            
        },
      },
    ],
  },
}

