/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: '#000000',
                white: '#ffffff',
                gold: {
                    DEFAULT: '#D4AF37',
                    light: '#F3E5AB',
                    dark: '#AA8C2C',
                },
            },
            fontSize: {
                'hero-clamp': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1' }],
                'section-title': ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.2' }],
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            },
            animation: {
                marquee: 'marquee 25s linear infinite',
            },
        },
    },
    plugins: [],
}