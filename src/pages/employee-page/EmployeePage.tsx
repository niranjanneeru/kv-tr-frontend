import ListItem from "../../components/list/ListItem";
import ListHeader from "../../components/list/ListHeader";
import Dashboard from "../../layouts/dashboard/Dashboard";
import './style.css';
import data from "../../constants/data";
import { useNavigate } from "react-router-dom";

const EmployeePage = () => {
    const navigate = useNavigate();

    function renderCreateEmployee() {
        navigate('/employee-create');
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
                    {data.data.map((employee) => {
                        return <ListItem
                            key={employee.id}
                            name={employee.name}
                            id={employee.id}
                            joining_date={employee.joiningDate}
                            role={employee.role}
                            statusType={employee.isActive}
                            experience={employee.experience}
                            deleteAction={() => { }}
                            editAction={() => { }}
                            department={employee.department.name} />;
                    })}
                </tbody>
            </table>
        </Dashboard>
    );
};

export default EmployeePage;
