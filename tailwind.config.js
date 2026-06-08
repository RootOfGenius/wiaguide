/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/nextra/dist/**/*.js',
    './node_modules/nextra-theme-docs/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // Can customize theme colors here if needed
      },
    },
  },
  plugins: [],
}
