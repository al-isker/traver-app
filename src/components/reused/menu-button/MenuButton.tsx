import { ReactNode } from 'react';

import { NavigateNext } from '@mui/icons-material';
import { Icon, MenuItem as MenuItemMUI, MenuItemProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Container } from '@/components/reused/container/Container';

import { Loader } from '../loader/Loader';

interface Props
	extends Omit<
		MenuItemProps,
		'children' | 'sx' | 'disableGutters' | 'disabled'
	> {
	icon: ReactNode;
	text: string;
	rightSlot?: ReactNode;
	loading?: boolean;
}

export const MenuButton = ({
	icon,
	text,
	rightSlot,
	loading,
	...MenuItemProps
}: Props) => (
	<MenuItemMUI
		component='button'
		sx={{ height: '3.8rem', paddingBlock: 0 }}
		disableGutters
		disabled={loading}
		{...MenuItemProps}
	>
		<Container className='flex h-full items-center gap-3'>
			<MenuItemIcon
				className='rounded-sm bg-primary-dark/15 p-4 text-black/80'
				fontSize='small'
			>
				{icon}
			</MenuItemIcon>
			<div className='flex-grow overflow-hidden text-ellipsis text-nowrap text-left text-black/80'>
				{text}
			</div>
			<div className='h-full max-h-fit'>
				{loading ? (
					<Loader className='h-1/2 text-primary/90' />
				) : (
					(rightSlot ?? <NavigateNext className='text-black/80' />)
				)}
			</div>
		</Container>
	</MenuItemMUI>
);

const MenuItemIcon = styled(Icon)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	'& svg': {
		display: 'block',
		fontSize: 'inherit'
	}
});
