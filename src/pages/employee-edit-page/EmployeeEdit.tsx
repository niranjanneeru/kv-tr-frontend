import { useState } from "react";
import TextField from "../../components/text-field/TextField";
import Dashboard from "../../layouts/dashboard/Dashboard";
import './style.css';

const EmployeeEdit = () => {

    const [name, setName] = useState("");

    return (
        <Dashboard
            title="Create Employee"
            enableAction={false} >
            <div className="form">
                <TextField label="Employee Name" textType="text" placeHolder="Employee Name" value={name} onChangeCallback={(e) => {
                    setName(e.target.value);
                }} />

                <TextField label="Joining Date" textType="date" placeHolder="Employee Name" value={name} onChangeCallback={(e) => {
                    setName(e.target.value);
                }} />
            </div>
        </Dashboard>
    );
};

export default EmployeeEdit;
