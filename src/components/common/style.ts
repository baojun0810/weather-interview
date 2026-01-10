import styled from 'styled-components';

type InputTextStyledProps = {
	isError?: boolean;
};

export const InputTextStyled = styled.div<InputTextStyledProps>`
	background: ${(props) => props.theme.inputBg};
	width: 100%;
	height: 40px;
	border-radius: 8px;
	position: relative;
	outline: ${(props) => (props.isError ? '1px red solid' : 'none')};

	.label {
		color: ${(props) =>
			props.isError ? 'red' : props.theme.textSecondary};
		position: absolute;
		left: 20px;
		top: 50%;
		transform: translateY(-50%);
		transition: all 0.1s ease-in-out;
		font-size: 12px;
	}

	&:focus-within .label,
	.label.active {
		color: ${(props) => (props.isError ? 'red' : props.theme.textPrimary)};
		left: 12px;
		top: 4px;
		font-size: 8px;
		transform: translateY(0);
	}

	input {
		height: 100%;
		width: 100%;
		border: none;
		outline: none;
		background: none;
		color: ${(props) => props.theme.textPrimary};
		padding-top: 12px;
		padding-inline: 12px;
		position: absolute;
		top: 0;
		left: 0;
		font-size: 12px;
	}

	@media (min-width: 601px) {
		height: 60px;
		border-radius: 20px;

		.label {
			font-size: 16px;
			top: 50%;
			transform: translateY(-50%);
		}

		&:focus-within .label,
		.label.active {
			font-size: 10px;
			left: 20px;
			top: 8px;
		}

		input {
			padding-top: 12px;
			padding-inline: 20px;
			top: 0;
			left: 0;
			font-size: 16px;
		}
	}
`;

export const SearchButtonStyled = styled.button`
	background: ${(props) => props.theme.searchButton};
	height: 40px;
	width: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	cursor: pointer;
	transition: opacity 0.3s ease-in-out;

	.search-icon {
		transition: transform 0.3s ease-in-out;
		font-size: 22px;
	}

	&:hover {
		opacity: 0.7;

		.search-icon {
			transform: translateY(-2px);
		}
	}

	@media (min-width: 601px) {
		height: 60px;
		width: 60px;
		border-radius: 20px;

		.search-icon {
			font-size: 30px;
		}
	}
`;

export const ButtonStyled = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 4px 12px 0px ${(props) => props.theme.shadowColor};
	background: ${(props) =>
		props.theme.isDark ? 'none' : props.theme.buttonBg};
	transition: opacity 0.3s ease-in-out;
	border: 'none';
	outline: ${(props) =>
		props.theme.isDark ? `2px ${props.theme.textSecondary} solid` : 'none'};
	cursor: pointer;

	&.button-icon {
		color: ${(props) => props.theme.textSecondary};
		font-size: 16px;
		border-radius: 50%;
		padding: 10px;
		transition: transform 0.3s ease-in-out;
	}

	&.button-text {
		border-radius: 8px;
		padding: 6px 12px;
		color: ${(props) => props.theme.textPrimary};
	}

	&:hover {
		opacity: 0.7;

		&.button-icon {
			transform: translateY(-2px);
		}
	}
`;

export const LoadingSpinStyled = styled.div`
	border: 1px solid ${(props) => props.theme.navBorder};
	border-top: 4px solid ${(props) => props.theme.textPrimary};
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
	padding: 40px 20px;
	min-height: 350px;

	.empty-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		max-width: 400px;
		animation: fadeIn 0.5s ease-in-out;

		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: translateY(20px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}

		.image-container {
			margin-bottom: 24px;
			position: relative;
			animation: float 3s ease-in-out infinite;

			@keyframes float {
				0%,
				100% {
					transform: translateY(0px);
				}
				50% {
					transform: translateY(-10px);
				}
			}

			.image {
				width: 140px;
				height: 140px;

				object-fit: contain;
				opacity: 0.9;
				filter: drop-shadow(
					0 4px 8px ${(props) => props.theme.shadowColor}
				);
			}
		}

		.title {
			font-size: 20px;
			font-weight: 700;
			color: ${(props) => props.theme.textPrimary};
			margin: 0 0 12px 0;
		}

		.description {
			font-size: 14px;
			color: ${(props) => props.theme.textSecondary};
			margin: 0 0 24px 0;
			line-height: 1.5;
		}
	}

	@media (min-width: 601px) {
		padding: 60px 20px;
		min-height: 400px;

		.empty-content {
			.image-container .image {
				width: 180px;
				height: 180px;
			}

			.title {
				font-size: 24px;
			}

			.description {
				font-size: 16px;
			}
		}
	}
`;
