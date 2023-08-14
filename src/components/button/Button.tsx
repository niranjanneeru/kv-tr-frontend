import { FC } from 'react';
import './style.css';

type ButtonType = {
    label: string;
    buttonType: 'submit' | 'reset' | 'button';
    onClickCallback: (e) => void;
    buttonDesign?: string;
}

const Button: FC<ButtonType> = ({ label, buttonType, onClickCallback, buttonDesign = "primary" }) => {
    const buttonClass = getCSSClass(buttonDesign);

    return (
        <button className={buttonClass} type={buttonType} onClick={onClickCallback} data-testid="button-create-id" >{label}</button>
    );
};

export default Button;

function getCSSClass(buttonDesign: string) {
    if (buttonDesign === "primary") return "login-button";
    if (buttonDesign === "cancel") return "cancel-button";
    if (buttonDesign === "create") return "primary";
}
