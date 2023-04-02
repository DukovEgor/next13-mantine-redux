'use client';

import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import RootStylesProvider from './RootStylesProvider/RootStylesProvider';
import { store } from '@/store';

function Providers({ children }: PropsWithChildren) {
	return (
		<RootStylesProvider>
			<Provider store={store}>{children}</Provider>
		</RootStylesProvider>
	);
}

export default Providers;
