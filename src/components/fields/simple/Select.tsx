'use client';

import { MouseEvent } from 'react';

import {
	SelectProps as SelectPropsMUI,
	TextField,
	TextFieldProps
} from '@mui/material';

import { useShowHide } from '@/lib/hooks/useShowHide';
import { IOption } from '@/lib/types';

import { DialogSelect } from './DialogSelect';

interface Props<V = unknown>
	extends Omit<
		TextFieldProps,
		'select' | 'fullWidth' | 'SelectProps' | 'value' | 'onChange'
	> {
	options: IOption<V>[];
	value?: V;
	onChange?: (value: V) => void;
	SelectProps?: Omit<SelectPropsMUI, 'open'>;
	keepModalMounted?: boolean;
}

export const Select = <V,>({
	options,
	value,
	onClick,
	onChange,
	SelectProps,
	keepModalMounted,
	...TextFieldProps
}: Props<V>) => {
	const select = useShowHide();

	const handleClickSelect = (e: MouseEvent<HTMLDivElement>) => {
		select.show();

		onClick && onClick(e);
	};

	const handleChangeModalSelect = (value: V) => {
		onChange && onChange(value);
	};

	return (
		<>
			<TextField
				select
				fullWidth
				focused={select.isShow}
				value={value}
				onClick={handleClickSelect}
				SelectProps={{ open: false, ...SelectProps }}
				{...TextFieldProps}
			>
				{options.map(option => (
					<option key={String(option.value)} value={String(option.value)}>
						{option.label}
					</option>
				))}
			</TextField>

			<DialogSelect
				open={select.isShow}
				onClose={select.hide}
				label={TextFieldProps.label}
				options={options}
				value={value}
				onChange={handleChangeModalSelect}
				dense={TextFieldProps.size === 'small'}
				keepMounted={keepModalMounted}
			/>
		</>
	);
};

export type { Props as SelectProps };
