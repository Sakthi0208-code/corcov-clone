/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        display: ['Titillium Web', 'sans-serif'],
      },
      colors: {
        corcov: {
          sky: {
            DEFAULT: '#2FC1FF', // Sky Blue primary
            dark: '#08ACF2',    // Hover Sky Blue
          },
          charcoal: '#101218',  // Heading texts
          slate: '#4C5253',     // Body paragraphs
          bglight: '#F3F6F6',   // Faint grey sections
        }
      },
      boxShadow: {
        'tech': '0 10px 30px -15px rgba(47, 193, 255, 0.1)',
        'tech-hover': '0 20px 40px -15px rgba(47, 193, 255, 0.15)',
        'glow': '0 0 20px rgba(47, 193, 255, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
