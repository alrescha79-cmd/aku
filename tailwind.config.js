module.exports = {
  content: ['./asset/**/*.{html,js}','index.html', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    extend: {
      animation: {
        'wiggle': 'wiggle 1s linear infinite',
        'wiggle-slow': 'wiggle1 4s linear infinite',
        'wiggle-supper-slow': 'wiggle2 5s linear infinite',
        'bounce-slow': 'bounce1 1s infinite',
        'bounce-hard': 'bounce2 2s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
        wiggle1: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        wiggle2: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        bounce1: {
          '0%, 100%': { transform: 'translateY(-5%)',
          'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
        },
          '50%': {
          transform: 'translateY(0)',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
        bounce2: {
          '0%, 100%': { transform: 'translateY(-30%)',
          'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
        },
          '50%': {
          transform: 'translateY(30%)',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
      }
    }
  }
}