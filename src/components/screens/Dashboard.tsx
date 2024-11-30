import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const Dashboard = () => {
	return (
		<Limiter>
			<Container className='pt-container'>Dashboard</Container>
		</Limiter>
	);
};
