import { ReactNode } from 'react';

import { Container } from '@/components/reused/container/Container';

interface Props {
	number: ReactNode;
	caption: ReactNode;
}

export const UserInfoItem = ({ number, caption }: Props) => {
	return (
		<div className='w-full rounded bg-white py-3 shadow-sm'>
			<Container className='flex flex-col items-center'>
				<span className='text-2xl font-bold text-black/75'>{number}</span>
				<span className='text-nowrap text-sm font-medium tracking-wide text-black/60'>
					{caption}
				</span>
			</Container>
		</div>
	);
};
