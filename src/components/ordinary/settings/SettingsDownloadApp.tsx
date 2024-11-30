'use client';

import Link from 'next/link';

import { Android, Apple, GetApp } from '@mui/icons-material';

import { Button } from '@/components/reused/button/Button';
import { Dialog } from '@/components/reused/dialog/Dialog';
import { MenuButton } from '@/components/reused/menu-button/MenuButton';

import { DOWNLOAD_LINKS } from '@/lib/constants/links';
import { useShowHide } from '@/lib/hooks/useShowHide';

export const SettingsDownloadApp = () => {
	const prompt = useShowHide();

	return (
		<>
			<MenuButton
				icon={<GetApp />}
				text='Скачать приложение'
				onClick={prompt.show}
			/>

			<Dialog open={prompt.isShow} onClose={prompt.hide}>
				<p className='px-0.5'>Какая у Вас операционная система?</p>

				<div className='mt-3 flex gap-5'>
					<Link
						className='w-full'
						href={DOWNLOAD_LINKS.android}
						target='_blank'
						passHref
					>
						<Button
							fullWidth
							size='small'
							variant='contained'
							endIcon={<Android />}
							onClick={prompt.hide}
						>
							Android
						</Button>
					</Link>
					<Link
						className='w-full'
						href={DOWNLOAD_LINKS.ios}
						target='_blank'
						passHref
					>
						<Button
							fullWidth
							size='small'
							variant='contained'
							endIcon={<Apple />}
							onClick={prompt.hide}
						>
							iOS
						</Button>
					</Link>
				</div>
			</Dialog>
		</>
	);
};
