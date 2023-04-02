import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '@/constant/store';

import { AppProcess } from '@/types/store/app-process';

const initialState: AppProcess = {
	theme: 'light',
	isBurgerOpened: false,
};

export const appProcess = createSlice({
	name: NameSpace.app,
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<AppProcess['theme']>) => {
			state.theme = action.payload;
		},
		setBurger: (state) => {
			state.isBurgerOpened = !state.isBurgerOpened;
		},
	},
});

export const { setTheme, setBurger } = appProcess.actions;
