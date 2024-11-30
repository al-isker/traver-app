import {
	FabProps,
	SpeedDialAction,
	SpeedDialActionProps,
	styled
} from '@mui/material';

interface Props extends Omit<SpeedDialActionProps, 'FabProps'> {
	FabProps?: Omit<FabProps, 'size'>;
}

const StyledSpeedDialAction = styled(SpeedDialAction)({
	margin: '0.2rem'
});

export const SmallSpeedDialAction = ({
	FabProps,
	...SpeedDialActionProps
}: Props) => (
	<StyledSpeedDialAction
		className='!shadow-sm'
		onFocus={e => e.currentTarget.blur()}
		FabProps={{ size: 'small', ...FabProps }}
		{...SpeedDialActionProps}
	/>
);
