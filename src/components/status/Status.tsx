import './style.css';

const Status = ({ statusType, inTable = true }) => {
    const data = {
        true: { label: 'Active', color: '#00FF00' },
        false: { label: 'In Active', color: '#FF0000' }
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
