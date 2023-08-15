import { useState } from "react";
import TextField from "../../components/text-field/TextField";
import Dashboard from "../../layouts/dashboard/Dashboard";
import './style.css';
import DropDown from "../../components/drop-down/DropDown";
import departmentData from "../../constants/departmentData";
import roleData from "../../constants/roleData";
import Button from "../../components/button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from 'uuid';

const EmployeeEdit = ({ editMode = false }) => {

    let { id } = useParams();

    console.log(id);

    const employeesData = useSelector((state) => {
        return state;
    });

    let data = employeesData["employees"].find((item) => item.id === id);

    console.log(data);

    const [name, setName] = useState(editMode ? data.name : "");
    const [joiningDate, setJoiningDate] = useState(editMode ? data.joiningDate : "");
    const [experience, setExperience] = useState(editMode ? data.experience : 1);
    const [department, setDepartment] = useState(editMode ? data.departmentId : "");
    const [role, setRole] = useState(editMode ? data.role : "");
    const [status, setStatus] = useState(editMode ? data.status : "ACTIVE");
    const [addressLine1, setAddressLine1] = useState(editMode ? "data.address.addressLine1" : "");
    const [addressLine2, setaddressLine2] = useState(editMode ? "data.address.addressLine2" : "");
    const [city, setCity] = useState(editMode ? "data.address.city" : "");
    const [state, setState] = useState(editMode ? "data.address.state" : "");
    const [country, setCountry] = useState(editMode ? "data.address.country" : "");
    const [pincode, setPincode] = useState(editMode ? "data.address.pincode" : "");


    let departmentDataModified = {};

    departmentData.data.map((department) => {
        console.log(department);
        departmentDataModified[department.id] = department.name;
    });

    console.log(departmentDataModified);

    let roleDataModified = {};

    roleData.data.map((role) => {
        roleDataModified[role] = role;
    });

    let statusOptions = {
        ACTIVE: "ACTIVE",
        "INACTIVE": "IN ACTIVE",
        PROBATION: "PROBATION",
        TERMINATED: "TERMINATED"
    };

    const navigate = useNavigate();

    function routeBack() {
        navigate(-1);
    }

    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch({
            type: editMode ? 'EMPLOYEE.EDIT' : 'EMPLOYEE.CREATE',
            payload: {
                employee: {
                    "createdAt": "2023-08-06T13:13:17.445Z",
                    "updatedAt": "2023-08-06T13:15:52.523Z",
                    "deletedAt": null,
                    "id": editMode ? id : v4(),
                    "name": name,
                    "email": editMode ? data.email : `${name}@gmail.com`,
                    "departmentId": +department,
                    "role": role,
                    "joiningDate": joiningDate,
                    "status": status,
                    "experience": +experience,
                    "department": {
                        "createdAt": "2023-08-06T13:08:15.255Z",
                        "updatedAt": "2023-08-07T02:04:04.663Z",
                        "deletedAt": null,
                        "id": +department,
                        "name": departmentDataModified[Number(department)],
                        "description": "Some Long Dev1"
                    }
                }
            }
        });
        routeBack();
    }


    return (
        <Dashboard
            title={editMode ? "EditEmployee" : "Create Employee"}
            enableAction={false} >
            <div className="form">
                <TextField label="Employee Name" textType="text" placeHolder="Employee Name" value={name} isLogin={false} onChangeCallback={(e) => {
                    setName(e.target.value);
                }} />

                <TextField label="Joining Date" textType="date" placeHolder="Joining Date" value={joiningDate} isLogin={false} onChangeCallback={(e) => {
                    setJoiningDate(e.target.value);
                }} />

                <TextField label="Experience(Yrs)" textType="text" placeHolder="Experience" value={experience} isLogin={false} onChangeCallback={(e) => {
                    setExperience(e.target.value);
                }} />

                <DropDown label="Department" options={departmentDataModified} placeHolder="Department" value={department} onChangeCallback={(e) => {
                    setDepartment(e.target.value);
                }} />

                <DropDown label="Role" options={roleDataModified} placeHolder="Role" value={role} onChangeCallback={(e) => {
                    setRole(e.target.value);
                }} />

                <DropDown label="Status" options={statusOptions} placeHolder="Status" value={status} onChangeCallback={(e) => {
                    setStatus(e.target.value);
                }} />

                <div className="address">
                    <TextField label="Address" textType="text" placeHolder="Address Line 1" value={addressLine1} isLogin={false} onChangeCallback={(e) => {
                        setAddressLine1(e.target.value);
                    }} />

                    <TextField label="A" textType="text" placeHolder="Address Line 2" value={addressLine2} isLogin={false} isLabelHidden={true} onChangeCallback={(e) => {
                        setaddressLine2(e.target.value);
                    }} />

                    <TextField label="A" textType="text" placeHolder="City" value={city} isLogin={false} isLabelHidden={true} onChangeCallback={(e) => {
                        setCity(e.target.value);
                    }} />

                    <TextField label="" textType="text" placeHolder="State" value={state} isLogin={false} isLabelHidden={true} onChangeCallback={(e) => {
                        setState(e.target.value);
                    }} />

                    <TextField label="" textType="text" placeHolder="Country" value={country} isLogin={false} isLabelHidden={true} onChangeCallback={(e) => {
                        setCountry(e.target.value);
                    }} />

                    <TextField label="" textType="text" placeHolder="Pincode" value={pincode} isLogin={false} isLabelHidden={true} onChangeCallback={(e) => {
                        setPincode(e.target.value);
                    }} />
                </div>

                {editMode && <TextField disabled={true} label="Employee ID" textType="text" placeHolder="Employee ID" value={data.id} isLogin={false} onChangeCallback={() => { }} />}

                {editMode && <div style={{ visibility: "hidden" }}>{editMode && <TextField disabled={true} label="Employee ID" textType="text" placeHolder="Employee ID" value={data.id} isLogin={false} onChangeCallback={() => { }} />}</div>}
                {editMode && <div style={{ visibility: "hidden" }}>{editMode && <TextField disabled={true} label="Employee ID" textType="text" placeHolder="Employee ID" value={data.id} isLogin={false} onChangeCallback={() => { }} />}</div>}

                <div className="button-panel">
                    <Button label={editMode ? "Save" : "Create"} buttonType="submit" onClickCallback={handleSubmit} buttonDesign="create" />
                    <Button label="Cancel" buttonType="reset" onClickCallback={routeBack} buttonDesign="cancel" />
                </div>
            </div>
        </Dashboard>
    );
};

export default EmployeeEdit;
