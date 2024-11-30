'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { SubmitHandler } from 'react-hook-form';

import { LoginSchema } from '@/lib/types/schemes';

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
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const submit: SubmitHandler<LoginSchema> = body => {
		setIsLoading(true);

		setTimeout(() => {}, 1500);
	};

	return (
		<div className='flex h-full flex-col justify-center gap-y-4'>
			<LoginFormHeader loading={isLoading} />

			<motion.div
				className='overflow-hidden'
				variants={animation}
				initial='hide'
				animate={isLoading ? 'hide' : 'show'}
				transition={{
					type: 'spring',
					mass: 0.1
				}}
			>
				<LoginFormBody className='mx-auto' onSubmit={submit} />
			</motion.div>
		</div>
	);
};
