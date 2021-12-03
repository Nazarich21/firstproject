import React from 'react';
import {List, Datagrid, TextField, useRecordContext,ChipField, ArrayField,ImageInput, DateField,ImageField} from "react-admin";

function EmployeeList (props) {


    const FullNameField = (props) => {
        const record = useRecordContext(props);
        console.log(record);
        console.log(record.phone)
        return <span>{record.phone} {record.phone}</span>;
    }

    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='firstName'/>
                <TextField source='lastName'/>
                <TextField source='patronymic'/>
                <DateField source='birthday'/>
                <TextField source='homeAdress'/>
                <FileField source="phones" src="Phones" title="phone" />
                <TextField source='position'/>
                <ImageInput source="photo" label="Related pictures" accept="image/*">
                    <ImageField source="src" title="title" />
                </ImageInput>
            </Datagrid>
        </List>
    );
}

export default EmployeeList;