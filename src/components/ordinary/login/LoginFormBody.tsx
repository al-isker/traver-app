'use client';

import { FormHelperText } from '@mui/material';
import cn from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';

import { RHFInputText } from '@/components/fields/rhf/RHFInputText';
import { RHFSelect } from '@/components/fields/rhf/RHFSelect';
import { Button } from '@/components/reused/button/Button';

import { semesterOptions } from '@/lib/constants/options';
import { LoginSchema } from '@/lib/types/schemes';
import { maxLength, minLength, required } from '@/lib/utils/validations';

interface Props {
	className?: string;
	errorMessage?: string;
	onSubmit: SubmitHandler<LoginSchema>;
}

export const LoginFormBody = ({ className, errorMessage, onSubmit }: Props) => {
	const { control, handleSubmit } = useForm<LoginSchema>();

	return (
		<div
			className={cn(
				'w-full max-w-80 rounded bg-white bg-overlays-4 p-4 shadow-sm',
				className
			)}
		>
			<form className='flex flex-col gap-y-4' onSubmit={handleSubmit(onSubmit)}>
				<RHFInputText
					size='small'
					control={control}
					name='fullName'
					label='Телефон'
					rules={{
						...required(),
						...minLength(5),
						...maxLength(100)
					}}
				/>

				<RHFInputText
					size='small'
					control={control}
					name='password'
					label='Пароль'
					rules={{
						...required(),
						...minLength(1),
						...maxLength(30)
					}}
				/>

				<RHFSelect
					size='small'
					keepModalMounted
					control={control}
					name='semester'
					label='Текущий семестр'
					options={semesterOptions}
					rules={required()}
				/>

				<div className='w-full'>
					<Button fullWidth variant='contained' type='submit'>
						начать
					</Button>
					{errorMessage && (
						<FormHelperText error className='-mb-2 text-center lowercase'>
							{errorMessage}
						</FormHelperText>
					)}
				</div>
			</form>
		</div>
	);
};
