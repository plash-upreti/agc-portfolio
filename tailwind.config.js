/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6edf5',
          100: '#ccdaeb',
          200: '#99b5d6',
          300: '#6690c2',
          400: '#336bad',
          500: '#1a365d', // Main primary color
          600: '#152c4a',
          700: '#102138',
          800: '#0a1625',
          900: '#050b13',
        },
        accent: {
          50: '#e6f7f4',
          100: '#ccefe9',
          200: '#99dfd3',
          300: '#66cfbe',
          400: '#33bfa8',
          500: '#00af92', // Main accent color
          600: '#008c75',
          700: '#006958',
          800: '#00463b',
          900: '#00231d',
        },
        charcoal: {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333', // Main charcoal color
          900: '#1a1a1a',
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};