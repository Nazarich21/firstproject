import React, {useEffect, useState} from 'react';
import {Create, SimpleForm, TextInput, SelectInput, BooleanInput, EmailField, DateTimeInput} from "react-admin";


function RouteCreate(props){
    const [count, setCount] = useState([]);
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://localhost:5001/station')
            .then(response => response.json())
            .then(data => setCount(data));
    }, []);
    return (
        <Create title ='Create Route' {...props}>
            <SimpleForm>
                <SelectInput source="firstStationId" choices ={count}  />
                <DateTimeInput source='departureTime'/>
                <DateTimeInput source='arrivalTime'/>
                <SelectInput source="lastStationId" choices ={count} />
            </SimpleForm>
        </Create>
    )
}

export default RouteCreate;