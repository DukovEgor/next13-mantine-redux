import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootStore } from '@/types';

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
