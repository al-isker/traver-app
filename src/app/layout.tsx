import { Metadata } from 'next';
import { Golos_Text } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

const font = Golos_Text({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800', '900'],
	variable: '--font-primary'
});

export const metadata: Metadata = {
	title: 'Stud Progress',
	description: 'Новый личный кабинет для студентов ДГМУ',
	icons: { icon: '/favicon.svg' }
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
	<html lang='ru'>
		<body className={font.className}>{children}</body>
	</html>
);

export default RootLayout;
