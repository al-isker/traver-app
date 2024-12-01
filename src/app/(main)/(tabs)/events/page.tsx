import { Metadata, NextPage } from 'next';

import { Events } from '@/components/screens/Events';

export const metadata: Metadata = {
	title: 'События'
};

const EventsPage: NextPage = () => <Events />;

export default EventsPage;
