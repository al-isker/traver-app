'use client';

import Link from 'next/link';

import { Global } from '@emotion/react';
import { CircularProgress } from '@mui/material';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

import { ROUTES } from '@/lib/constants/routes';
import { PLACES } from '@/lib/data/places';
import { COLORS } from '@/lib/styles/style';

import { Button } from '../reused/button/Button';

export const Home = () => {
	return (
		<>
			<Global
				styles={{
					main: {
						overflow: 'hidden !important',
						position: 'relative'
					}
				}}
			/>

			<div className='relative h-full w-full'>
				<CircularProgress className='absolute left-[calc(50%-20px)] top-[calc(50%-20px)]' />

				<section className='absolute bottom-0 left-0 z-20 flex h-20 w-full bg-gradient-to-b from-transparent via-50% to-black/50'>
					<div className='mt-auto flex gap-2 overflow-x-auto p-2'>
						<div>
							{PLACES.map(place => (
								<Button
									className='h-fit text-nowrap'
									variant='contained'
									LinkComponent={Link}
									href={ROUTES.routes}
								>
									{place.name}
								</Button>
							))}
						</div>
					</div>
				</section>

				<YMaps>
					<Map
						className='absolute z-10 h-full w-full scale-[113%]'
						defaultState={{
							center: [42.565113, 47.871017],
							zoom: 7
						}}
					>
						{PLACES.map(place => (
							<Placemark
								options={{ iconColor: COLORS.light.primary }}
								geometry={place.coordinates}
							/>
						))}
					</Map>
				</YMaps>
			</div>
		</>
	);
};

// const PlaceLink = () => <Button LinkComponent={Link} href={ROUTES.routes} />;
