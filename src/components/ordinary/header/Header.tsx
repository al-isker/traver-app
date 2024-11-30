import { AppBar, Toolbar } from '@mui/material';

import { Limiter } from '@/components/reused/limiter/Limiter';
import { Title } from '@/components/reused/title/Title';

export const Header = () => (
	<AppBar position='static' className='z-10'>
		<Limiter>
			<Toolbar className='px-container' disableGutters>
				<Title />
			</Toolbar>
		</Limiter>
	</AppBar>
);
