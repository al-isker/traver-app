'use client';

import { Switch as SwitchMUI, styled } from '@mui/material';

const height = 22;

export const Switch = styled(SwitchMUI)(({ theme }) => ({
	width: height * 2,
	height: height,
	padding: 0,
	display: 'flex',

	'&:active': {
		'& .MuiSwitch-thumb': {
			width: height * 0.8 + height * 0.15
		},
		'& .MuiSwitch-switchBase.Mui-checked': {
			transform: `translateX(${height - height * 0.15}px)`
		}
	},
	'& .MuiSwitch-switchBase': {
		padding: height * 0.1,
		'&.Mui-checked': {
			transform: `translateX(${height}px)`,
			color: '#fff',
			'& + .MuiSwitch-track': {
				opacity: 1
			}
		}
	},
	'& .MuiSwitch-thumb': {
		boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
		width: height * 0.8,
		height: height * 0.8,
		borderRadius: (height * 0.8) / 2,
		transition: theme.transitions.create(['width'], {
			duration: 200
		})
	},
	'& .MuiSwitch-track': {
		borderRadius: height / 2,
		opacity: 1,
		backgroundColor:
			theme.palette.mode === 'dark'
				? 'rgba(255,255,255,.35)'
				: 'rgba(0,0,0,.25)'
	}
}));
