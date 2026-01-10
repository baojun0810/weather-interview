import styled from 'styled-components';

export const WeatherToolBarStyled = styled.div`
	margin-bottom: 112px;

	.search-container {
		display: flex;
		gap: 16px;
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
`;

export const WeatherStyled = styled.div`
	border-radius: 40px;
	border: 1px rgba(255, 255, 255, 0.5) solid;
	background-color: rgba(255, 255, 255, 0.1);
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
		color: rgba(0, 0, 0, 1);
		font: 18px;
	}

	.celsius {
		grid-area: celsius;
		color: rgba(108, 64, 181, 1);
		font-weight: 700;
		font-size: 60px;
		line-height: 60px;
	}

	.temp-range {
		grid-area: temp-range;
		color: rgba(0, 0, 0, 1);
		font: 18px;
	}

	.location {
		grid-area: location;
		font-weight: 700;
		color: rgba(102, 102, 102, 1);
	}

	.additional {
		grid-area: additional;
		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: end;
		gap: 8px;
		color: rgba(102, 102, 102, 1);
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
			grid-area: celsius;
			font-size: 100px;
			line-height: 100px;
		}

		.additional {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			align-items: stretch;

			.info {
			}
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
	background: rgba(255, 255, 255, 0.2);
	padding: 20px;
	border-radius: 24px;
	backdrop-filter: blur(10px);

	& > .title {
		margin-bottom: 16px;
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
	background: rgba(255, 255, 255, 0.4);
	padding: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 20px;
	gap: 12px;

	.info {
		display: block;

		.time {
			font-size: 14px;
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
	height: 196px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
