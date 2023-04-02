import { Navbar as MantineNavbar, Text } from '@mantine/core';

import { selectIsBurgerOpened } from '@/store/app-process/app-selectors';

import { useAppSelector } from '@/hooks';

function Navbar() {
	const isOpened = useAppSelector(selectIsBurgerOpened);

	return (
		<MantineNavbar
			p="md"
			hiddenBreakpoint="sm"
			hidden={isOpened}
			width={{ sm: 300 }}
		>
			<Text>Application navbar</Text>
		</MantineNavbar>
	);
}

export default Navbar;
