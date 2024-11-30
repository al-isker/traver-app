import {
	ChangeEvent,
	InputHTMLAttributes,
	ReactNode,
	Ref,
	forwardRef
} from 'react';

interface Props
	extends Omit<
		InputHTMLAttributes<HTMLInputElement>,
		'className' | 'type' | 'onChange'
	> {
	children?: ReactNode;
	onUpload: (value: File) => void;
}

export const Upload = forwardRef(function Upload(
	{ children, onUpload, ...InputProps }: Props,
	ref: Ref<HTMLInputElement>
) {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (file) {
			onUpload(file);
		}

		(e.target as HTMLInputElement).value = '';
	};

	return (
		<>
			<input
				ref={ref}
				className='hidden'
				type='file'
				onChange={handleChange}
				{...InputProps}
			/>
			{children}
		</>
	);
});

export type { Props as UploadProps };
