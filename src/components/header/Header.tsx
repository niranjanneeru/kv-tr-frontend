import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import './style.css';
import { useDispatch } from 'react-redux';
import baseAPI from '../../services';
import { logout } from '../../actions/employeeAction';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<div className='header-shadow-box'>
			<Button
				buttonType='submit'
				label='Log Out'
				buttonDesign='cancel'
				onClickCallback={() => {
					localStorage.removeItem('AuthToken');
					dispatch(baseAPI.util.resetApiState());
					dispatch(logout());
					navigate('/login');
				}}
			></Button>
		</div>
	);
};

export default Header;
