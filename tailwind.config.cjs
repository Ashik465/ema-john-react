/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
       mytheme: {
        
"primary": "#1C2B35",
        
"secondary": "#0afc62",
        
"accent": "#0372b7",
        
"neutral": "#2F253C",
        
"base-100": "#FCFCFD",
        
"info": "#95B6E4",
        
"success": "#10846E",
        
"warning": "#EFBD1A",
        
"error": "#F73008",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
