import React from 'react';
import {Edit, SimpleForm, TextInput, SelectInput,BooleanInput } from "react-admin";

//const UserEdit = (props) => {
function UserEdit(props){
    return (
        <Edit title ='Edit User' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='email' />
                <TextInput source='password'/>
                <BooleanInput label="Blocked" source="status" />
                <SelectInput source="role" choices={[
                    { id: 'admin', name: 'Admin' },
                    { id: 'manager', name: 'Manager' },
                    { id: 'chief', name: 'Chief' },
                    { id: 'passenger', name: 'Passenger' },
                ]} />
            </SimpleForm>
        </Edit>
    )
}

export default UserEdit;