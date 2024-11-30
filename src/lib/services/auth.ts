import { LoginRes, LogoutRes } from '@/lib/types/responses';
import { LoginSchema } from '@/lib/types/schemes';

import { api } from './api';

export const authApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: build => ({
		login: build.mutation<LoginRes, LoginSchema>({
			query: body => ({
				url: 'auth/login',
				method: 'POST',
				body
			}),
			invalidatesTags: ['rating', 'grade', 'profile']
		}),

		logout: build.mutation<LogoutRes, void>({
			query: () => ({
				url: 'auth/logout',
				method: 'POST'
			})
		})
	})
});

export const { useLoginMutation, useLogoutMutation } = authApi;
