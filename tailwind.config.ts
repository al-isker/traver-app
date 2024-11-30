import { Config } from 'tailwindcss';

// noinspection ES6PreferShortImport
import {
	BORDER_RADIUS,
	BREAKPOINTS,
	FONT_FAMILY
} from './src/lib/styles/style';

const config: Config = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],

	important: 'html',

	theme: {
		screens: {
			xs: `${BREAKPOINTS.xs}px`,
			sm: `${BREAKPOINTS.sm}px`,
			md: `${BREAKPOINTS.md}px`
		},

		fontFamily: FONT_FAMILY,

		borderRadius: {
			none: '0',
			sm: `${BORDER_RADIUS / 2}px`,
			DEFAULT: `${BORDER_RADIUS}px`,
			lg: `${BORDER_RADIUS * 2}px`,
			xl: `${BORDER_RADIUS * 3}px`,
			full: '9999px'
		},

		colors: {
			primary: 'rgb(var(--mui-palette-primary-mainChannel) / <alpha-value>)',
			'primary-light':
				'rgb(var(--mui-palette-primary-lightChannel) / <alpha-value>)',
			'primary-dark':
				'rgb(var(--mui-palette-primary-darkChannel) / <alpha-value>)',

			white:
				'rgb(var(--mui-palette-background-defaultChannel) / <alpha-value>)',

			black: 'rgb(var(--mui-palette-text-primaryChannel) / <alpha-value>)',

			'always-white': 'rgb(255 255 255 / <alpha-value>)',
			'always-black': 'rgb(18 18 18 / <alpha-value>)',
			'always-blackest': 'rgb(0 0 0 / <alpha-value>)',

			transparent: 'transparent'
		},

		extend: {
			spacing: {
				container: 'var(--container-spacing)',
				'container-sm': 'calc(var(--container-spacing) / 1.5)',
				'container-lg': 'calc(var(--container-spacing) * 1.5)'
			},

			boxShadow: {
				'mui-0': 'var(--mui-shadows-0)',
				'mui-1': 'var(--mui-shadows-1)',
				'mui-2': 'var(--mui-shadows-2)',
				'mui-3': 'var(--mui-shadows-3)',
				'mui-4': 'var(--mui-shadows-4)',
				'mui-5': 'var(--mui-shadows-5)',
				'mui-6': 'var(--mui-shadows-6)',
				'mui-7': 'var(--mui-shadows-7)',
				'mui-8': 'var(--mui-shadows-8)',
				'mui-9': 'var(--mui-shadows-9)',
				'mui-10': 'var(--mui-shadows-10)',
				'mui-11': 'var(--mui-shadows-11)',
				'mui-12': 'var(--mui-shadows-12)',
				'mui-13': 'var(--mui-shadows-13)',
				'mui-14': 'var(--mui-shadows-14)',
				'mui-15': 'var(--mui-shadows-15)',
				'mui-16': 'var(--mui-shadows-16)',
				'mui-17': 'var(--mui-shadows-17)',
				'mui-18': 'var(--mui-shadows-18)',
				'mui-19': 'var(--mui-shadows-19)',
				'mui-20': 'var(--mui-shadows-20)',
				'mui-21': 'var(--mui-shadows-21)',
				'mui-22': 'var(--mui-shadows-22)',
				'mui-23': 'var(--mui-shadows-23)',
				'mui-24': 'var(--mui-shadows-24)'
			},

			backgroundImage: {
				'overlays-1': 'var(--overlays-1)',
				'overlays-2': 'var(--overlays-2)',
				'overlays-3': 'var(--overlays-3)',
				'overlays-4': 'var(--overlays-4)',
				'overlays-5': 'var(--overlays-5)',
				'overlays-6': 'var(--overlays-6)',
				'overlays-7': 'var(--overlays-7)',
				'overlays-8': 'var(--overlays-8)',
				'overlays-9': 'var(--overlays-9)',
				'overlays-10': 'var(--overlays-10)',
				'overlays-11': 'var(--overlays-11)',
				'overlays-12': 'var(--overlays-12)',
				'overlays-13': 'var(--overlays-13)',
				'overlays-14': 'var(--overlays-14)',
				'overlays-15': 'var(--overlays-15)',
				'overlays-16': 'var(--overlays-16)',
				'overlays-17': 'var(--overlays-17)',
				'overlays-18': 'var(--overlays-18)',
				'overlays-19': 'var(--overlays-19)',
				'overlays-20': 'var(--overlays-20)',
				'overlays-21': 'var(--overlays-21)',
				'overlays-22': 'var(--overlays-22)',
				'overlays-23': 'var(--overlays-23)',
				'overlays-24': 'var(--overlays-24)'
			}
		}
	},
	plugins: []
};

export default config;
