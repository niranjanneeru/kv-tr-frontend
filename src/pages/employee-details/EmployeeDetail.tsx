import { useParams } from "react-router-dom";
import Dashboard from "../../layouts/dashboard/Dashboard";
import './style.css';
import Card from "../../components/card/Card";
import createAddress from "../../utils/createAddress";

const EmployeeDetail = () => {
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
            "isActive": true,
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

    let address = createAddress(data.address);

    let department = data.department.name;

    let final_data = {
        "Employee Name": data.name,
        "Joining Date": data.joiningDate,
        "Department": department,
        "Role": data.role,
        "Experience": data.experience,
        "Status": data.isActive,
        "Address": address,
        "Employee ID": data.id
    };


    return (
        <Dashboard
            title="Employee Details"
            enableAction={true}
            action={() => { }}
            actionName="Edit"
            actionType="edit" >
            <Card data={final_data} statusFields={["Status"]} />
        </Dashboard>
    );
};

export default EmployeeDetail;
