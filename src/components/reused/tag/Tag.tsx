'use client';

import { Chip, alpha, styled } from '@mui/material';

export const Tag = styled(Chip)(({ theme }) => ({
	height: 'auto',
	borderRadius: theme.shape.borderRadius / 1.5,

	'&.MuiChip-colorDefault': {
		color: theme.palette.text.primary,
		borderColor: alpha(theme.palette.text.primary, 0.15),
		backgroundColor: alpha(theme.palette.text.primary, 0.05)
	},

	'&.MuiChip-colorError': {
		color: theme.palette.error.main,
		borderColor: alpha(theme.palette.error.main, 0.2),
		backgroundColor: alpha(theme.palette.error.main, 0.075)
	},

	'&.MuiChip-colorInfo': {
		color: theme.palette.info.main,
		borderColor: alpha(theme.palette.info.main, 0.2),
		backgroundColor: alpha(theme.palette.info.main, 0.075)
	},

	'&.MuiChip-colorPrimary': {
		color: theme.palette.primary.main,
		borderColor: alpha(theme.palette.primary.main, 0.2),
		backgroundColor: alpha(theme.palette.primary.main, 0.075)
	},

	'&.MuiChip-colorSecondary': {
		color: theme.palette.secondary.main,
		borderColor: alpha(theme.palette.secondary.main, 0.2),
		backgroundColor: alpha(theme.palette.secondary.main, 0.075)
	},

	'&.MuiChip-colorSuccess': {
		color: theme.palette.success.main,
		borderColor: alpha(theme.palette.success.main, 0.2),
		backgroundColor: alpha(theme.palette.success.main, 0.075)
	},

	'&.MuiChip-colorWarning': {
		color: theme.palette.warning.main,
		borderColor: alpha(theme.palette.warning.main, 0.2),
		backgroundColor: alpha(theme.palette.warning.main, 0.075)
	},

	'& .MuiChip-label': {
		'&.MuiChip-labelMedium': {
			fontSize: '0.875rem'
		},
		'&.MuiChip-labelSmall': {
			fontSize: '0.7rem'
		}
	}
}));
