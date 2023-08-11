import './style.css';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import SubHeader from '../../components/sub-header/SubHeader';
import { FC } from 'react';

type DashboardType = {
    title: string;
    enableAction?: boolean;
    actionName?: string;
    actionType?: 'edit' | 'create' | undefined;
    action?: (e) => void;
    children?: any;
}

const Dashboard: FC<DashboardType> = ({ title, enableAction = false, actionName = 'custom', actionType = undefined, action = () => { }, children }) => {

    return (
        <div className='parent-dashboard'>
            <div className='nav-container'>
                <Nav />
            </div>
            <div className='headers-container'>
                <Header />
                <SubHeader title={title} enableAction={enableAction} actionName={actionName} actionType={actionType} action={action} />
                {children}
            </div>
        </div>
    );
};

export default Dashboard;
