import { Metadata, NextPage } from 'next';

import { RouteById } from '@/components/screens/RouteById';

export const metadata: Metadata = {
	title: 'Маршрут'
};

const RouteByIdPage: NextPage = () => <RouteById />;

export default RouteByIdPage;
