import { FC } from 'react';
import './style.css';

type InputPropType = {
    label: string;
    textType: 'text' | 'password' | 'date';
    placeHolder: string;
    value: string;
    onChangeCallback: (e) => void;
}

const TextField: FC<InputPropType> = ({ label, textType, placeHolder, value, onChangeCallback }) => {
    return (
        <div className='login-input-group'>
            <label className='login-label'>{label}</label>
            <input className='login-input' type={textType} placeholder={placeHolder} value={value} onChange={onChangeCallback} />
        </div>
    );
};

export default TextField;
