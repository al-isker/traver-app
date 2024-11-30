import { ReactNode } from 'react';

import cn from 'clsx';

interface Props {
	children: ReactNode;
	className?: string;
}

export const Container = ({ children, className }: Props) => (
	<div className={cn('w-full px-container', className)}>{children}</div>
);
