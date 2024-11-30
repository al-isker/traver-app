import { Metadata, NextPage } from 'next';

import { Session } from '@/components/screens/Session';

export const metadata: Metadata = {
	title: 'Сессия'
};

const SessionPage: NextPage = () => <Session />;

export default SessionPage;
