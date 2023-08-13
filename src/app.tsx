import { type FC } from 'react';
import './styles/global.css';
import LoginPage from './pages/login-page/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeePage from './pages/employee-page/EmployeePage';
import EmployeeEdit from './pages/employee-edit-page/EmployeeEdit';
import EmployeeDetail from './pages/employee-details/EmployeeDetail';

const App: FC = () => {

  return <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/employees' element={<EmployeePage />} />
        <Route path='/employee-edit/:id' element={<EmployeeEdit editMode={true} />} />
        <Route path='/employee-create' element={<EmployeeEdit />} />
        <Route path='/employee/:id' element={<EmployeeDetail />} />
        <Route />
      </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
