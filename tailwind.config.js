/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-app-background" : "#fafafa",
        "light-todo-background": "#e4e5f1",
        "light-completed": "#d2d3db",
        "light-footer-passive": "	#9394a5",
        "light-todo-active": "#484b6a",

        "dark-app-background": "#161722",
        "dark-todo-background": "#25273c",
        "dark-todo-active": "#cacde8",
        "dark-footer-btn-hover": "#e4e5f1",
        "dark-todo-input-placeholder": "#777a92",
        "dark-completed": "#4d5066",
        "dark-todo-border": "#393a4c",

        "bright-blue": "#3a7bfd"

      }
    },
  },
  plugins: [],
}