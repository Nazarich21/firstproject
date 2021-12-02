import React from 'react';
import {Admin,Resource} from 'react-admin';
import resProvider from "ra-data-simple-rest";
import {fetchUtils} from "ra-core";
import EmployeeList from "./Crud/Employee/EmployeeEdit";
import EmployeeCreate from "./Crud/Employee/EmployeeCreate";
import EmployeeEdit from "./Crud/Employee/EmployeeEdit";
import UserList from "./Crud/User/UserList";
import UserCreate from "./Crud/User/UserCreate";
import UserEdit from "./Crud/User/UserEdit";
import TestList from "./TestList";


function ChiefPanel() {
    return (
        <Admin dataProvider={resProvider('https://localhost:5001',fetchUtils.fetchJson, 'X-Total-Count')}>
            <Resource name='Employee' list={TestList} create={EmployeeCreate} edit={EmployeeEdit}/>
        </Admin>
    );
}


export default ChiefPanel;