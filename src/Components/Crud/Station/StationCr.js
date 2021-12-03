import React from 'react';
import {Create, SimpleForm, TextInput, SelectInput, BooleanInput,EmailField} from "react-admin";

const StationCr = (props) => {
    return (
        <Create title ='Create Station' {...props}>
            <SimpleForm>
                <TextInput source='id'/>
                <TextInput source='name'/>
            </SimpleForm>
        </Create>
    );
};

export default StationCr;