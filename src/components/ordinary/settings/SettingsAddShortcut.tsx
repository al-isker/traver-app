'use client';

import { TouchApp } from '@mui/icons-material';

import { MenuButton } from '@/components/reused/menu-button/MenuButton';

export const SettingsAddShortcut = () => {
	return <MenuButton icon={<TouchApp />} text='Добавить значок на экран' />;
};
