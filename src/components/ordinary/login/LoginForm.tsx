'use client';

import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';
import { SubmitHandler } from 'react-hook-form';

import { ACCESS_TOKEN_KEY } from '@/lib/constants/localStorage';
import { ROUTES } from '@/lib/constants/routes';
import { useLoginMutation } from '@/lib/services/auth';
import { LoginSchema } from '@/lib/types/schemes';
import { parseQueryError } from '@/lib/utils/parse-query-error';

import { LoginFormBody } from './LoginFormBody';
import { LoginFormHeader } from './LoginFormHeader';

const animation = {
	hide: {
		height: 0,
		opacity: 0,
		scale: 0.8
	},
	show: {
		height: 'auto',
		opacity: 1,
		scale: 1
	}
};

export const LoginForm = () => {
	const router = useRouter();

	const [login, { error, isLoading, isSuccess }] = useLoginMutation();

	const parsedError = parseQueryError(error);

	const submit: SubmitHandler<LoginSchema> = body => {
		login(body)
			.unwrap()
			.then(({ accessToken }) => {
				localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);

				router.replace(ROUTES.rating);
			});
	};

	return (
		<div className='flex h-full flex-col justify-center gap-y-4'>
			<LoginFormHeader loading={isLoading || isSuccess} />

			<motion.div
				className='overflow-hidden'
				variants={animation}
				initial='hide'
				animate={isLoading || isSuccess ? 'hide' : 'show'}
				transition={{
					type: 'spring',
					mass: 0.1
				}}
			>
				<LoginFormBody
					className='mx-auto'
					onSubmit={submit}
					errorMessage={parsedError?.message}
				/>
			</motion.div>
		</div>
	);
};
