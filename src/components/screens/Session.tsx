import Link from 'next/link';

import { ButtonBase, Rating, Typography } from '@mui/material';

import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

import { ROUTES } from '@/lib/constants/routes';
import { PLACES } from '@/lib/data/places';

export const Routes = () => {
	return (
		<Limiter>
			<Container className='flex flex-col gap-3 pt-container'>
				{PLACES.map(place => (
					<ButtonBase
						className='h-40 w-full rounded bg-white p-3 shadow-lg'
						LinkComponent={Link}
						href={`${ROUTES.routes}/${place.id}`}
					>
						<div className='flex h-full w-full gap-4'>
							<img
								className='h-full w-1/2 rounded object-cover'
								src={place.imageUrl}
								alt='img'
							/>
							<div className='flex flex-col justify-between gap-1 py-1'>
								<Typography className='text-[18px] font-medium leading-[130%]'>
									{place.name}
								</Typography>
								<div className='ml-auto mt-auto pr-1 text-black/60'>
									{new Intl.NumberFormat('ru-RU', {
										style: 'currency',
										currency: 'RUB'
									}).format(place.price)}
								</div>
								<Rating
									className='ml-auto'
									name='read-only'
									value={place.rating}
									precision={0.5}
									readOnly
								/>
							</div>
						</div>
					</ButtonBase>
				))}
			</Container>
		</Limiter>
	);
};
