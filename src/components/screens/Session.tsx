import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const Routes = () => {
	return (
		<Limiter>
			<Container className='pt-container'>Routes</Container>
		</Limiter>
	);
};
