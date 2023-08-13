import { FC, useState } from 'react';
import './style.css';

type InputPropType = {
    label: string;
    textType: 'text' | 'password' | 'date';
    placeHolder: string;
    value: string;
    onChangeCallback: (e) => void;
    isLogin?: boolean;
    isLabelHidden?: boolean;
    disabled?: boolean;
}

const TextField: FC<InputPropType> = ({ label, textType, placeHolder, value, onChangeCallback,
    isLogin = true, isLabelHidden = false, disabled = false }) => {

    const [dateInputType, setDateInputType] = useState('text');

    let labelClassName = isLogin ? 'login-label' : 'normal-label';
    const inputClassName = isLogin ? 'login-input' : 'normal-input';

    labelClassName = isLabelHidden ? 'hidden-label' : labelClassName;


    return (
        <div className='login-input-group'>
            <label className={labelClassName}>{label}</label>
            <input disabled={disabled}
                className={inputClassName} onBlur={function () {
                    setDateInputType('text');
                }} onFocus={function () {
                    setDateInputType(textType);
                }} type={dateInputType} placeholder={placeHolder} value={value} onChange={onChangeCallback} />
        </div>
    );
};

export default TextField;
