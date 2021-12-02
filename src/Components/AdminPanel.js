import React from 'react';
import {Admin,Resource} from 'react-admin';
import resProvider from "ra-data-simple-rest";
import {fetchUtils} from "ra-core";
import UserList from "./Crud/User/UserList";
import UserCreate from "./Crud/User/UserCreate";
import UserEdit from "./Crud/User/UserEdit";


function AdminPanel() {
    return (
        <Admin dataProvider={resProvider('https://localhost:5001',fetchUtils.fetchJson, 'X-Total-Count')}>
            <Resource name='User' list={UserList} create={UserCreate} edit={UserEdit}/>
        </Admin>
    );
}

export default AdminPanel;