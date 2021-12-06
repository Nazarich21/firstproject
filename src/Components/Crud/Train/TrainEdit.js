import React, {useEffect, useState} from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    DateTimeInput, TextField, DateField, EditButton, DeleteButton,
} from "react-admin";


function TrainEdit(props) {
    const [route, setRoute] = useState([]);
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://localhost:5001/route')
            .then(response => response.json())
            .then(data => setRoute(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    return (
        <Edit title ='Edit Route' {...props}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <SelectInput source='routeId' />
                <DateTimeInput source="departureDate" />
                <TextInput source='driverId'/>
                <TextInput source='driverAssistId'/>
                <TextInput source='trainmasterId'/>
                <TextInput source='type'/>
                <TextInput source='status'/>
                <TextInput source='frequency'/>

            </SimpleForm>
        </Edit>
    )
}

export default TrainEdit;