import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/queryClient.ts';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { router } from './router/index.tsx';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './GlobalStyle.ts';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<GlobalStyle />
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
			<ToastContainer />
		</QueryClientProvider>
	</StrictMode>
);
