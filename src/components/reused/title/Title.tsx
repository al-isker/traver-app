import cn from 'clsx';

export const Title = ({ className }: { className?: string }) => (
	<h1
		className={cn(
			'font-title text-nowrap text-xl font-bold uppercase tracking-wide',
			className
		)}
	>
		DagTrip
	</h1>
);
