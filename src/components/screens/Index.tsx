'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { ROUTES } from '@/lib/constants/routes';

export const Index = () => {
	const router = useRouter();

	useEffect(() => {
		const id = setTimeout(() => {
			router.replace(ROUTES.home);
		}, 2000);

		return () => {
			clearTimeout(id);
		};
	}, []);

	return (
		<div className='flex h-full items-center justify-center'>
			<img className='w-[80%]' src='/logo.png' alt='logo' />
		</div>
	);
};
