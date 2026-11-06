/** HHCS brand: navy and gold. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 50: '#F2F6FB', 100: '#E3EBF5', 700: '#1C4E8F', 800: '#123B73', 900: '#0B2D5C', 950: '#061A36' },
        gold: { 100: '#FFF4D1', 300: '#FFD966', 400: '#FFC72C', 500: '#F2B705', 700: '#8A6400' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
