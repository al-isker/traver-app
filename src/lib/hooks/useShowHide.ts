import { useState } from 'react';

export const useShowHide = () => {
	const [isShow, setIsShow] = useState(false);

	const show = () => setIsShow(true);
	const hide = () => setIsShow(false);

	return {
		isShow,
		show,
		hide
	};
};
