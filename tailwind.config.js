/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        spectral: ['var(--font-spectral)'],
        astloch: ['var(--font-astloch)'],
        sourcesans3: ['var(--font-sourcesans3)'],
      },
    },
  },
  plugins: [],
}
