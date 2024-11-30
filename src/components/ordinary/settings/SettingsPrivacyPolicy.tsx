'use client';

import Link from 'next/link';

import { Subject } from '@mui/icons-material';

import { MenuButton } from '@/components/reused/menu-button/MenuButton';

import { ROUTES } from '@/lib/constants/routes';

export const SettingsPrivacyPolicy = () => (
	<MenuButton
		component={props => <Link {...props} href={ROUTES.privacyPolicy} />}
		icon={<Subject />}
		text='Политика конфиденциальности'
	/>
);
