import Status from '../status/Status';
import './style.css';

const KeyValue = ({ label, value, status }) => {

    console.log(status);

    return (
        <div className='key-val-pair'>
            <label className='card-label'>{label}</label>
            {!status && <p className='card-value'>{value}</p>}
            {status && <Status statusType={true} inTable={false} />}
        </div>
    );
};

export default KeyValue;
