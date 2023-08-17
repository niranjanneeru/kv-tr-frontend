import { createAction } from '@reduxjs/toolkit';

const login = createAction<{
	email: string;
	name: string;
	role: string;
}>('LOGIN');

const logout = createAction('LOGOUT');

export { login, logout };
