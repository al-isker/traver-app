import { useEffect } from 'react';

export const useEventListener = <E extends keyof WindowEventMap>(
	event: E,
	handler: (event: WindowEventMap[E]) => void,
	options?: boolean | AddEventListenerOptions
) => {
	useEffect(() => {
		window.addEventListener(event, handler, options);

		return () => {
			window.removeEventListener(event, handler, options);
		};
	}, []);
};
