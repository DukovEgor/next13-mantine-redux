import { RootStore } from '@/types';

export const selectIsBurgerOpened = (store: RootStore) =>
	store.process.isBurgerOpened;
