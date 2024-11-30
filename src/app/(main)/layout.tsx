import { FC, PropsWithChildren } from 'react';

import { CssBaseline } from '@mui/material';

import { MaterialProvider } from '@/components/providers/material';
import { ReduxProvider } from '@/components/providers/redux';

import '@/lib/styles/global.css';

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
	<ReduxProvider>
		<MaterialProvider>
			{/* <SupportDeviceScript /> */}
			<CssBaseline />
			{children}
		</MaterialProvider>
	</ReduxProvider>
);

export default MainLayout;
