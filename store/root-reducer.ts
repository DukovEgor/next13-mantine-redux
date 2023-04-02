import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '@/constant/store';

import { appProcess } from './app-process/app-process';
import { api } from '@/api';

export const rootReducer = combineReducers({
	[NameSpace.process]: appProcess.reducer,
	[NameSpace.api]: api.reducer,
});
