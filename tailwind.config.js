/** @type {import('tailwindcss').Config} */
module.exports = {
    
      content: ["./App.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}","./screens/**/*.{js,ts,tsx}"],
    
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
        primary: {
          50: '#faf7f4',
          100: '#f5eee9',
          500: '#c19d78',
          600: '#a87f5a',
          700: '#866445',
          800: '#644c34',
          900: '#433223',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
        },
        accent: {
          50: '#f2f8f5',
          100: '#e6f1eb',
          500: '#5ca88a',
          600: '#4a8c70',
          700: '#3b705a',
          800: '#2d5444',
          900: '#203830',
        },
      }},
       fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
    },
    plugins: [],
  }
