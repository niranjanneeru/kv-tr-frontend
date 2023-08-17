import ListItem from '../../components/list/ListItem';
import ListHeader from '../../components/list/ListHeader';
import Dashboard from '../../layouts/dashboard/Dashboard';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Popup from '../../components/popup/Popup';
import { useEffect, useState } from 'react';
import { useDeleteEmployeeMutation, useGetEmployeeListQuery } from './api';
import { useGetLoggedInEmployeeQuery } from '../login-page/api';

const EmployeePage = () => {
	const { data: loginData, isSuccess: loginSuccess } = useGetLoggedInEmployeeQuery('');
	const [profile, setProfile] = useState({ role: '', email: '', name: '' });

	useEffect(() => {
		setProfile(loginData?.data);
		console.log(loginData?.data);
	}, [loginData, loginSuccess]);

	const { data: employeesData, isSuccess, error } = useGetEmployeeListQuery();
	const [deleteEmployee, { isSuccess: deletionSuccess }] = useDeleteEmployeeMutation();

	const [popup, setPopup] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const navigate = useNavigate();

	function renderCreateEmployee() {
		navigate('/employee-create');
	}

	function routeToEmployeeEdit(id) {
		if (profile?.role === 'HR')
			return (event) => {
				navigate(`/employee-edit/${id}`);
				event.stopPropagation();
			};
	}

	function routeToEmployeeDelete(id) {
		if (profile?.role === 'HR')
			return (event) => {
				setSelectedItem(id);
				setPopup(true);
				event.stopPropagation();
			};
	}

	function confirmAction() {
		console.log('Delete ', selectedItem);
		deleteEmployee(selectedItem);
	}

	useEffect(() => {
		if (error && error['status'] === 403) navigate('/login');
	}, [error]);

	useEffect(() => {
		if (deletionSuccess) {
			setPopup(false);
			setSelectedItem(null);
		}
	}, [deletionSuccess]);

	return (
		<Dashboard
			title='Employee List'
			enableAction={profile?.role === 'HR'}
			action={renderCreateEmployee}
			actionName='Create Employee'
			actionType='create'
		>
			<table className='table-list'>
				<thead>
					<ListHeader showAction={profile?.role === 'HR'} />
				</thead>
				<tbody>
					{isSuccess &&
						employeesData['data'].map((employee) => {
							return (
								<ListItem
									key={employee.id}
									name={employee.name}
									id={employee.id}
									joining_date={employee.joiningDate}
									role={employee.role}
									statusType={employee.status}
									experience={employee.experience}
									deleteAction={routeToEmployeeDelete(employee.id)}
									editAction={routeToEmployeeEdit(employee.id)}
									department={employee.department.name}
									showActions={profile?.role === 'HR'}
								/>
							);
						})}
				</tbody>
			</table>
			<Popup
				show={popup}
				title={'Are you sure ?'}
				desc={'Do you really want to delete employee ?'}
				OnConfirmAction={confirmAction}
				OnCancelAction={() => {
					setPopup(false);
				}}
			/>
		</Dashboard>
	);
};

export default EmployeePage;
