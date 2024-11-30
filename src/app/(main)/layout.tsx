import { FC, PropsWithChildren } from 'react';

import { CssBaseline } from '@mui/material';

import { MaterialProvider } from '@/components/providers/material';

import '@/lib/styles/global.css';

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
	<MaterialProvider>
		{/* <SupportDeviceScript /> */}
		<CssBaseline />
		{children}
	</MaterialProvider>
);

export default MainLayout;
