import { UserInfoItem } from './UserInfoItem';

export const UserInfo = () => (
	<div className='flex gap-x-3'>
		<UserInfoItem number={7} caption='Ранг' />
		<UserInfoItem number={65} caption='Пройдено км' />
		<UserInfoItem number={724} caption='Коины' />
	</div>
);
