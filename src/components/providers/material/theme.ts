'use client';

import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

import {
	BORDER_RADIUS,
	BREAKPOINTS,
	COLORS,
	FONT_FAMILY
} from '@/lib/styles/style';

export const theme = extendTheme({
	breakpoints: {
		values: {
			xs: BREAKPOINTS.xs,
			sm: BREAKPOINTS.sm,
			md: BREAKPOINTS.md,
			lg: NaN,
			xl: NaN
		}
	},
	typography: {
		fontFamily: FONT_FAMILY.primary
	},

	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: COLORS.light.primary
				}
			}
		},
		dark: {
			palette: {
				primary: {
					main: COLORS.dark.primary
				}
			}
		}
	},
	shape: {
		borderRadius: BORDER_RADIUS
	}
});
