'use client';

import { useCallback } from 'react';

import { Message } from '@/components/reused/message/Message';

import { AVATAR_KEY, AVATAR_MAX_SIZE } from '@/lib/constants/localStorage';
import { useLocaleImage } from '@/lib/hooks/useLocalImage';
import { useShowHide } from '@/lib/hooks/useShowHide';

import { AvatarUpload } from './AvatarUpload';

export const Avatar = () => {
	const {
		image: avatar,
		setImage: setAvatar,
		removeImage: removeAvatar,
		error
	} = useLocaleImage(AVATAR_KEY, AVATAR_MAX_SIZE);

	const info = useShowHide();

	const handleUpload = useCallback(setAvatar, []);
	const handleDelete = useCallback(removeAvatar, []);

	return (
		<>
			<Message
				severity='error'
				open={error.isShow}
				onClose={error.hide}
				autoHideDuration={3000}
			>
				{error.message}
			</Message>

			<AvatarUpload
				avatar={avatar}
				onUpload={handleUpload}
				onDelete={handleDelete}
			/>
		</>
	);
};
