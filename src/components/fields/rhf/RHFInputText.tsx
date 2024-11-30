import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

import {
	InputText,
	InputTextProps
} from '@/components/fields/simple/InputText';

interface Props<FV extends FieldValues>
	extends Omit<ControllerProps<FV>, 'render'>,
		Omit<
			InputTextProps,
			| 'inputRef'
			| 'name'
			| 'value'
			| 'defaultValue'
			| 'onChange'
			| 'onBlur'
			| 'disabled'
		> {}

export const RHFInputText = <FV extends FieldValues>({
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
			<InputText
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
