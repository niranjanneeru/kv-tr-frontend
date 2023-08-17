import baseAPI from '../../services';

export const employeeAPI = baseAPI.injectEndpoints({
	endpoints: (builder) => ({
		getEmployeeByID: builder.query({
			query: (id) => ({
				url: `/employees/${id}`,
				method: 'GET'
			}),
			providesTags: ['GET1']
		})
	})
});

export const { useGetEmployeeByIDQuery, useLazyGetEmployeeByIDQuery } = employeeAPI;
