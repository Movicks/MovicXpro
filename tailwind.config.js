/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 1px 10px rgba(0, 0, 0, 0.15)',
      },
      borderWidth: {
        '2': '2px',
      },
      keyframes: {
        breath: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        bounceVertical: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(calc(100vh - 2rem))' }, // Adjusted for bubble size
        },
        bounceVerticalReverse: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(calc(-100vh + 2rem))' }, // Adjusted for bubble size
        },
        bounceHorizontal: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(calc(100vw - 2rem))' }, // Adjusted for bubble size
        },
        bounceHorizontalReverse: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(calc(-100vw + 2rem))' }, // Adjusted for bubble size
        },
      },
      animation: {
        breath: 'breath 3s ease-in-out infinite',
        bounceVertical: 'bounceVertical 5s ease-in-out infinite',
        bounceVerticalReverse: 'bounceVerticalReverse 5s ease-in-out infinite',
        bounceHorizontal: 'bounceHorizontal 5s ease-in-out infinite',
        bounceHorizontalReverse: 'bounceHorizontalReverse 5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }
      });
    }
  ],
}
