/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 84% 4.9%)',
        muted: {
          DEFAULT: 'hsl(210 40% 96%)',
          foreground: 'hsl(215.4 16.3% 46.9%)',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: 'hsl(222.2 84% 4.9%)',
        },
        border: 'hsl(214.3 31.8% 91.4%) ',
        primary: {
          DEFAULT: '#1A73E8',
          foreground: '#ffffff',
        },
        success: '#16a34a',
        danger: '#ef4444',
        warning: '#f59e0b',
        sidebar: '#1f2937',
      },
      borderRadius: {
        xl: '16px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
