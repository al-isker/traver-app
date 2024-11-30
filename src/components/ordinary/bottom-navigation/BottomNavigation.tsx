'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
	DonutLarge,
	HomeRounded,
	PersonRounded,
	SchoolRounded
} from '@mui/icons-material';
import {
	BottomNavigationAction,
	BottomNavigation as BottomNavigationMUI,
	Paper
} from '@mui/material';

import { Limiter } from '@/components/reused/limiter/Limiter';

import { TAB_ROUTES } from '@/lib/constants/routes';

import { BadgeDashboard } from './BadgeDashboard';
import { BadgeProfile } from './BadgeProfile';
import { BadgeRating } from './BadgeRating';
import { BadgeSession } from './BadgeSession';

const TABS = [
	{
		label: 'Главная',
		href: TAB_ROUTES.rating,
		icon: (
			<BadgeRating>
				<HomeRounded />
			</BadgeRating>
		)
	},
	{
		label: 'Сессия',
		href: TAB_ROUTES.session,
		icon: (
			<BadgeSession>
				<SchoolRounded />
			</BadgeSession>
		)
	},
	{
		label: 'Статистика',
		href: TAB_ROUTES.dashboard,
		icon: (
			<BadgeDashboard>
				<DonutLarge />
			</BadgeDashboard>
		)
	},
	{
		label: 'Профиль',
		href: TAB_ROUTES.profile,
		icon: (
			<BadgeProfile>
				<PersonRounded />
			</BadgeProfile>
		)
	}
];

export const BottomNavigation = () => {
	const pathname = usePathname();

	const findActiveTab = () => {
		return Object.values(TAB_ROUTES).find(route => pathname.includes(route));
	};

	return (
		<Paper className='z-10 w-full rounded-none' elevation={4}>
			<Limiter>
				<BottomNavigationMUI
					component='nav'
					className='h-14 bg-transparent'
					value={findActiveTab()}
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
