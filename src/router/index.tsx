import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/homepage';
import RootLayout from '../layouts/RootLayout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [{ index: true, element: <HomePage /> }],
	},
]);
