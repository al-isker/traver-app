'use client';

import { ReactNode } from 'react';

import { Provider } from 'react-redux';

import { store } from '@/lib/store/store';

export const ReduxProvider = ({ children }: { children: ReactNode }) => (
	<Provider store={store}>{children}</Provider>
);
