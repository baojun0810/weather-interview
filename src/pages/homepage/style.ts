import styled from 'styled-components';

export const WeatherToolBarStyled = styled.div`
	margin-bottom: 112px;

	.search-container {
		display: flex;
		gap: 8px;
		margin-bottom: 16px;
	}

	.search-col {
		flex: 1;
	}

	.error-search-callout {
		background: rgb(255, 0, 0, 0.05);
		border: 1px red solid;
		border-radius: 8px;
		padding: 20px;
		display: flex;
		align-items: center;
		gap: 16px;

		color: red;
	}

	@media (min-width: 601px) {
		.search-container {
			gap: 16px;
		}
	}
`;

export const WeatherStyled = styled.div`
	border-radius: 40px;
	border: 1px ${(props) => props.theme.weatherCardBorder} solid;
	background-color: ${(props) => props.theme.weatherCardBg};
	backdrop-filter: blur(20px);
	padding: 24px 16px;

	@media (min-width: 601px) {
		padding: 50px;
	}
`;

export const WeatherDetailsStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 4px;
	position: relative;
	margin-bottom: 20px;

	.title {
		grid-area: title;
		color: ${(props) => props.theme.textPrimary};
		font: 18px;
	}

	.celsius {
		grid-area: celsius;
		color: ${(props) => props.theme.mainCelcius};
		font-weight: 700;
		font-size: 70px;
		line-height: 70px;
	}

	.temp-range {
		grid-area: temp-range;
		color: ${(props) => props.theme.textPrimary};
		font: 18px;
	}

	.location {
		grid-area: location;
		font-weight: 700;
		color: ${(props) => props.theme.textTertiary};
	}

	.additional {
		grid-area: additional;
		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: end;
		gap: 8px;
		color: ${(props) => props.theme.textSecondary};
	}

	grid-template-areas:
		'title title additional additional'
		'celsius celsius additional additional'
		'temp-range temp-range additional additional'
		'location location additional additional';

	@media (min-width: 601px) {
		grid-template-areas:
			'title title title title'
			'celsius celsius celsius celsius'
			'temp-range temp-range temp-range temp-range'
			'location additional additional additional';
		gap: 8px;

		.celsius {
			font-size: 100px;
			line-height: 100px;
		}

		.additional {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			align-items: stretch;
		}
	}

	.weather-icon {
		position: absolute;
		right: -15px;
		top: calc(-220px * 0.5);
		animation: irregularMoveSmall 15s linear infinite;
		overflow: hidden;

		img {
			width: 190px;
			height: 190px;
			transform: scale(1.4);
		}

		@keyframes irregularMoveMedium {
			0% {
				transform: translate(0px, 0px);
			}
			10% {
				transform: translate(10px, -12px);
			}
			25% {
				transform: translate(-12px, 8px);
			}
			40% {
				transform: translate(14px, 6px);
			}
			55% {
				transform: translate(-10px, -10px);
			}
			70% {
				transform: translate(8px, 12px);
			}
			85% {
				transform: translate(-6px, -8px);
			}
			100% {
				transform: translate(0px, 0px);
			}
		}

		@keyframes irregularMoveSmall {
			0% {
				transform: translate(0px, 0px);
			}
			10% {
				transform: translate(5px, -7px);
			}
			25% {
				transform: translate(-6px, 4px);
			}
			40% {
				transform: translate(7px, 3px);
			}
			55% {
				transform: translate(-5px, -6px);
			}
			70% {
				transform: translate(4px, 7px);
			}
			85% {
				transform: translate(-3px, -4px);
			}
			100% {
				transform: translate(0px, 0px);
			}
		}

		@media (min-width: 600px) {
			top: calc(-300px * 0.5);
			animation: irregularMoveMedium 15s linear infinite;
			right: -25px;

			img {
				width: 300px;
				height: 300px;
				transform: scale(1.4);
			}
		}
	}
`;

export const WeatherSearchHistoryStyled = styled.div`
	background: ${(props) => props.theme.cardBackground};
	padding: 20px;
	border-radius: 24px;
	backdrop-filter: blur(10px);

	& > .title {
		margin-bottom: 24px;
		color: ${(props) => props.theme.textPrimary};
	}
`;

export const WeatherSearchHistoryListStyled = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 16px;
`;

export const WeatherSearchHistoryListItemStyled = styled.li`
	width: 100%;
	background: ${(props) => props.theme.historyItemBg};
	padding: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 20px;
	gap: 12px;
	color: ${(props) => props.theme.textPrimary};

	.info {
		display: block;

		.time {
			font-size: 14px;
			color: ${(props) => props.theme.textSecondary};
		}
	}

	.action {
		display: flex;
		gap: 12px;
	}

	@media (min-width: 600px) {
		.info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex: 1;
			gap: 12px;
		}
	}
`;

export const NoWeatherDetailsStyled = styled.div`
	height: 400px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px 20px;

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

			.empty-image {
				width: 180px;
				height: 180px;
				object-fit: contain;
				opacity: 0.9;
				filter: drop-shadow(
					0 4px 8px ${(props) => props.theme.shadowColor}
				);
			}
		}

		.empty-title {
			font-size: 24px;
			font-weight: 700;
			color: ${(props) => props.theme.textPrimary};
			margin: 0 0 12px 0;
		}

		.empty-description {
			font-size: 16px;
			color: ${(props) => props.theme.textSecondary};
			margin: 0 0 24px 0;
			line-height: 1.5;
		}

		.empty-hint {
			display: flex;
			align-items: center;
			gap: 8px;
			padding: 12px 20px;
			background: ${(props) => props.theme.cardBackground};
			border-radius: 12px;
			color: ${(props) => props.theme.textSecondary};
			font-size: 14px;
			backdrop-filter: blur(10px);

			svg {
				flex-shrink: 0;
				opacity: 0.8;
			}

			span {
				line-height: 1.4;
			}
		}
	}

	@media (max-width: 600px) {
		height: 350px;
		padding: 20px;

		.empty-content {
			.image-container .empty-image {
				width: 140px;
				height: 140px;
			}

			.empty-title {
				font-size: 20px;
			}

			.empty-description {
				font-size: 14px;
			}

			.empty-hint {
				font-size: 13px;
				padding: 10px 16px;
			}
		}
	}
`;
