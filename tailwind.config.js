/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        kopiko: {
          50: '#fffbf5',
          100: '#fcf3e6',
          200: '#f8e4cb',
          300: '#f1cea3',
          400: '#e5ab6b',
          500: '#d98232',  /* Pure Kopiko rich caramel */
          600: '#be6320',  /* Roasted caramel */
          700: '#9b4719',  /* Rich roasted coffee */
          800: '#7e3919',  /* Deep espresso */
          900: '#673017',  /* Dark roast */
          950: '#381609',  /* Darkest bean */
        },
        espresso: {
          700: '#3c2016',
          800: '#2c160e',
          850: '#22110a',
          900: '#190d07',
          950: '#110704',
          980: '#0c0503',
        },
        amberGold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'droplet': 'dropletFloat 5s ease-in-out infinite',
        'ripple-slow': 'ripple 3s ease-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        dropletFloat: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-8px) scale(1.03)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'kopiko-glow': '0 0 40px -5px rgba(217, 119, 6, 0.25)',
        'kopiko-glow-lg': '0 0 60px -10px rgba(234, 88, 12, 0.3)',
        'water-drop': 'inset 2px 2px 4px rgba(255,255,255,0.7), inset -2px -2px 4px rgba(0,0,0,0.25), 0 8px 16px -2px rgba(217, 119, 6, 0.15)',
        'water-drop-dark': 'inset 2px 2px 4px rgba(255,255,255,0.25), inset -2px -2px 4px rgba(0,0,0,0.6), 0 8px 20px -2px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
