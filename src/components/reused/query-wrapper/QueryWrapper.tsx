import { ReactNode } from 'react';

import { Error as ErrorIcon } from '@mui/icons-material';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { parseQueryError } from '@/lib/utils/parse-query-error';

import { Loader } from '../loader/Loader';

interface Props {
	children?: ReactNode;
	error?: FetchBaseQueryError | SerializedError;
	isLoading?: boolean;
}

export const QueryWrapper = ({ children, error, isLoading }: Props) => (
	<>
		{isLoading ? (
			<Loading />
		) : error ? (
			<Error>{parseQueryError(error)?.message}</Error>
		) : (
			children
		)}
	</>
);

const Loading = () => (
	<div className='grid h-full w-full place-content-center'>
		<Loader className='h-12 text-primary' />
	</div>
);

const Error = ({ children }: { children?: ReactNode }) => (
	<div className='flex gap-2'>
		<ErrorIcon color='error' />
		<p className='text-black/80'>{children}</p>
	</div>
);
