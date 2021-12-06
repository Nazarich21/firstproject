import React, {useEffect, useState} from "react";
import {DateField, Create, SelectInput, SimpleForm, TextInput} from "react-admin";

function TrainCreate(props){
    const [routes, setRoutes] = useState([]);
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://localhost:5001/route')
            .then(response => response.json())
            .then(data =>  setRoutes);

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://localhost:5001/route')
            .then(response => response.json())
            .then(data =>  setEmployees);

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    return (
        <Create title ='Create Train' {...props}>
            <SimpleForm>
                <TextInput source disabled ='id'/>
                <SelectInput source='routeId' choices ={routes}/>
                <DateField source="departureDate" showTime />
                <SelectInput source='driverId' choices ={employees}/>
                <SelectInput source='driverAssistId' choices ={employees}/>
                <SelectInput source='trainmasterId' choices ={employees}/>
                <SelectInput source='type'  choices={[
                    { id: 'standart', name: 'Standart' },
                    { id: 'express', name: 'Expresss' },
                ]}/>
                <SelectInput source='status'  choices={[
                    { id: 'canceled', name: 'Сanceled' },
                    { id: 'arrived', name: 'Arrived' },
                    { id: 'expected', name: 'Expected' },
                ]}/>
                <SelectInput source='frequency' choices={[
                    { id: 'daily', name: 'Daily' },
                    { id: 'weekly', name: 'Weekly' },
                    { id: 'special', name: 'Special' },
                ]}/>

            </SimpleForm>
        </Create>
    )
}

export default  TrainCreate;