import baseAPI from '../../services';

interface Login {
	email: string;
	password: string;
}

export const loginAPI = baseAPI.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body: Login) => ({
				url: '/employees/login/',
				method: 'POST',
				body
			}),
			invalidatesTags: ['LOGIN']
		}),
		getLoggedInEmployee: builder.query({
			query: () => '/employees/me',
			providesTags: ['LOGIN']
		})
	})
});

export const { useLoginMutation, useGetLoggedInEmployeeQuery } = loginAPI;
