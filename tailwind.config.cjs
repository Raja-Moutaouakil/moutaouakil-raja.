module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: '#ff6b6b',
        brandAccent: '#ffa6a6'
      },
      boxShadow: {
        'brand-glow': '0 8px 32px -6px rgba(255,107,107,0.45)'
      }
    }
  },
  plugins: []
}
