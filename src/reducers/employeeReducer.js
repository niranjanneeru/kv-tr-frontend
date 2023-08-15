const intialState = {
    "data": [
        {
            "createdAt": "2023-08-06T13:11:30.944Z",
            "updatedAt": "2023-08-06T13:11:30.944Z",
            "deletedAt": null,
            "id": "4f58e1f7-ff4f-44e1-a538-fb5dc1a4c60e",
            "name": "Daniel Brown",
            "email": "daniel.brown@example.com",
            "departmentId": 1,
            "role": "MANAGER",
            "joiningDate": "2023-10-20",
            "status": "ACTIVE",
            "experience": 6,
            "department": {
                "createdAt": "2023-08-06T13:08:15.255Z",
                "updatedAt": "2023-08-07T02:04:04.663Z",
                "deletedAt": null,
                "id": 1,
                "name": "UI",
                "description": "Some Long Dev1"
            }
        },
        {
            "createdAt": "2023-08-06T13:13:17.445Z",
            "updatedAt": "2023-08-06T13:15:52.523Z",
            "deletedAt": null,
            "id": "8f257891-076d-413e-9c68-da6e7c0f394b",
            "name": "John Doe",
            "email": "john.doe@example.com",
            "departmentId": 1,
            "role": "DEV",
            "joiningDate": "2023-07-15",
            "status": "INACTIVE",
            "experience": 5,
            "department": {
                "createdAt": "2023-08-06T13:08:15.255Z",
                "updatedAt": "2023-08-07T02:04:04.663Z",
                "deletedAt": null,
                "id": 1,
                "name": "UI",
                "description": "Some Long Dev1"
            }
        }
    ],
    "errors": null,
    "message": "OK",
    "meta": {
        "length": 2,
        "took": 29,
        "total": 6,
        "pageSize": 2,
        "page": 1
    }
};


const employeeReducer = (state = intialState.data, action) => {
    switch (action.type) {
        case 'EMPLOYEE.EDIT':
            console.log(action.payload.employee);
            console.log([...(state.filter((item) => item.id !== action.payload.employee.id)), action.payload.employee]);

            return [...(state.filter((item) => item.id !== action.payload.employee.id)), action.payload.employee];

        case 'EMPLOYEE.DELETE':
            return state.filter((item) => item.id !== action.payload);

        case 'EMPLOYEE.CREATE':
            return [...state, action.payload.employee];

        default:
            return state;
    }
};

export default employeeReducer;
