import React, {useEffect, useState} from 'react';
import {Edit, SimpleForm, TextInput, SelectInput,DateTimeInput } from "react-admin";

//const RouteEdit = (props) => {
function RouteEdit (props) {
    const [count, setCount] = useState([]);
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://localhost:5001/station')
            .then(response => response.json())
            .then(data => setCount(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    console.log()
    return (
        <Edit title ='Edit Route' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <SelectInput source="firstStationId" choices ={count}  />
                <DateTimeInput source='departureTime'/>
                <DateTimeInput source='arrivalTime'/>
                <SelectInput source="lastStationId" choices ={count} />
            </SimpleForm>
        </Edit>
    )
}

export default RouteEdit ;