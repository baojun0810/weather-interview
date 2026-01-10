import styled from 'styled-components';
import bgImage from '../assets/bg-light.png';

const RootLayoutStyle = styled.div`
	background-image: url(${bgImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	min-height: 100vh;
	background-color: red;

	nav {
		padding: 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.title {
			font-size: 24px;
		}
	}

	main {
		#main-container {
			width: 100%;
			max-width: 768px;
			margin: 0 auto;
			padding-inline: 16px;
			padding-bottom: 28px;
		}
	}
`;

export default RootLayoutStyle;
