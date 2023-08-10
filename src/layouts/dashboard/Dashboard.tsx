import './style.css';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header';
import SubHeader from '../../components/sub-header/SubHeader';

const Dashboard = () => {
    return (
        <div className='parent-dashboard'>
            <div className='nav-container'>
                <Nav />
            </div>
            <div className='headers-container'>
                <Header />
                <SubHeader title="Employee Something" enableAction={true} actionName='Create Employee' actionType='create' action={() => { }} />
            </div>
        </div>
    );
};

export default Dashboard;
