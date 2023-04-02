import {
	Burger,
	Header as MantineHeader,
	MediaQuery,
	Text,
	useMantineTheme,
} from '@mantine/core';

import { setBurger } from '@/store/app-process/app-process';
import { selectIsBurgerOpened } from '@/store/app-process/app-selectors';

import { useAppDispatch, useAppSelector } from '@/hooks';

function Header() {
	const dispatch = useAppDispatch();

	const isOpened = useAppSelector(selectIsBurgerOpened);

	const theme = useMantineTheme();

	return (
		<MantineHeader height={70} p="md">
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					height: '100%',
				}}
			>
				<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
					<Burger
						opened={isOpened}
						onClick={() => dispatch(setBurger())}
						size="sm"
						color={theme.colors.gray[6]}
						mr="xl"
					/>
				</MediaQuery>
				<Text>Application header</Text>
			</div>
		</MantineHeader>
	);
}

export default Header;
