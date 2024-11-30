import { Divider } from '@mui/material';
import cn from 'clsx';

import { SettingsLogout } from './SettingsLogout';
import { SettingsMode } from './SettingsMode';
import { SettingsPrivacyPolicy } from './SettingsPrivacyPolicy';

interface Props {
	className?: string;
}

export const Settings = ({ className }: Props) => (
	<div className={cn('flex flex-col rounded-t bg-white', className)}>
		<span className='mx-auto mb-2 mt-2 h-1 w-8 rounded-full bg-black/20' />

		<SettingsMode />
		<Divider className='!my-0' variant='middle' />

		<SettingsPrivacyPolicy />
		<Divider className='!my-0' variant='middle' />

		<SettingsLogout />
	</div>
);
