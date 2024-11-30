import { FabProps, SpeedDial, SpeedDialProps, styled } from '@mui/material';

interface Props extends Omit<SpeedDialProps, 'FabProps'> {
	FabProps?: Omit<FabProps, 'size'>;
}

export const StyledSpeedDial = styled(SpeedDial)({
	'& .MuiSpeedDial-actions': {
		margin: 0,
		padding: '0.2rem'
	}
});

export const SmallSpeedDial = ({ FabProps, ...SpeedDialProps }: Props) => (
	<StyledSpeedDial
		FabProps={{
			className: '!shadow-sm',
			size: 'small',
			...FabProps
		}}
		{...SpeedDialProps}
	/>
);
