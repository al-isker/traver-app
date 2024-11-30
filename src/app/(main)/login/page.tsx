import { Metadata, NextPage } from 'next';

import { Login } from '@/components/screens/Login';

export const metadata: Metadata = {
	title: 'Вход'
};

const LoginPage: NextPage = () => <Login />;

export default LoginPage;
