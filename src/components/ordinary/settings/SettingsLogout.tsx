'use client';

import { Dangerous, LogoutOutlined } from '@mui/icons-material';

import { Button } from '@/components/reused/button/Button';
import { Dialog } from '@/components/reused/dialog/Dialog';
import { MenuButton } from '@/components/reused/menu-button/MenuButton';

import { useShowHide } from '@/lib/hooks/useShowHide';

export const SettingsLogout = () => {
	const dialog = useShowHide();

	const handleClick = () => {
		dialog.show();
	};

	return (
		<>
			<MenuButton
				icon={<LogoutOutlined className='rotate-180' />}
				text='Выйти'
				onClick={handleClick}
			/>

			<Dialog
				icon={<Dangerous />}
				title='Отмена'
				text='Компания DAG TRIP не одобряет ваше решение'
				open={dialog.isShow}
				onClose={dialog.hide}
				actions={<Button onClick={dialog.hide}>Закрыть</Button>}
			/>
		</>
	);
};
