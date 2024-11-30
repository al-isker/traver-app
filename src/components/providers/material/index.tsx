import { ReactNode } from 'react';

import {
	Experimental_CssVarsProvider as CssVarsProvider,
	StyledEngineProvider
} from '@mui/material/styles';

import { theme } from './theme';

export const MaterialProvider = ({ children }: { children: ReactNode }) => (
	<StyledEngineProvider injectFirst>
		<CssVarsProvider theme={theme}>{children}</CssVarsProvider>
	</StyledEngineProvider>
);
