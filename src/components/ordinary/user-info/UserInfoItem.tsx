import { ReactNode } from 'react';

import clsx from 'clsx';

import { Container } from '@/components/reused/container/Container';

interface Props {
	className?: string;
	number: ReactNode;
	caption: ReactNode;
}

export const UserInfoItem = ({ number, caption, className }: Props) => {
	return (
		<div className={clsx('w-full rounded bg-white py-2 shadow-sm', className)}>
			<Container className='flex flex-col items-center'>
				<span className='text-xl font-bold text-black/75'>{number}</span>
				<span className='text-nowrap text-sm font-medium tracking-wide text-black/60'>
					{caption}
				</span>
			</Container>
		</div>
	);
};
