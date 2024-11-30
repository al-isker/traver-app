import { FC, PropsWithChildren } from 'react';

import { BottomNavigation } from '@/components/ordinary/bottom-navigation/BottomNavigation';
import { Header } from '@/components/ordinary/header/Header';
import { Main } from '@/components/ordinary/main/Main';

const TabsLayout: FC<PropsWithChildren> = ({ children }) => (
	<>
		<Header />
		<Main>{children}</Main>
		<BottomNavigation />
	</>
);

export default TabsLayout;
