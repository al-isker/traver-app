'use client';

import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

import { Avatar } from '../ordinary/avatar/Avatar';
import { Settings } from '../ordinary/settings/Settings';
import { UserInfo } from '../ordinary/user-info/UserInfo';
import { UserName } from '../ordinary/user-name/UserName';

export const Profile = () => (
	<Limiter className='h-full'>
		<Container className='h-full pt-container'>
			<div className='relative flex min-h-full flex-col gap-4'>
				<Avatar />
				<UserName />
				<UserInfo />
				<Settings className='flex-grow' />
			</div>
		</Container>
	</Limiter>
);
