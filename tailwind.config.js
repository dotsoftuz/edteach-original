module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'false',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
    extend: {
      animation: {
        wiggle1: 'wiggle1 10s linear infinite',
        wiggle2: 'wiggle2 6s linear infinite',
        wiggle3: 'wiggle3 14s linear infinite',
      },
      keyframes: {
        wiggle1: {
          '0%, 100%': {
            transform: 'translateY(40px)',
          },
          '50%': { transform: 'translateY(0)' },
        },
        wiggle2: {
          '0%, 100%': {
            transform: 'translateY(20px)',
          },
          '50%': { transform: 'translateY(0)' },
        },
        wiggle3: {
          '0%, 100%': {
            transform: 'translateY(40px)',
          },
          '50%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('kutty')],
};
