const averageMarkFormat = new Intl.NumberFormat('en-US', {
	minimumFractionDigits: 1,
	maximumFractionDigits: 1
});

export const averageMarkFormatter = (value: number) => {
	return averageMarkFormat.format(value);
};
