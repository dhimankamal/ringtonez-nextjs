module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito']
      },
      colors: {
        tonez: {
          transparent: 'transparent',
          current: 'currentColor',
          white: '#ffffff',
          blue: '#052341',
          orange: '#fc8d26'
        }
      }
    }
  },
  plugins: [],
  variants: {
    width: ["responsive", "hover", "focus"]
}
}
