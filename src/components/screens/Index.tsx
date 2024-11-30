'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { CircularProgress } from '@mui/material';

import { Main } from '@/components/ordinary/main/Main';

import { ROUTES } from '@/lib/constants/routes';

export const Index = () => {
	const router = useRouter();

	useEffect(() => {
		const id = setTimeout(() => {
			router.replace(ROUTES.home);
		}, 1500);

		return () => {
			clearTimeout(id);
		};
	}, []);

	return (
		<Main>
			<div className='flex h-full flex-col items-center justify-center gap-12'>
				<img className='w-[80%] max-w-96' src='/logo.png' alt='logo' />
				<CircularProgress color='inherit' />
			</div>
		</Main>
	);
};
