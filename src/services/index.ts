import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../constants/config';
// import { TagTypes } from './types';

const baseAPI = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: API_BASE_URL,
		prepareHeaders: (headers) => {
			headers.set('Content-Type', 'application/json');
			const token = localStorage.getItem('AuthToken');

			if (token) headers.set('authorization', `Bearer ${token}`);

			return headers;
		}
	}),
	refetchOnMountOrArgChange: true,
	refetchOnReconnect: true,
	endpoints: () => ({}),
	tagTypes: ['LIST', 'LOGIN', 'GET1']
});

export default baseAPI;
