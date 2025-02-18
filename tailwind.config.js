/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    boxShadow: {
      DEFAULT: "0 4px 20px 0 rgb(7 6 18 / 0.1)",
    },

    extend: {
      fontFamily: {
        noto: ["Noto Sans", "serif"],
      },
      fontSize: {
        xs: ["0.68rem", "0.94rem"],
        sm: ["0.835rem", "1.1rem"],
      },
    },
  },
  plugins: [],
};
