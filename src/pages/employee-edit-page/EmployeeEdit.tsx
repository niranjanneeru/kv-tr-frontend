import { useEffect, useState } from 'react';
import TextField from '../../components/text-field/TextField';
import Dashboard from '../../layouts/dashboard/Dashboard';
import './style.css';
import DropDown from '../../components/drop-down/DropDown';
import Button from '../../components/button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import {
	useAddEmployeeMutation,
	useGetDepartmentListQuery,
	useGetRolesListQuery,
	useGetStatusListQuery,
	useUpdateEmployeeMutation
} from './api';
import { useLazyGetEmployeeByIDQuery } from '../employee-details/api';

const EmployeeEdit = ({ editMode = false }) => {
	let { id } = useParams();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [age, setAge] = useState(20);
	const [password, setPassword] = useState('');
	const [joiningDate, setJoiningDate] = useState('');
	const [experience, setExperience] = useState(1);
	const [department, setDepartment] = useState('');
	const [role, setRole] = useState('');
	const [status, setStatus] = useState('ACTIVE');
	const [addressLine1, setAddressLine1] = useState('');
	const [addressLine2, setAddressLine2] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [country, setCountry] = useState('');
	const [pincode, setPincode] = useState('');
	const [departmentDataModified, setDepartmentData] = useState({});
	const [roleDataModified, setRoleData] = useState({});
	const [statusOptions, setStatusOptions] = useState({});

	const [getEmployeeById, { data, isSuccess, error: errorGetEmployee }] =
		useLazyGetEmployeeByIDQuery();
	const { data: departmentData, isSuccess: isDepartmentAPISucess } = useGetDepartmentListQuery('');
	const { data: rolesData, isSuccess: isRolesAPISucess } = useGetRolesListQuery('');
	const { data: statusData, isSuccess: isStatusAPISucess } = useGetStatusListQuery('');
	const [addEmployee, { data: employeeData, isSuccess: isAddingSuccess, error: addErrors }] =
		useAddEmployeeMutation();
	const [updateEmployee, { isSuccess: isUpdatingSuccess, error: errorUpdateEmployee }] =
		useUpdateEmployeeMutation();
	const navigate = useNavigate();

	function routeBack() {
		navigate(-1);
	}

	function handleSubmit() {
		if (name.trim() === '') {
			alert('Empty Name');

			return;
		}

		if (email.trim() === '') {
			alert('Empty Email');

			return;
		}

		if (!editMode && password.trim() === '') {
			alert('Empty Password');

			return;
		}

		if (editMode) {
			updateEmployee({
				id: id,
				name: name,
				email: email,
				age: age,
				joiningDate: joiningDate,
				experience: +experience,
				departmentId: +department,
				role: role,
				status: status,
				address: {
					address_line_1: addressLine1,
					address_line_2: addressLine2,
					city: city,
					state: state,
					country: country,
					pincode: pincode
				}
			});
			routeBack();
		} else {
			addEmployee({
				email: email,
				age: age,
				password: password,
				name: name,
				joiningDate: joiningDate,
				experience: +experience,
				departmentId: +department,
				role: role,
				status: status,
				address: {
					address_line_1: addressLine1,
					address_line_2: addressLine2,
					city: city,
					state: state,
					country: country,
					pincode: pincode
				}
			});
		}
	}

	useEffect(() => {
		if (addErrors) if (addErrors['status'] === 404) alert(addErrors['data']['message']);
	}, [addErrors]);

	useEffect(() => {
		if (errorGetEmployee && errorGetEmployee['status'] === 403) navigate('/login');
	}, [errorGetEmployee]);

	useEffect(() => {
		if (errorGetEmployee && errorGetEmployee['status'] === 403) alert('No Permisssion');
	}, [errorUpdateEmployee]);

	useEffect(() => {
		if (editMode) getEmployeeById(id);
	}, []);

	useEffect(() => {
		if (isSuccess) {
			setAge(data.data.age);
			setName(data?.data?.name);
			setEmail(data.data.email);
			setJoiningDate(data.data.joiningDate);
			setExperience(data.data.experience);
			setDepartment(data.data.departmentId);
			setRole(data.data.role);
			setStatus(data.data.status);
			setAddressLine1(data.data.address.addressLine1);
			setAddressLine2(data.data.address.addressLine2);
			setCity(data.data.address.city);
			setState(data.data.address.state);
			setPincode(data.data.address.pincode);
			setCountry(data.data.address.country);
		}
	}, [isSuccess]);

	useEffect(() => {
		if (isUpdatingSuccess) routeBack();
	}, [isUpdatingSuccess]);

	useEffect(() => {
		if (isAddingSuccess) routeBack();
		console.log(employeeData);
	}, [isAddingSuccess]);

	useEffect(() => {
		let temp = {};

		if (isRolesAPISucess)
			rolesData.data.map((role) => {
				temp[role] = role;
			});
		setRoleData(temp);
	}, [isRolesAPISucess]);

	useEffect(() => {
		let temp = {};

		if (isDepartmentAPISucess)
			departmentData?.data.forEach((department) => {
				temp[department.id] = department.name;
			});
		setDepartmentData(temp);
	}, [isDepartmentAPISucess]);

	useEffect(() => {
		let temp = {};

		if (isStatusAPISucess)
			statusData.data.forEach((status) => {
				temp[status] = status;
			});
		setStatusOptions(temp);
	}, [isStatusAPISucess]);

	return (
		<Dashboard title={editMode ? 'Edit Employee' : 'Create Employee'} enableAction={false}>
			<div className='form'>
				<TextField
					label='Employee Name'
					textType='text'
					placeHolder='Employee Name'
					value={name}
					isLogin={false}
					onChangeCallback={(e) => {
						setName(e.target.value);
					}}
				/>

				<TextField
					disabled={editMode}
					label='Employee Email'
					textType='email'
					placeHolder='Email'
					value={email}
					isLogin={false}
					onChangeCallback={(e) => {
						setEmail(e.target.value);
					}}
				/>

				{!editMode && (
					<TextField
						disabled={editMode}
						label='Employee Password'
						textType='password'
						placeHolder='Password'
						value={password}
						isLogin={false}
						onChangeCallback={(e) => {
							setPassword(e.target.value);
						}}
					/>
				)}

				<TextField
					label='Joining Date'
					textType='date'
					placeHolder='Joining Date'
					value={joiningDate}
					isLogin={false}
					onChangeCallback={(e) => {
						setJoiningDate(e.target.value);
					}}
				/>

				<TextField
					label='Experience(Yrs)'
					textType='text'
					placeHolder='Experience'
					value={experience as unknown as string}
					isLogin={false}
					onChangeCallback={(e) => {
						setExperience(e.target.value);
					}}
				/>

				<TextField
					label='Age'
					textType='text'
					placeHolder='Age'
					value={age as unknown as string}
					isLogin={false}
					onChangeCallback={(e) => {
						setAge(e.target.value);
					}}
				/>

				<DropDown
					label='Department'
					options={departmentDataModified}
					placeHolder='Department'
					value={department}
					onChangeCallback={(e) => {
						setDepartment(e.target.value);
					}}
				/>

				<DropDown
					label='Role'
					options={roleDataModified}
					placeHolder='Role'
					value={role}
					onChangeCallback={(e) => {
						setRole(e.target.value);
					}}
				/>

				<DropDown
					label='Status'
					options={statusOptions}
					placeHolder='Status'
					value={status}
					onChangeCallback={(e) => {
						setStatus(e.target.value);
					}}
				/>

				{editMode && (
					<TextField
						label='Employee ID'
						disabled={true}
						textType='text'
						placeHolder='Employee ID'
						value={id}
						isLogin={false}
						onChangeCallback={() => {}}
					/>
				)}

				<div className='address'>
					<TextField
						label='Address'
						textType='text'
						placeHolder='Address Line 1'
						value={addressLine1}
						isLogin={false}
						onChangeCallback={(e) => {
							setAddressLine1(e.target.value);
						}}
					/>

					<TextField
						label='A'
						textType='text'
						placeHolder='Address Line 2'
						value={addressLine2}
						isLogin={false}
						isLabelHidden={true}
						onChangeCallback={(e) => {
							setAddressLine2(e.target.value);
						}}
					/>

					<TextField
						label='A'
						textType='text'
						placeHolder='City'
						value={city}
						isLogin={false}
						isLabelHidden={true}
						onChangeCallback={(e) => {
							setCity(e.target.value);
						}}
					/>

					<TextField
						label=''
						textType='text'
						placeHolder='State'
						value={state}
						isLogin={false}
						isLabelHidden={true}
						onChangeCallback={(e) => {
							setState(e.target.value);
						}}
					/>

					<TextField
						label=''
						textType='text'
						placeHolder='Country'
						value={country}
						isLogin={false}
						isLabelHidden={true}
						onChangeCallback={(e) => {
							setCountry(e.target.value);
						}}
					/>

					<TextField
						label=''
						textType='text'
						placeHolder='Pincode'
						value={pincode}
						isLogin={false}
						isLabelHidden={true}
						onChangeCallback={(e) => {
							setPincode(e.target.value);
						}}
					/>
				</div>

				<div className='button-panel'>
					<Button
						label={editMode ? 'Save' : 'Create'}
						buttonType='submit'
						onClickCallback={handleSubmit}
						buttonDesign='create'
					/>
					<Button
						label='Cancel'
						buttonType='reset'
						onClickCallback={routeBack}
						buttonDesign='cancel'
					/>
				</div>
			</div>
		</Dashboard>
	);
};

export default EmployeeEdit;
