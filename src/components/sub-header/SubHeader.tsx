import { FC } from 'react';
import './style.css';

type SubHeaderProps = {
    title: string;
    enableAction?: boolean;
    actionName?: string;
    actionType?: 'edit' | 'create';
    action?: (e) => void;

}

const SubHeader: FC<SubHeaderProps> = ({ title, enableAction = false, actionName, actionType, action }) => {
    const icon = actionType === 'edit' ? 'edit.svg' : 'create.png';

    return (
        <div className='subheader-main'>
            <h1>{title}</h1>
            {enableAction &&
                <div className='action-button' onClick={action}>
                    <div className='action-icon-container'><img src={`assets/icons/${icon}`} alt={actionType} /></div>
                    <div className='action-name'>{actionName}</div>
                </div>}
        </div>
    );
};

export default SubHeader;
