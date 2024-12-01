import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const Events = () => {
	return (
		<Limiter>
			<Container className='pt-container'>Events</Container>
		</Limiter>
	);
};
