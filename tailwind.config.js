/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050710",
        panel: "rgba(255,255,255,0.075)",
        line: "rgba(255,255,255,0.14)",
        electric: "#38bdf8",
        violet: "#8b5cf6"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 44px rgba(56, 189, 248, 0.25)",
        violet: "0 0 60px rgba(139, 92, 246, 0.25)"
      }
    }
  },
  plugins: []
};
