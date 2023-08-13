import { FC } from 'react';
import './style.css';

type InputPropType = {
    label: string;
    buttonType: 'submit' | 'reset' | 'button';
    onClickCallback: (e) => void;
    buttonDesign?: string;
}

const Button: FC<InputPropType> = ({ label, buttonType, onClickCallback, buttonDesign = "primary" }) => {
    const buttonClass = getCSSClass(buttonDesign);

    return (
        <button className={buttonClass} type={buttonType} onClick={onClickCallback}>{label}</button>
    );
};

export default Button;

function getCSSClass(buttonDesign: string) {
    if (buttonDesign === "primary") return "login-button";
    if (buttonDesign === "cancel") return "cancel-button";
    if (buttonDesign === "create") return "primary";
}
