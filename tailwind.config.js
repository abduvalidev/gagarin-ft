/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'onest': ['Onest', 'sans-serif']
      },
      fontSize: {
        '15': ['15px', '1.1956rem'],
        '17': ['17px', '1.3813rem'],
        '18': ['18px', '1.575rem'],
        '22': ['22px', '1.875rem'],
        '30': ['30px', '2.0625rem'],
        '40': ['40px', '2.75rem'],
        '50': ['3.125rem', '3.4375rem'],
      },
      colors: {
        brand: {
          gray: '#E4EEF4',
          blue: '#2A72FE',
        }
      },
      spacing: {
        'teen': '0.625rem',
        '15': '0.9375rem',
        '30': '1.875rem',
        '38': '2.375rem',
        '159': '9.9375rem',
        '165': '10.3125rem',
        '360': '22.5rem',
      },
      maxWidth: {
        'base': '90rem',
        'base-2': '77.75rem',
        'base-3': '75.625rem',
      },
      borderRadius: {
        'teen': '0.625rem',
      }
    },
  },
  plugins: [],
}

