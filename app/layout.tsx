import { Inter } from 'next/font/google';
import { Metadata } from 'next/types';
import { ReactNode } from 'react';

import Layout from '@/components/Layout';

import Providers from '@/providers';

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
	viewport: {
		maximumScale: 1,
		initialScale: 1,
		width: 'device-width',
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	);
}
