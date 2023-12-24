/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      sm: "576px",
      md: "764px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1270px",
        "2xl": "1400px",
        // '3xl': '1538px',
      },
    },
    extend: {
      colors: {
        primary: "#656ED3",
        sec: "#EC6A4B",
        bgColor: "#F3E8FF",
        textColor: "#292929",
        textGray: "#6C6666",
        black: "#1A1A1B",
        white: "#FCF6F6",
        light: "#E9E9E9",
        red: "#F33838",
        grey:"#737373"
      },
      keyframes: {
        leftRight: {
          "0%, 100%": { transform: "translateX(-10%)" },
          "50%": { transform: "translateX(0)" },
        },
        upDown: {
          "0%, 100%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateX(0)" },
        },
        zoomInOut: {
          "0%, 100%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1)" },
        },
      },
      animation: {
        leftRight: `leftRight 3s ease-in-out infinite`,
        upDown: `upDown 3s ease-in-out infinite`,
        zoomInOut: `zoomInOut 5s ease-in-out infinite`,
      },
    },
  },
  plugins: [
  ],
};
