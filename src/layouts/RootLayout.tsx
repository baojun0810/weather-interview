import { Outlet, Link } from 'react-router-dom';
import RootLayoutStyle from './style';

const RootLayout = () => {
	return (
		<RootLayoutStyle>
			<nav>
				<h1 className='title'>Today's Weather</h1>
			</nav>
			<main>
				<div id='main-container'>
					<Outlet />
				</div>
			</main>
		</RootLayoutStyle>
	);
};

export default RootLayout;
