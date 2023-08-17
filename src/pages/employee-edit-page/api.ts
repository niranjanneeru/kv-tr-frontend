import baseAPI from '../../services';

interface EmployeeCreate {
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

interface EmployeeEdit {
	id: string;
	email: string;
	name: string;
	age: number;
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
		getDepartmentList: builder.query({
			query: () => ({
				url: `/departments`,
				method: 'GET'
			}),
			providesTags: []
		}),
		getRolesList: builder.query({
			query: () => ({
				url: '/roles',
				method: 'GET'
			}),
			providesTags: []
		}),
		getStatusList: builder.query({
			query: () => ({
				url: '/status',
				method: 'GET'
			}),
			providesTags: []
		}),
		addEmployee: builder.mutation({
			query: (body: EmployeeCreate) => ({
				url: '/employees',
				method: 'POST',
				body
			}),
			invalidatesTags: ['LIST']
		}),
		updateEmployee: builder.mutation({
			query: (body: EmployeeEdit) => ({
				url: `/employees/${body.id}`,
				method: 'PATCH',
				body
			}),
			invalidatesTags: ['GET1', 'LIST']
		})
	})
});

export const {
	useGetDepartmentListQuery,
	useGetRolesListQuery,
	useGetStatusListQuery,
	useAddEmployeeMutation,
	useUpdateEmployeeMutation
} = employeeAPI;
