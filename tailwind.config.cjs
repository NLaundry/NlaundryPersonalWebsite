/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            primary_colour: '#C0663D',
            primary_active_colour: '#A8481B',
            accent_colour: '#137179',
            background_colour: '#1C1D1E',
            background_card_colour: '#1F2427',
            background_card_hover_colour: '#1F2427',
            text_colour: '#DCE5E7',
            text_secondary_colour: '#CAC8CE'

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
