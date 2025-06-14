
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        border: '#003135',
        input: '#024950',
        ring: '#0FA4AF',
        background: '#003135', // deep teal
        foreground: '#AFDDE5', // pale cyan for text-foreground
        primary: {
          DEFAULT: '#024950', // teal
          foreground: '#AFDDE5', // use pale cyan for on-primary
        },
        card: {
          DEFAULT: '#024950', // teal (matching primary)
          foreground: '#AFDDE5'
        },
        secondary: {
          DEFAULT: '#AFDDE5', // pale cyan
          foreground: '#003135', // for on-secondary
        },
        destructive: {
          DEFAULT: '#964734', // brick orange
          foreground: '#AFDDE5'
        },
        muted: {
          DEFAULT: '#AFDDE5',
          foreground: '#024950'
        },
        accent: {
          DEFAULT: '#0FA4AF', // vivid cyan
          foreground: '#003135', // deep teal text on accent
        },
        popover: {
          DEFAULT: '#AFDDE5',
          foreground: '#003135'
        },
        sidebar: {
          DEFAULT: '#003135',
          foreground: '#AFDDE5',
          primary: '#024950',
          'primary-foreground': '#AFDDE5',
          accent: '#0FA4AF',
          'accent-foreground': '#003135',
          border: '#024950',
          ring: '#0FA4AF'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s cubic-bezier(0.4,0,0.2,1) both',
        'scale-in': 'scale-in 0.5s ease both',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

