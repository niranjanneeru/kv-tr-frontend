import * as reactRouterDom from 'react-router-dom';
import Dashboard from '../../layouts/dashboard/Dashboard';
import './style.css';
import Card from '../../components/card/Card';
import { useGetEmployeeByIDQuery } from './api';
import createAddress from '../../utils/createAddress';
import { useEffect, useState } from 'react';
import { useGetLoggedInEmployeeQuery } from '../login-page/api';

const EmployeeDetail = () => {
	let { id } = reactRouterDom.useParams();
	const navigate = reactRouterDom.useNavigate();

	const { data: loginData, isSuccess: loginSuccess } = useGetLoggedInEmployeeQuery('');
	const [profile, setProfile] = useState({ role: '', email: '', name: '' });

	useEffect(() => {
		setProfile(loginData?.data);
		console.log(loginData?.data);
	}, [loginData, loginSuccess]);

	const { data: employeesData, isSuccess, isError, error } = useGetEmployeeByIDQuery(id);

	useEffect(() => {
		if (error && error['status'] === 403) navigate('/login');
		if (isError) navigate('/404');
	}, [isError, error]);

	let final_data;

	if (isSuccess) {
		let data = employeesData.data;

		final_data = {
			'Employee Name': data.name,
			'Joining Date': data.joiningDate,
			Department: data.department.name,
			Role: data.role,
			Experience: data.experience,
			Status: data.status,
			Address: createAddress(data.address),
			'Employee ID': id,
			Email: data.email
		};
	}

	function routeToEmployeeEdit() {
		navigate(`/employee-edit/${id}`);
	}

	return (
		<Dashboard
			title='Employee Details'
			enableAction={profile?.role === 'HR' || profile?.email === employeesData?.data?.email}
			action={routeToEmployeeEdit}
			actionName='Edit'
			actionType='edit'
		>
			{isSuccess && <Card data={final_data} statusFields={['Status']} />}
		</Dashboard>
	);
};

export default EmployeeDetail;
