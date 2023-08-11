import { FC } from 'react';
import Status from '../status/Status';
import './style.css';
import { useNavigate } from 'react-router-dom';

type ListItemType = {
    name: string;
    id: string;
    joining_date: string;
    role: string;
    statusType: boolean;
    experience: number;
    department: string;
    deleteAction: () => void;
    editAction: () => void;
}

const ListItem: FC<ListItemType> = ({ name, id, joining_date, role, statusType, experience, department, deleteAction, editAction }) => {
    console.log(deleteAction, editAction);
    const navigate = useNavigate();

    function routeToEmployeeDetail() {
        navigate(`/employee/${id}`);
    }

    return (
        <tr onClick={routeToEmployeeDetail} className="list-item">
            <td>{name}</td>
            <td>{id}</td>
            <td>{joining_date}</td>
            <td>{role}</td>
            <td><Status statusType={statusType}></Status></td>
            <td>{experience} Yr</td>
            <td>{department}</td>
            <td>
                <div className='actions-item'>
                    <img className='delete-action' src='/assets/icons/delete.png' alt='delete-each' />
                    <img className='edit-action' src='/assets/icons/edit-list.svg' alt='edit-each' />
                </div>
            </td>
        </tr>
    );
};

export default ListItem;
