'use client';

import { Palette } from '@mui/material';
import { Gauge as GaugeMUI, GaugeProps, gaugeClasses } from '@mui/x-charts';

interface Props extends Omit<GaugeProps, 'sx'> {
	color?: keyof Pick<
		Palette,
		'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
	>;
}

export const Gauge = ({ color, ...GaugeProps }: Props) => {
	return (
		<GaugeMUI
			sx={theme => ({
				flexGrow: 0,

				[`& .${gaugeClasses.valueArc}`]: {
					fill: theme.palette[color ?? 'primary'].main
				},
				[`& .${gaugeClasses.valueText}`]: {
					fontWeight: 700,
					fontSize: '1.125rem'
				}
			})}
			margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
			innerRadius='82.5%'
			outerRadius='100%'
			cornerRadius='35%'
			{...GaugeProps}
		/>
	);
};

export type { Props as GaugeProps };
