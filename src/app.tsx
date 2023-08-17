import { type FC } from 'react';
import './styles/global.css';
import LoginPage from './pages/login-page/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeePage from './pages/employee-page/EmployeePage';
import EmployeeEdit from './pages/employee-edit-page/EmployeeEdit';
import EmployeeDetail from './pages/employee-details/EmployeeDetail';
import Page404 from './pages/404/404';
import { Home } from './pages/home/Home';
// import { useGetLoggedInEmployeeQuery } from './pages/login-page/api';

const App: FC = () => {
	// const { data: loginData, error: loginError } = useGetLoggedInEmployeeQuery('');

	// let profile: {
	// 	email: string;
	// 	name: string;
	// 	role: string;
	// } = loginData?.data;

	return (
		<div className='app'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<LoginPage />} />
					<Route
						path='/employees'
						element={<EmployeePage/>}
					/>
					<Route path='/employee-edit/:id' element={<EmployeeEdit editMode={true} />} />
					<Route path='/employee-create' element={<EmployeeEdit />} />
					<Route
						path='/employee/:id'
						element={<EmployeeDetail />}
					/>
					<Route path='/404' element={<Page404 />} />
					<Route />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
