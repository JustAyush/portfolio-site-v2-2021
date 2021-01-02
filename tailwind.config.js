module.exports = {
  purge: {
    enabled: false,
    content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'], 
  },
  darkMode: 'media', // 'media' or 'class'
  theme: {
    fontFamily: {
      'noto': ['"Noto Sans TC"', 'sans'],
      'mono': ['Inconsolata', 'monospace']
    },
    extend: {
      colors: {
        bgColor: '#171C28',
        primary: '#007bff',
        text: '#ffffff',
        textLight: '#afafbf'
      },
      fontSize: {
        '4.5xl': '2.5rem'
      },
      lineHeight: {
        '3rem': '3rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
