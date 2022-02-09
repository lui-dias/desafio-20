const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', ...defaultTheme.fontFamily.sans],
                poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                _primary: '#00D2DF',
                _secondary: '#9358F7',
                
                _dark: '#121212',
                '_dark-200': '#151515',
                '_gray-light': '#BBBBBB',
                _light: '#FFFFFF',

                _blue_light: '#e0e0e0',

                gradient_pink_from: '#D24074',
                gradient_pink_to: '#6518B4',
                gradient_purple_from: '#9358F7',
                gradient_purple_to: '#10D7E2',
            },
        },
    },
    plugins: [],
}
