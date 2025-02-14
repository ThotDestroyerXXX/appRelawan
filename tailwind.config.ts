import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
          },
      colors: {
          cream: '#FBFFE4',
          softGreen: '#B3D8A8',
          darkGreen: '#3D8D7A',
          sageGreen: '#A3D1C6',
          },
      },
  },
  plugins: [],
} satisfies Config;