/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
   
    extend: {
      colors:{
        "blackwish":"rgb(0,0,0)",
       
      
      },
    },
  },
  plugins: [ require('flowbite/plugin')],
}

