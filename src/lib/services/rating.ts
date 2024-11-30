import { RatingItemRes } from '@/lib/types/responses';

import { api } from './api';

const ratingApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: build => ({
		getRatings: build.query<RatingItemRes[], void>({
			query: () => 'rating',
			providesTags: ['rating']
		})
	})
});

export const { useGetRatingsQuery } = ratingApi;
