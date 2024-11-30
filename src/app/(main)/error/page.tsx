import { Metadata, NextPage } from 'next';
import { Suspense } from 'react';

import { Error } from '@/components/screens/Error';

export const metadata: Metadata = {
	title: 'Ошибка'
};

const ErrorPage: NextPage = () => (
	<Suspense>
		<Error />
	</Suspense>
);

export default ErrorPage;
