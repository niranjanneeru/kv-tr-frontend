import { login, logout } from '../actions/employeeAction';
import { createReducer } from '@reduxjs/toolkit';

const employeeReducer = createReducer({ name: '', email: '', role: '' }, (builder) => {
	builder.addCase(login, (state, action: { type: string; payload: any }) => {
		return action.payload;
	});

	builder.addCase(logout, () => {
		return { name: '', email: '', role: '' };
	});
});

export default employeeReducer;
