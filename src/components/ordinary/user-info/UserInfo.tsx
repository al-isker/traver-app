import { UserInfoItem } from './UserInfoItem';

export const UserInfo = () => (
	<div className='flex gap-x-3'>
		<UserInfoItem number='Аксакал' caption='ранг' />
		<UserInfoItem number={65} caption='пройдено км' />
		{/* <UserInfoItem number={724} caption='Коины' /> */}
	</div>
);
