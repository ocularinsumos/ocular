/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        'footer-style': '#FFFFFF',
        'navbar-style': '#007BC7',
        'navbar-style-menu': '#FFFFFF'
      },
      fontSize: {
        'footer-style': '1rem',
        'navbar-style': '1rem',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xxs': '320px',
        'xs': '375px',
        'sm': '425px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: {
          DEFAULT: '#007BC7',  // Main blue color from the logo text
          hover: '#005A9E',    // Darker blue for hover state
          active: '#003F7D',   // Even darker blue for active state
        },
        secondary: {
          DEFAULT: '#A0A0A0',  // Gray/silver color from the metallic parts
          hover: '#8A8A8A',    // Darker gray for hover state
          active: '#707070',   // Darker gray for active state
        },
        accent: {
          lightBlue: '#5EC7FA',  // Light blue from the iris
        },
        background: {
          primary: '#F1F4F7',  // Light background for primary sections
          secondary: '#FFFFFF', // White background for secondary sections
          tertiary: '#E2E8F0',  // Another light background option
        },
        text: {
          primary: '#1A2F98',  // Primary text color (dark blue)
          secondary: '#43515E', // Secondary text color (grayish)
          tertiary: '#FFFFFF', // White background for secondary sections
          title: '#111827',     // Title text color (very dark gray)
          subtitle: '#374151',  // Subtitle text color (dark gray)
          link: {
            DEFAULT: '#007BC7',  // Links color
            hover: '#005A9E',    // Links hover color
          },
          danger: {
            DEFAULT: '#AD0631',  // Error or alert text color
            hover: '#870525',    // Error or alert hover color
            active: '#6D021C',   // Error or alert active color
          },
        },
        button: {
          primary: {
            DEFAULT: '#007BC7',  // Button primary color
            hover: '#005A9E',    // Button hover color
            active: '#003F7D',   // Button active color
          },
          secondary: {
            DEFAULT: '#A0A0A0',  // Button secondary color
            hover: '#8A8A8A',    // Button secondary hover color
            active: '#707070',   // Button secondary active color
          },
        },
        border: {
          DEFAULT: '#E2E2E2',    // Default border color
          focus: '#007BC7',      // Border color on focus
          active: '#003F7D',     // Border color when active
        },
        accent: {
          whatsapp: '#22c55e',   // WhatsApp green
          hover: '#1ca84f',      // WhatsApp green hover
        }
      },
    },
  },
  plugins: [],
}
