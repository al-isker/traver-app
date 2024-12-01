'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
	DonutLarge,
	HomeRounded,
	PersonRounded,
	Route
} from '@mui/icons-material';
import {
	BottomNavigationAction,
	BottomNavigation as BottomNavigationMUI,
	Paper
} from '@mui/material';

import { Limiter } from '@/components/reused/limiter/Limiter';

import { TAB_ROUTES } from '@/lib/constants/routes';

const TABS = [
	{
		label: 'Главная',
		href: TAB_ROUTES.home,
		icon: <HomeRounded />
	},
	{
		label: 'Маршруты',
		href: TAB_ROUTES.routes,
		icon: <Route />
	},
	{
		label: 'Пример',
		href: TAB_ROUTES.dashboard,
		icon: <DonutLarge />
	},
	{
		label: 'Профиль',
		href: TAB_ROUTES.profile,
		icon: <PersonRounded />
	}
];

export const BottomNavigation = () => {
	const pathname = usePathname();

	const findActiveTab = () => {
		return Object.values(TAB_ROUTES).find(route => pathname.includes(route));
	};

	return (
		<Paper className='z-10 w-full rounded-none' elevation={8}>
			<Limiter>
				<BottomNavigationMUI
					component='nav'
					className='h-14 bg-transparent'
					value={findActiveTab()}
					showLabels
				>
					{TABS.map((tab, i) => (
						<BottomNavigationAction
							key={i}
							component={Link}
							label={tab.label}
							href={tab.href}
							value={tab.href}
							icon={tab.icon}
						/>
					))}
				</BottomNavigationMUI>
			</Limiter>
		</Paper>
	);
};
