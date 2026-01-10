import React from 'react';
import { InputTextStyled } from './style';

type Props = {
	label: string;
	value?: string;
	onChange?: (newValue: string) => void;
	error?: string;
};

const InputText = ({ label, value, onChange, error }: Props) => {
	return (
		<InputTextStyled isError={!!error}>
			<div className={`label ${value ? 'active' : ''}`}>{label}</div>
			<input value={value} onChange={(e) => onChange?.(e.target.value)} />
		</InputTextStyled>
	);
};

export default InputText;
