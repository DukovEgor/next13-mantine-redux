import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

import { NameSpace } from '@/constant/store';

export const api = createApi({
	reducerPath: NameSpace.api,
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
	tagTypes: ['pokemon'],
	endpoints: () => ({}),
});
