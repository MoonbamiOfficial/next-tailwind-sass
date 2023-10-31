import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      

    },
  },
  plugins: [],
}
export default config
