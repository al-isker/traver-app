import { useRouter } from 'next/navigation';

import { ROUTES } from '@/lib/constants/routes';

export const useAppError = () => {
	const router = useRouter();

	return (message?: string) => {
		const params = new URLSearchParams();

		params.set('message', message ?? 'Application error');

		router.replace(`${ROUTES.error}?${params.toString()}`);
	};
};
