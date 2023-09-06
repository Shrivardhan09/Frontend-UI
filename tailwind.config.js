/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary-100": "#EEEBFE",
        "primary-300": "#FEF6F1"
      }
    },
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    borderRadius: {
      'full': '9999px',
      'large': '90%',
      'md': '0.375rem',
      'lg': '0.5rem',
    }
  },
  plugins: [],
}
