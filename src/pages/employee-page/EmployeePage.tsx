import ListItem from "../../components/list/ListItem";
import ListHeader from "../../components/list/ListHeader";
import Dashboard from "../../layouts/dashboard/Dashboard";
import './style.css';
// import data from "../../constants/data";
import { useNavigate } from "react-router-dom";
import Popup from "../../components/popup/Popup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EmployeePage = () => {
    const employeesData = useSelector((state) => {
        return state;
    });

    console.log(employeesData);

    const [popup, setPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();

    function renderCreateEmployee() {
        navigate('/employee-create');
    }

    function routeToEmployeeEdit(id) {
        return (event) => {
            navigate(`/employee-edit/${id}`);
            event.stopPropagation();
        };
    }

    function routeToEmployeeDelete(id) {
        return (event) => {
            setSelectedItem(id);
            setPopup(true);
            event.stopPropagation();
        };
    }

    const dispatch = useDispatch();

    function confirmAction() {
        console.log("Delete ", selectedItem);
        dispatch({
            type: 'EMPLOYEE.DELETE',
            payload: selectedItem
        });
        setPopup(false);
    }

    return (
        <Dashboard
            title="Employee List"
            enableAction={true}
            action={renderCreateEmployee}
            actionName="Create Employee"
            actionType="create"
        >
            <table className="table-list">
                <thead>
                    <ListHeader />
                </thead>
                <tbody>
                    {employeesData['employees'].map((employee) => {
                        return <ListItem
                            key={employee.id}
                            name={employee.name}
                            id={employee.id}
                            joining_date={employee.joiningDate}
                            role={employee.role}
                            statusType={employee.status}
                            experience={employee.experience}
                            deleteAction={routeToEmployeeDelete(employee.id)}
                            editAction={routeToEmployeeEdit(employee.id)}
                            department={employee.department.name} />;
                    })}
                </tbody>
            </table>
            <Popup show={popup} title={"Are you sure ?"} desc={"Do you really want to delete employee ?"} OnConfirmAction={confirmAction} OnCancelAction={() => { setPopup(false); }} />
        </Dashboard>
    );
};

export default EmployeePage;
