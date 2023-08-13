import Button from '../button/Button';
import './style.css';

const Popup = ({ show, title, desc, OnConfirmAction, OnCancelAction }) => {
    if (!show) return null;

    return (
        <div className='popup-main'>
            <div className='popup-contents'>
                <div><b>{title}</b></div>
                <div>{desc}</div>
                <div className='popup-buttons'>
                    <Button label={"Confirm"} buttonType="submit" buttonDesign="create" onClickCallback={OnConfirmAction} />
                    <Button label={"Cancel"} buttonType="submit" buttonDesign="cancel" onClickCallback={OnCancelAction} />
                </div>
            </div>
        </div>
    );
};

export default Popup;
