import { Metadata, NextPage } from 'next';

import { Routes } from '@/components/screens/Session';

export const metadata: Metadata = {
	title: 'Маршруты'
};

const RoutesPage: NextPage = () => <Routes />;

export default RoutesPage;
