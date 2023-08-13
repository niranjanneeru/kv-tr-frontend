import { FC } from 'react';
import Status from '../status/Status';
import './style.css';
import { useNavigate } from 'react-router-dom';

type ListItemType = {
    name: string;
    id: string;
    joining_date: string;
    role: string;
    statusType: string;
    experience: number;
    department: string;
    deleteAction: (event) => void;
    editAction: (event) => void;
}

const ListItem: FC<ListItemType> = ({ name, id, joining_date, role, statusType, experience, department, deleteAction, editAction }) => {
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
                    <img className='delete-action' onClick={deleteAction} src='/assets/icons/delete.png' alt='delete-each' />
                    <img className='edit-action' onClick={editAction} src='/assets/icons/edit-list.svg' alt='edit-each' />
                </div>
            </td>
        </tr>
    );
};

export default ListItem;
