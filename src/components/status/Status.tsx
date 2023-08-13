import './style.css';

const Status = ({ statusType, inTable = true }) => {

    const data = {
        ACTIVE: { label: 'Active', color: '#D3F4BE' },
        INACTIVE: { label: 'In Active', color: '#FFBFBF' },
        TERMINATED: { label: 'Terminated', color: '#FF0000' },
        PROBATION: { label: 'Probation', color: '#F5ECB8' }
    };

    const className = inTable ? "status-component" : "status-normal";

    return (
        <div className={className} style={{
            backgroundColor: data[statusType].color
        }}>
            {data[statusType].label}
        </div>
    );
};

export default Status;
