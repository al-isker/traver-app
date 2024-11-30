import { FetchBaseQueryArgs } from '@reduxjs/toolkit/query/react';

import { SERVER_URL } from './environments';

export const FETCH_CONFIG: FetchBaseQueryArgs = {
	baseUrl: SERVER_URL,
	timeout: 20000,
	credentials: 'include',
	headers: {
		'Content-Type': 'application/json'
	}
};
