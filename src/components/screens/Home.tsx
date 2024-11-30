'use client';

import { Global } from '@emotion/react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

import { PLACES } from '@/lib/data/places';
import { COLORS } from '@/lib/styles/style';

export const Home = () => {
	return (
		<>
			<Global
				styles={{
					main: {
						overflow: 'hidden !important'
					}
				}}
			/>

			<YMaps>
				<Map
					className='h-full w-full scale-[112%]'
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
		</>
	);
};

// const PlaceLink = () => (
// 	<Button component={Link} href={ROUTES.} />
// )
