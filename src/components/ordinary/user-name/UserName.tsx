import { USER } from '@/lib/data/user';

export const UserName = () => (
	<div className='px-container-sm'>
		<h3 className='text-center text-[1.6rem] font-semibold leading-8 text-black/80'>
			{`${USER.lastName} ${USER.firstName}`}
		</h3>
	</div>
);
