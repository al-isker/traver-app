import { RegisterOptions } from 'react-hook-form';

type RequiredType = Pick<RegisterOptions, 'required'>;

export const required = (): RequiredType => ({
	required: {
		value: true,
		message: 'поле обязательно для заполнения'
	}
});

type MinLengthType = Pick<RegisterOptions, 'minLength'>;

export const minLength = (
	value: number,
	messageValue?: number
): MinLengthType => ({
	minLength: {
		value,
		message: `минимальная длина поля: ${messageValue ?? value}`
	}
});

type MaxLengthType = Pick<RegisterOptions, 'maxLength'>;

export const maxLength = (
	value: number,
	messageValue?: number
): MaxLengthType => ({
	maxLength: {
		value,
		message: `максимальная длина поля: ${messageValue ?? value}`
	}
});
