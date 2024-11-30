import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const PrivacyPolicy = () => (
	<Limiter>
		<Container className='pt-container'>Privacy Policy</Container>
	</Limiter>
);
