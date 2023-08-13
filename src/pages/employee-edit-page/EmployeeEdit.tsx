import { useState } from "react";
import TextField from "../../components/text-field/TextField";
import Dashboard from "../../layouts/dashboard/Dashboard";
import './style.css';
import DropDown from "../../components/drop-down/DropDown";
import departmentData from "../../constants/departmentData";
import roleData from "../../constants/roleData";
import Button from "../../components/button/Button";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeEdit = ({ editMode = false }) => {

    let { id } = useParams();

    console.log(id);

    let data: any = {
        "data": {
            "createdAt": "2023-08-06T13:13:17.445Z",
            "updatedAt": "2023-08-06T13:15:52.523Z",
            "deletedAt": null,
            "id": "8f257891-076d-413e-9c68-da6e7c0f394b",
            "name": "John Doe",
            "email": "john.doe@example.com",
            "departmentId": 1,
            "role": "UI",
            "joiningDate": "2023-07-15",
            "status": "ACTIVE",
            "experience": 5,
            "address": {
                "createdAt": "2023-08-06T13:13:17.445Z",
                "updatedAt": "2023-08-07T02:03:48.737Z",
                "deletedAt": null,
                "id": 2,
                "addressLine1": "123 Main Street",
                "addressLine2": "Apt 4B",
                "city": "New York",
                "state": "NY",
                "country": "USA",
                "pincode": "10001"
            },
            "department": {
                "createdAt": "2023-08-06T13:08:15.255Z",
                "updatedAt": "2023-08-07T02:04:04.663Z",
                "deletedAt": null,
                "id": 1,
                "name": "UI",
                "description": "Some Long Dev1"
            }
        },
        "errors": null,
        "message": "OK",
        "meta": {
            "length": 1,
            "took": 36,
            "total": 1
        }
    };

    data = data.data;

    const [name, setName] = useState(editMode ? data.name : "");
    const [joiningDate, setJoiningDate] = useState(editMode ? data.joiningDate : "");
    const [experience, setExperience] = useState(editMode ? data.experience : 1);
    const [department, setDepartment] = useState(editMode ? data.departmentId : "");
    const [role, setRole] = useState(editMode ? data.role : "");
    const [status, setStatus] = useState(editMode ? data.status : "ACTIVE");
    const [addressLine1, setAddressLine1] = useState(editMode ? data.address.addressLine1 : "");
    const [addressLine2, setaddressLine2] = useState(editMode ? data.address.addressLine2 : "");
    const [city, setCity] = useState(editMode ? data.address.city : "");
    const [state, setState] = useState(editMode ? data.address.state : "");
    const [country, setCountry] = useState(editMode ? data.address.country : "");
    const [pincode, setPincode] = useState(editMode ? data.address.pincode : "");


    let departmentDataModified = {};

    departmentData.data.map((department) => {
        departmentDataModified[department.id] = department.name;
    });

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
        navigate('/employees');
    }


    return (
        <Dashboard
            title="Create Employee"
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

                {editMode && <TextField disabled = {true} label="Employee ID" textType="text" placeHolder="Employee ID" value={data.id} isLogin={false} onChangeCallback={() => { }} />}

                <div className="button-panel">
                    <Button label={editMode ? "Save" : "Create"} buttonType="submit" onClickCallback={() => { }} buttonDesign="create" />
                    <Button label="Cancel" buttonType="reset" onClickCallback={routeBack} buttonDesign="cancel" />
                </div>
            </div>
        </Dashboard>
    );
};

export default EmployeeEdit;
