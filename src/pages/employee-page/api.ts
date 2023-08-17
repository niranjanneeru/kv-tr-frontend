import baseAPI from '../../services';

interface Employee {
	email: string;
	name: string;
	age: number;
	password: string;
	role: string;
	status: string;
	address: {
		address_line_1: string;
		address_line_2: string;
		city: string;
		state: string;
		country: string;
		pincode: string;
	};
	departmentId: number;
	joiningDate: string;
	experience: number;
}

export const employeeAPI = baseAPI.injectEndpoints({
	endpoints: (builder) => ({
		getEmployeeList: builder.query<Employee[], void>({
			query: () => ({
				url: '/employees',
				method: 'GET'
			}),
			providesTags: ['LIST']
		}),
		deleteEmployee: builder.mutation({
			query: (id) => ({
				url: `/employees/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['LIST']
		})
	})
});

export const { useGetEmployeeListQuery, useDeleteEmployeeMutation } = employeeAPI;
