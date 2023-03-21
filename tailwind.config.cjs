/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dm: 'DM Serif Display',
        public: 'Public Sans',
      },
      colors: {
        pink: {
          dark: '#BA4270',
          charm: '#DA6D97',
        },
        blue: {
          sanJuan: '#36536B',
          sanJuanLight: '#6C8294',
          mirage: '#1B262F',
        },
        white: {
          link: '#FBFCFE',
        },
      },
      backgroundImage: {
        mobile: "url('./public/about/image-team-members-mobile.jpg')",
        tablet: "url('./public/about/image-team-members-tablet.jpg)",
        desktop: "url('./public/about/image-team-members.jpg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
