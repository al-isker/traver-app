import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const Home = () => {
	return (
		<Limiter>
			<Container className='flex flex-col gap-y-4 pt-container'>
				<div></div>
			</Container>
		</Limiter>
	);
};
