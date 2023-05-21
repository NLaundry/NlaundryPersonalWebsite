/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            primary_colour: '#AD8B5F',
            primary_active_colour: '#8F6E3D',
            background_colour: '#1B1F23',
            background_card_colour: '#2C3339',
            background_card_hover_colour: '#3E464C',
            text_colour: '#e7e5e4'
        },
        extend: {
            fontFamily: {
                'nunito': ['Nunito', 'sans-serif'],
            },
            keyframes: {
                typing: {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' },
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
            },
            animation: {
                typing: 'typing 3.5s steps(40, end), blink .75s step-end infinite',
            },
        },
        plugins: [
            require('@tailwindcss/typography'),
        ],
    }
}
