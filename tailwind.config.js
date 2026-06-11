/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'body': ['Inter', 'sans-serif'],
                'serif': ['Merriweather', 'serif'],
            },
            backgroundImage: {
                // A subtle wood pattern for the background
                'wood-pattern': "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
            },
            colors: {
                'paper': '#fdfbf7', // Warm paper color
            }
        },
    },
    plugins: [],
}
