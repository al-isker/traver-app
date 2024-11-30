import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

import { Select, SelectProps } from '@/components/fields/simple/Select';

interface Props<FV extends FieldValues>
	extends Omit<ControllerProps<FV>, 'render'>,
		Omit<
			SelectProps,
			| 'inputRef'
			| 'name'
			| 'value'
			| 'defaultValue'
			| 'onChange'
			| 'onBlur'
			| 'disabled'
		> {}

export const RHFSelect = <FV extends FieldValues>({
	control,
	name,
	rules,
	shouldUnregister,
	defaultValue,
	disabled,
	...SelectProps
}: Props<FV>) => (
	<Controller
		control={control}
		name={name}
		rules={rules}
		shouldUnregister={shouldUnregister}
		defaultValue={defaultValue}
		disabled={disabled}
		render={({ field: { ref, value, ...field }, fieldState: { error } }) => (
			<Select
				inputRef={ref}
				value={value ?? ''}
				error={!!error}
				helperText={error?.message}
				{...field}
				{...SelectProps}
			/>
		)}
	/>
);
