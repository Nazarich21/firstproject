import React from 'react';
import {List, Datagrid, TextField,EditButton,DeleteButton } from "react-admin";



function UserList (props) {
    return(
    <List {...props}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='email'/>
            <TextField source='password'/>
            <TextField source='role'/>
            <TextField source='status'/>
            <EditButton basepath='/user' />
            <DeleteButton basepath='/user' />
        </Datagrid>
    </List>
    );
}

export default UserList;