import { TextField, TextFieldProps } from '@mui/material';

interface Props extends Omit<TextFieldProps, 'fullWidth'> {}

export const InputText = (props: Props) => <TextField fullWidth {...props} />;

export type { Props as InputTextProps };
