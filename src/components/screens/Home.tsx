'use client';

import Link from 'next/link';

import { Global } from '@emotion/react';
import {
	ButtonBase,
	CircularProgress,
	Rating,
	Typography
} from '@mui/material';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import clsx from 'clsx';

import { ROUTES } from '@/lib/constants/routes';
import { PLACES } from '@/lib/data/places';
import { COLORS } from '@/lib/styles/style';

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

				<section className='h-42 absolute bottom-0 left-0 z-20 flex w-full bg-gradient-to-b from-transparent via-50% to-black/50'>
					<div className='mt-auto overflow-x-auto'>
						<div className='flex w-auto py-3'>
							<div>⠀</div>

							<div className='flex w-auto gap-3'>
								{PLACES.map(place => (
									<PlaceCard
										key={place.id}
										className='w-fit flex-shrink-0'
										id={place.id}
										name={place.name}
										img={place.imageUrl}
										rating={place.rating}
										price={place.price}
									/>
								))}
							</div>

							<div>⠀</div>
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

interface PlaceCardProps {
	id: number;
	className?: string;
	name: string;
	img: string;
	rating: number;
	price: number;
}

const PlaceCard = ({
	id,
	className,
	name,
	img,
	rating,
	price
}: PlaceCardProps) => (
	<ButtonBase
		className={clsx('h-full max-h-32 w-[80vw] rounded bg-white p-2', className)}
		LinkComponent={Link}
		href={`${ROUTES.routes}/${id}`}
	>
		<div className='flex h-full w-full gap-3'>
			<img className='h-full w-1/2 rounded object-cover' src={img} alt='img' />
			<div className='flex flex-col justify-between'>
				<Typography className='text-[16px] font-medium leading-[130%]'>
					{name}
				</Typography>
				<div className='text-sm text-black/60'>
					{new Intl.NumberFormat('ru-RU', {
						style: 'currency',
						currency: 'RUB'
					}).format(price)}
				</div>
				<Rating name='read-only' value={rating} precision={0.5} readOnly />
			</div>
		</div>
	</ButtonBase>
);
