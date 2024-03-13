/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
        basic: {
          'white': '#ffffff',
          'black': '#000000',
        },
        roman: {
          '50': '#fef6f7',
          '100': '#fde8e9',
          '200': '#fccfd1',
          '300': '#f9aeb1',
          '400': '#f37c7e',
          '500': '#e55252',
          '600': '#d75350',
          '700': '#ce312c',
          '800': '#ac302a',
          '900': '#96332c',
          '950': '#5d1a14',
        }
    },
    extend: {
      fontFamily: {
        teko: ['Teko', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}