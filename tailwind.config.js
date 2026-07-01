/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0F',
        navy: '#12121E',
        green: '#39FF14',
        pink: '#FF2D78',
        yellow: '#FFE600',
        text: '#F0EFE8',
        muted: '#6B6B7A',
        border: '#1E1E2E',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
