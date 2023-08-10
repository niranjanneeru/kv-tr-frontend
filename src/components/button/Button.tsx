import { FC } from 'react';
import './style.css';

type InputPropType = {
    label: string;
    buttonType: 'submit' | 'reset' | 'button';
    onClickCallback: (e) => void;
}

const Button: FC<InputPropType> = ({ label, buttonType, onClickCallback }) => {
    return (
        <button className="login-button" type={buttonType} onClick={onClickCallback}>{label}</button>
    );
};

export default Button;
