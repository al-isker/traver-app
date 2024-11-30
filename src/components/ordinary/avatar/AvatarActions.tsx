import { Delete, Edit } from '@mui/icons-material';
import { SpeedDialIcon } from '@mui/material';

import { SmallSpeedDial } from '@/components/reused/small-speed-dial/SmallSpeedDial';
import { SmallSpeedDialAction } from '@/components/reused/small-speed-dial/SmallSpeedDialAction';

import { useShowHide } from '@/lib/hooks/useShowHide';

interface Props {
	className?: string;
	onClickUpload: () => void;
	onClickDelete: () => void;
}

export const AvatarActions = ({
	className,
	onClickUpload,
	onClickDelete
}: Props) => {
	const speedDial = useShowHide();

	const handleClickAction = (fn: () => void) => {
		fn();
		speedDial.hide();
	};

	return (
		<SmallSpeedDial
			className={className}
			ariaLabel='student-avatar-actions'
			direction='down'
			open={speedDial.isShow}
			onOpen={speedDial.show}
			onClose={speedDial.hide}
			icon={<SpeedDialIcon className='flex items-center justify-center' />}
		>
			<SmallSpeedDialAction
				icon={<Edit fontSize='small' />}
				onClick={() => handleClickAction(onClickUpload)}
			/>
			<SmallSpeedDialAction
				icon={<Delete fontSize='small' />}
				onClick={() => handleClickAction(onClickDelete)}
			/>
		</SmallSpeedDial>
	);
};
