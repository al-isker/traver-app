import cn from 'clsx';

import style from './loader.module.css';

export const Loader = ({ className }: { className?: string }) => {
	return (
		<svg
			className={cn(style.svg, className)}
			display='block'
			width='100%'
			height='100%'
			viewBox='0 0 100 100'
		>
			<circle
				className={style.spinner}
				fill='transparent'
				stroke='currentColor'
				strokeWidth={8}
				strokeLinecap='round'
				cx={50}
				cy={50}
				r={45}
			/>
		</svg>
	);
};
