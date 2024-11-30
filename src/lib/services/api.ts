import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ACCESS_TOKEN_KEY } from '@/lib/constants/localStorage';
import { ROUTES } from '@/lib/constants/routes';
import { RefreshTokenRes } from '@/lib/types/responses';

import { FETCH_CONFIG } from '../constants/config';

const instanceQuery = fetchBaseQuery({
	...FETCH_CONFIG,

	prepareHeaders: headers => {
		const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

		if (accessToken) {
			headers.set('Authorization', `Bearer ${accessToken}`);
		}

		return headers;
	}
});

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['rating', 'grade', 'profile'],
	baseQuery: async (args, api, extraOptions) => {
		let response = await instanceQuery(args, api, extraOptions);

		if (window.location.pathname !== ROUTES.login) {
			if (response.error && response.error.status === 401) {
				const refreshResponse = await instanceQuery(
					{ url: 'auth/refresh-token', method: 'POST' },
					api,
					{}
				);

				if (refreshResponse.data) {
					localStorage.setItem(
						ACCESS_TOKEN_KEY,
						(refreshResponse.data as RefreshTokenRes).accessToken
					);

					response = await instanceQuery(args, api, extraOptions);
				} else {
					window.location.href = ROUTES.login;
				}
			}
		}

		return response;
	},
	endpoints: () => ({})
});
