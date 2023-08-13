import KeyValue from "../keyvalue/KeyValue";
import './style.css';

const Card = ({ data, statusFields }) => {

    console.log(data, statusFields);

    return (
        <div className="card">
            {
                Object.keys(data).map((key) => {
                    return <KeyValue key={key} label={key} value={data[key]} status={statusFields.includes(key)} />;
                })
            }
        </div>
    );
};

export default Card;
