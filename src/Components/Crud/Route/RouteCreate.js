import React from 'react';
import {Create, SimpleForm, TextInput, SelectInput, BooleanInput, EmailField, DateTimeInput} from "react-admin";

//const UserCreate = (props) => {
function RouteCreate(props){
    return (
        <Create title ='Create Route' {...props}>
            <SimpleForm>
                <SelectInput source="firstStationId" />
                <DateTimeInput source='departureTime'/>
                <DateTimeInput source='arrivalTime'/>
                <SelectInput source="lastStationId" />
            </SimpleForm>
        </Create>
    );
};

export default RouteCreate;