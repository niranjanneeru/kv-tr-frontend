import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employeeReducer';
import { employeeAPI } from './pages/employee-page/api';

const store = configureStore({
	reducer: {
		employees: employeeReducer,
		[employeeAPI.reducerPath]: employeeAPI.reducer
	},
	middleware: (getDefMiddleware) => [...getDefMiddleware(), employeeAPI.middleware]
});

export default store;
