import { ReactNode } from 'react';

import cn from 'clsx';

import { BREAKPOINTS } from '@/lib/styles/style';

interface Props {
	children: ReactNode;
	className?: string;
}

export const Limiter = ({ children, className }: Props) => (
	<div
		className={cn('mx-auto w-full', className)}
		style={{ maxWidth: BREAKPOINTS.max }}
	>
		{children}
	</div>
);
