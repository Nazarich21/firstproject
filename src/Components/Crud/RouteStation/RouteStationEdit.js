import React, {useEffect, useState} from 'react';
import {Edit, SimpleForm, NumberInput, SelectInput,DateTimeInput } from "react-admin";


function RouteStationEdit (props) {
    const [stations, setStations] = useState([]);
    const [routes,setRoutes] = useState([])
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://localhost:5001/station')
            .then(response => response.json())
            .then(data =>  setStations);

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://localhost:5001/route')
            .then(response => response.json())
            .then(data =>  setRoutes);

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    console.log()
    return (
        <Edit title ='Edit RouteStation' {...props}>
            <SimpleForm>
                <SelectInput source="Id" choices ={routes}  />
                <SelectInput source="stationId" choices ={stations}  />
                <NumberInput source="order"/>
                <DateTimeInput source='departureTime'/>
                <DateTimeInput source='arrivalTime'/>
            </SimpleForm>
        </Edit>
    )
}

export default RouteStationEdit ;