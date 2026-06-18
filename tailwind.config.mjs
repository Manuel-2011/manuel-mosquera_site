/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF8',
        foreground: '#1A1A2E',
        accent: '#3D5A80',
        muted: '#5C6370',
        border: '#E8E6E1',
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '720px',
        wide: '960px',
      },
    },
  },
  plugins: [],
};
