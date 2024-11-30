import { ReactNode } from 'react';

export const Main = ({ children }: { children?: ReactNode }) => {
	return (
		<main className='bg-gradient-to-b from-primary-light/5 to-primary-light/10'>
			{children}
		</main>
	);
};
