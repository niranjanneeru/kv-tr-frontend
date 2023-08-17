import { useState, type FC, useEffect } from 'react';
import './style.css';
import TextField from '../../components/text-field/TextField';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from './api';

const LoginPage: FC = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	const [login, { data, isSuccess, isError, error: errorInLogin }] = useLoginMutation();

	useEffect(() => {
		if (isError) setError(errorInLogin['data']['message']);
	}, [isError, errorInLogin]);

	const onClickLogin = () => {
		if (username.trim() && password.trim()) {
			setError(null);
			handleLogin();
		} else {
			if (!username.trim() && !password.trim()) {
				setError('Enter Username, Password');

				return;
			}
			if (!username.trim()) {
				setError('Enter Username');

				return;
			}
			if (!password.trim()) {
				setError('Enter Password');

				return;
			}
		}
	};

	const handleLogin = () => {
		login({
			email: username,
			password: password
		});
	};

	useEffect(() => {
		if (isSuccess && data) {
			localStorage.setItem('AuthToken', data.data.token);
			navigate('/employees');
		}
	}, [data, isSuccess]);

	return (
		<div className='login-page'>
			<div className='hero'>
				<div className='wrapper-hero'>
					<img src='/assets/img/banner.png' alt='Login Image' className='login-image' />
				</div>
			</div>
			<div className='login-bg'>
				<div className='login-form'>
					<img className='login-image-logo' src='/assets/img/kv-logo.png' alt='keyvalue logo' />
					<TextField
						label='Username'
						textType='text'
						placeHolder='Username'
						value={username}
						onChangeCallback={(e) => {
							setUsername(e.target.value);
						}}
					/>
					<TextField
						label='Password'
						textType='password'
						placeHolder='Password'
						value={password}
						onChangeCallback={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<Button buttonType='submit' onClickCallback={onClickLogin} label='Log In' />
					{error && <div className='error-message'>{error}</div>}
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
