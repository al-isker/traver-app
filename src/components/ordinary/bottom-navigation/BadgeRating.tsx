import { ReactNode } from 'react';

import { Badge } from '@mui/material';

import { useGetRatingsQuery } from '@/lib/services/rating';

export const BadgeRating = ({ children }: { children: ReactNode }) => {
	const { data } = useGetRatingsQuery();

	const isNewRating = data?.some(item => {
		return item.rating.some(rating => rating.isNew);
	});

	return (
		<Badge color='primary' variant='dot' invisible={!isNewRating}>
			{children}
		</Badge>
	);
};
