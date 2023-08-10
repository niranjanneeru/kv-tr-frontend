import { type FC } from 'react';
import './styles/global.css';
import LoginPage from './pages/login-page/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeePage from './pages/employee-page/EmployeePage';

const App: FC = () => {

  return <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/employees' element={<EmployeePage />} />
        <Route />
      </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
