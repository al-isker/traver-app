import { Loader } from '@/components/reused/loader/Loader';
import { Title } from '@/components/reused/title/Title';

export const LoginFormHeader = ({ loading }: { loading: boolean }) => {
	return (
		<div className='text-center'>
			<div className='text-primary'>
				{loading ? (
					<Loader className='mb-2 h-12' />
				) : (
					<img
						className='inline-block h-14'
						src='/favicon.svg'
						alt='stud-progress'
					/>
				)}
			</div>

			<Title />
		</div>
	);
};
