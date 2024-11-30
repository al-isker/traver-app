import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const Session = () => {
	return (
		<Limiter>
			<Container className='pt-container'>Map</Container>
		</Limiter>
	);
};
