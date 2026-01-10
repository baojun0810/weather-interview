import styled from 'styled-components';

type InputTextStyledProps = {
	isError?: boolean; // optional
};

export const InputTextStyled = styled.div<InputTextStyledProps>`
	background: rgba(255, 255, 255, 0.2);
	width: 100%;
	height: 60px;
	border-radius: 20px;
	position: relative;
	outline: ${(props) => (props.isError ? '1px red solid' : 'none')};

	.label {
		color: ${(props) => (props.isError ? 'red' : 'rgba(0, 0, 0, 0.4)')};
		position: absolute;
		left: 20px;
		top: 50%;
		transform: translateY(-50%);
		transition: all 0.1s ease-in-out;
	}

	&:focus-within .label,
	.label.active {
		color: ${(props) => (props.isError ? 'red' : '#000000')};
		left: 20px;
		top: 8px;
		font-size: 10px;
		transform: translateY(0);
	}

	input {
		height: 100%;
		width: 100%;
		border: none;
		outline: none;
		background: none;
		color: #000000;
		padding-top: 12px;
		padding-inline: 20px;
		position: absolute;
		top: 0;
		left: 0;
	}
`;

export const SearchButtonStyled = styled.div`
	background: #6c40b5;
	height: 60px;
	width: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	cursor: pointer;
	transition: opacity 0.3s ease-in-out;

	.search-icon {
		transition: transform 0.3s ease-in-out;
	}

	&:hover {
		opacity: 0.7;

		.search-icon {
			transform: translateY(-2px);
		}
	}
`;

export const ButtonStyled = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
	background: rgba(255, 255, 255, 1);
	transition: opacity 0.3s ease-in-out;

	&.button-icon {
		color: #808080;
		font-size: 16px;
		border-radius: 50%;
		padding: 10px;
		transition: transform 0.3s ease-in-out;
	}

	&.button-text {
		border-radius: 8px;
		padding: 6px 12px;
	}

	&:hover {
		opacity: 0.7;

		&.button-icon {
			transform: translateY(-2px);
		}
	}
`;

export const LoadingSpinStyled = styled.div`
	border: 1px solid rgba(255, 255, 255, 0.1); /* light background */
	border-top: 4px solid white; /* main color */
	border-radius: 50%;
	width: 30px;
	height: 30px;
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const EmptyStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 12px;
	padding-block: 32px;

	.image {
		width: 50%;
		height: auto;
	}

	.title {
		font-size: 15px;
	}

	.description {
		font-size: 14px;
	}
`;
