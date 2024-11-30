import { ReactNode } from 'react';

export interface IOption<V> {
	label: ReactNode;
	value: V;
}
