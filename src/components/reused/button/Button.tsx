'use client';

import { Button as ButtonMUI, styled } from '@mui/material';

export const Button = styled(ButtonMUI)({
	'&.MuiButton-contained': {
		boxShadow: 'none'
	}
});
