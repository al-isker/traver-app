import { ReactNode } from 'react';

import {
	DialogActions,
	DialogContent,
	DialogContentText,
	Dialog as DialogMUI,
	DialogProps as DialogPropsMUI,
	DialogTitle
} from '@mui/material';
import cn from 'clsx';

interface Props
	extends Omit<DialogPropsMUI, 'slotProps' | 'PaperProps' | 'title'> {
	icon?: ReactNode;
	title?: ReactNode;
	text?: ReactNode;
	actions?: ReactNode;
	classNameHeader?: string;
	classNameContent?: string;
	classNameActions?: string;
}

export const Dialog = ({
	children,
	icon,
	title,
	text,
	actions,
	classNameHeader,
	classNameContent,
	classNameActions,
	...DialogProps
}: Props) => (
	<DialogMUI
		slotProps={{
			backdrop: { className: 'bg-black/20' }
		}}
		PaperProps={{
			variant: 'outlined',
			className: 'm-container',
			sx: { width: '100%', maxWidth: '20rem' }
		}}
		{...DialogProps}
	>
		{(icon || title) && (
			<DialogTitle
				className={cn('text-black/80', classNameHeader)}
				sx={{
					display: 'flex',
					alignItems: 'center',
					columnGap: '0.5rem',
					paddingBottom: '0.75rem'
				}}
			>
				{icon}
				{title}
			</DialogTitle>
		)}

		<DialogContent
			className={classNameContent}
			sx={{
				paddingBottom: actions ? 0 : null
			}}
		>
			{text && <DialogContentText>{text}</DialogContentText>}

			{children}
		</DialogContent>

		{actions && (
			<DialogActions
				sx={{ paddingTop: '0.25rem' }}
				className={classNameActions}
			>
				{actions}
			</DialogActions>
		)}
	</DialogMUI>
);

export type { Props as DialogProps };
