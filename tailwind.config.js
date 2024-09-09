/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        ios: [
          '-apple-system', // iOS and macOS system font
          'BlinkMacSystemFont', // For Chrome on macOS
          '"Segoe UI"', // For Windows
          'Roboto', // For Android
          '"Helvetica Neue"', // Fallback for older macOS
          'Arial', // Fallback for older Windows
          'sans-serif' // Generic fallback
        ],
      },
    },
  },
  plugins: [],
}
