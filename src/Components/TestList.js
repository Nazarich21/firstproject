import React from 'react';
import {List, Datagrid, TextField,FileField, EditButton, DeleteButton, DateField, ImageField} from "react-admin";



function TestList (props) {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='firstName'/>
                <TextField source='lastName'/>
                <TextField source='patronymic'/>
                <DateField source='birthday'/>
                <TextField source='homeAdress'/>
                <TextField source='phones'/>
                <TextField source='position'/>
                <ImageField source='photo' title="photo"/>
                <FileField source="phones" src="Phones" title="phone" />
                <EditButton basepath='/Employee' />
                <DeleteButton basepath='/Employeee' />
            </Datagrid>
        </List>
    );
}

export default TestList;