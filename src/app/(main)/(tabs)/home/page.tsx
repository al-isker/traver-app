import { Metadata, NextPage } from 'next';

import { Home } from '@/components/screens/Home';

export const metadata: Metadata = {
	title: 'Главная'
};

const HomePage: NextPage = () => <Home />;

export default HomePage;
