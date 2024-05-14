import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: {
                    main: '#143563',
                    subMain: '#254D85',
                    lighter: '#3B68A7',
                    subtle: '#C5DDFF',
                    lightBg: '#F4F9FF',
                },
                secondary: {
                    main: '#FCB034',
                    subMain: '#FFC362',
                    lighter: '#FFD590',
                    subtle: '#FFE6BD',
                    lightBg: '#FFF7EB',
                },
                dark: {
                    dark0: '#1C1C28',
                    dark1: '#28293D',
                    dark2: '#555770',
                    dark3: '#8F90A6',
                    dark4: '#C7C9D9',
                },
                light: {
                    light0: '#E4E4EB',
                    light1: '#EBEBF0',
                    light2: '#F2F2F5',
                    light3: '#FAFAFC',
                    light4: '#FFFFFF',
                },
                red: {
                    red0: '#E53535',
                    red1: '#FF3B3B',
                    red2: '#FF5C5C',
                    red3: '#FF8080',
                    red4: '#FFE5E5',
                },
                green: {
                    green0: '#05A660',
                    green1: '#06C270',
                    green2: '#39D98A',
                    green3: '#57EBA1',
                    green4: '#E3FFF1',
                },
                blue: {
                    blue0: '#004FC4',
                    blue1: '#0063F7',
                    blue2: '#5B8DEF',
                    blue3: '#9DBFF9',
                    blue4: '#E5F0FF',
                },
                yellow: {
                    yellow0: '#E5B800',
                    yellow1: '#FFCC00',
                    yellow2: '#FDDD48',
                    yellow3: '#FDED72',
                    yellow4: '#FFFEE5',
                },
                orange: {
                    orange0: '#E57A00',
                    orange1: '#FF8800',
                    orange2: '#FDAC42',
                    orange3: '#FCCC75',
                    orange4: '#FFF8E5',
                },
                teal: {
                    teal0: '#00B7C4',
                    teal1: '#00CFDE',
                    teal2: '#73DFE7',
                    teal3: '#A9EFF2',
                    teal4: '#E5FFFF',
                },
                purple: {
                    purple0: '#4D0099',
                    purple1: '#6600CC',
                    purple2: '#AC5DD9',
                    purple3: '#DDA5E9',
                    purple4: '#FFE5FF',
                },
                navy: {
                    navy0: '#123059',
                },
            },
        },
    },
    plugins: [],
}
export default config
