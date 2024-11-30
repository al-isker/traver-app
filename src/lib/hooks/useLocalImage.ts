import { useEffect, useState } from 'react';

import { useShowHide } from './useShowHide';

interface LocaleImage {
	image: string | undefined;
	setImage: (image: File) => void;
	removeImage: () => void;
	error: {
		message: string;
		isShow: boolean;
		show: () => void;
		hide: () => void;
	};
}

export const useLocaleImage = (path: string, maxSize?: number): LocaleImage => {
	const [stateImage, setStateImage] = useState<string>();

	const message = useShowHide();
	const messageText = 'Изображение слишком большого размера';

	useEffect(() => {
		const localImage = localStorage.getItem(path);

		if (localImage) {
			setStateImage(localImage);
		}
	}, []);

	const setImage = (fileImage: File) => {
		const fr = new FileReader();

		fr.readAsDataURL(fileImage);

		fr.onload = () => {
			const convertImage = fr.result as string;
			const localImage = localStorage.getItem(path);

			if (convertImage === localImage) return;

			if (convertImage.length < (maxSize ?? 4900000)) {
				localStorage.setItem(path, convertImage);

				setStateImage(convertImage);
			} else {
				message.show();
			}
		};
	};

	const removeImage = () => {
		localStorage.removeItem(path);

		setStateImage(undefined);
	};

	return {
		image: stateImage,
		setImage,
		removeImage,
		error: {
			message: messageText,
			...message
		}
	};
};
