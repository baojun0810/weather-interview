import { type ReactNode } from 'react';
import { ButtonStyled } from './style';

type Props =
	| { icon: ReactNode; text?: never; onClick?: () => void }
	| { text: string; icon?: never; onClick?: () => void };

const Button = ({ icon, text, onClick }: Props) => {
	return (
		<ButtonStyled
			className={`${text ? 'button-text' : 'button-icon'}`}
			onClick={onClick}
		>
			{text ?? icon}
		</ButtonStyled>
	);
};

export default Button;
