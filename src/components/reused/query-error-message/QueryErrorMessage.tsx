import { useEffect } from 'react';

import '@reduxjs/toolkit';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { useShowHide } from '@/lib/hooks/useShowHide';
import { parseQueryError } from '@/lib/utils/parse-query-error';

import { Message } from '../message/Message';

interface Props {
	error?: FetchBaseQueryError | SerializedError;
}

export const QueryErrorMessage = ({ error }: Props) => {
	const messageCtrl = useShowHide();

	const parsedError = parseQueryError(error);

	useEffect(() => {
		if (error) {
			messageCtrl.show();
		}
	}, [error]);

	return (
		<Message
			severity='error'
			open={messageCtrl.isShow}
			onClose={messageCtrl.hide}
			autoHideDuration={5000}
		>
			{parsedError?.message ?? 'Unknown error'}
		</Message>
	);
};
