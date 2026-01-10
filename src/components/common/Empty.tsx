import React from 'react';
import { EmptyStyled } from './style';
import EmptyImage from '../../assets/no data.png';

type Props = {
	title: string;
	description?: string;
};

const Empty = ({ title, description }: Props) => {
	return (
		<EmptyStyled>
			<img src={EmptyImage} alt='empty' className='image' />
			<div className='title'>{title}</div>
			{description && <div className='description'>{description}</div>}
		</EmptyStyled>
	);
};

export default Empty;
