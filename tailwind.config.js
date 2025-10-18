/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                    primary: '#6c756B',
                    secondary: '#93ACB5',
                    tertiary: '#96c5f7',
                    light: '#a9d3ff',
                    background: '#f2f4ff',
            }
        }
    },
    plugins: [],
}