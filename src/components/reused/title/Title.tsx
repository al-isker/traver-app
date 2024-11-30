import cn from 'clsx';

export const Title = ({ className }: { className?: string }) => (
	<h1
		className={cn(
			'text-nowrap text-2xl font-bold uppercase tracking-wide',
			className
		)}
	>
		Dag Trip
	</h1>
);
