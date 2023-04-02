'use client';

import { AppShell } from '@mantine/core';
import { PropsWithChildren } from 'react';

import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

function Layout({ children }: PropsWithChildren) {
	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			navbar={<Navbar />}
			header={<Header />}
		>
			{children}
		</AppShell>
	);
}

export default Layout;
