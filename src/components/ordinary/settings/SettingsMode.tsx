'use client';

import { useEffect, useState } from 'react';

import { InvertColors } from '@mui/icons-material';
import { PaletteMode, useColorScheme } from '@mui/material/';

import { MenuButton } from '@/components/reused/menu-button/MenuButton';
import { Switch } from '@/components/reused/switch/Switch';

export const SettingsMode = () => {
	const { mode, setMode } = useColorScheme();

	const handleClick = () => {
		setMode(mode === 'light' ? 'dark' : 'light');
	};

	return (
		<MenuButton
			icon={<InvertColors />}
			text='Тема'
			rightSlot={<SwitchMode mode={mode as PaletteMode} />}
			onClick={handleClick}
		/>
	);
};

const SwitchMode = ({ mode }: { mode: PaletteMode }) => {
	const [mount, setMount] = useState(false);

	useEffect(() => {
		setMount(true);
	}, []);

	if (mount) {
		return <Switch className='-mx-1' checked={mode === 'dark'} />;
	}
};
