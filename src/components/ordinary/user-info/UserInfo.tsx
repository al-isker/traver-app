import { UserInfoItem } from './UserInfoItem';

export const UserInfo = () => (
	<div className='grid-row-2 grid grid-cols-2 gap-3'>
		<UserInfoItem number={65} caption='пройдено км' />
		<UserInfoItem number={724} caption='Коины' />
		<UserInfoItem className='col-span-2' number='Аксакал' caption='ранг' />
	</div>
);
