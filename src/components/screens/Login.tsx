import { LoginForm } from '@/components/ordinary/login/LoginForm';
import { Main } from '@/components/ordinary/main/Main';
import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

export const Login = () => (
	<Main>
		<Limiter className='h-full'>
			<Container className='h-full'>
				<LoginForm />
			</Container>
		</Limiter>
	</Main>
);
