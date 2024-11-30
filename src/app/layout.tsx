import { Metadata } from 'next';
import { Audiowide, Golos_Text } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

export const metadata: Metadata = {
	title: 'Dag Trip',
	icons: { icon: '/favicon.svg' }
};

const fontPrimary = Golos_Text({
	weight: ['400', '500', '600', '700', '800', '900'],
	variable: '--font-primary'
});

const fontTitle = Audiowide({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-title'
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
	<html lang='ru'>
		<body className={`${fontPrimary.variable} ${fontTitle.variable}`}>
			{children}
		</body>
	</html>
);

export default RootLayout;
