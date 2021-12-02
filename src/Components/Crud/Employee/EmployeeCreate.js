import React from 'react';
import {
    Create,
    SimpleForm, TextInput, DateInput,
    TextField, ImageInput,
    ImageField, DateField, useRecordContext
} from "react-admin";

const EmployeeCreate = (props) => {

    const FullNameField = (props) => {
        const record = useRecordContext(props);

       console.log(record.phone);
    }
    return (
        <Create title ='Create User' {...props}>
            <SimpleForm>
                <TextInput source='firstName'/>
                <TextInput source='lastName'/>
                <TextInput source='patronymic'/>
                <DateInput source='birthday'/>
                <TextInput source='homeAdress'/>

                <TextInput source='phones'/>
                <TextInput source='position'/>
                <ImageInput source="photo" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                    <ImageField source="src" title="title" />
                </ImageInput>
            </SimpleForm>
        </Create>
    );
};

export default EmployeeCreate