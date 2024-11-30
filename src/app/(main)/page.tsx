'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { ROUTES } from '@/lib/constants/routes';

const IndexPage: NextPage = () => {
	const router = useRouter();

	useEffect(() => {
		router.replace(ROUTES.rating);
	}, []);

	return <></>;
};

export default IndexPage;
