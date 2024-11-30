import { Metadata, NextPage } from 'next';

import { Profile } from '@/components/screens/Profile';

export const metadata: Metadata = {
	title: 'Профиль'
};

const ProfilePage: NextPage = () => <Profile />;

export default ProfilePage;
