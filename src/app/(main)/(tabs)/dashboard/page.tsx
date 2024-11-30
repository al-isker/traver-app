import { Metadata, NextPage } from 'next';

import { Dashboard } from '@/components/screens/Dashboard';

export const metadata: Metadata = {
	title: 'Статистика'
};

const DashboardPage: NextPage = () => <Dashboard />;

export default DashboardPage;
