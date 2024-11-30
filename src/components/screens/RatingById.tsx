import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const RatingById = () => {
	return (
		<Limiter>
			<Container className='pt-container'>Rating by id</Container>
		</Limiter>
	);
};
