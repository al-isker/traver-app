'use client';

import { useParams } from 'next/navigation';

import { PLACES } from '@/lib/data/places';

import { Container } from '../reused/container/Container';
import { Limiter } from '../reused/limiter/Limiter';

export const RouteById = () => {
	const params = useParams();

	const currentPlace = PLACES.find(item => item.id === Number(params.id));

	return (
		<Limiter>
			<Container className='pt-container'>Route {currentPlace?.name}</Container>
		</Limiter>
	);
};
