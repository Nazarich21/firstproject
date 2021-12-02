import React from 'react';
import {TextField, SimpleForm,DateInput,ImageInput, Edit, TextInput} from "react-admin";



function EmployeeList (props) {
    return(
        <Edit title='Edit Employee' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='firstName'/>
                <TextInput source='lastName'/>
                <TextInput source='patronymic'/>
                <DateInput source='birthday'/>
                <TextInput source='homeAdress'/>
                <TextInput source='phones'/>
                <TextInput source='position'/>
                <ImageInput source='photo' title="photo"/>
            </SimpleForm>
        </Edit>
    );
}

export default EmployeeList;