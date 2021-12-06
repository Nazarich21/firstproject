import React, {useEffect, useState} from 'react';
import {Create, SimpleForm, TextInput, SelectInput,BooleanInput } from "react-admin";


function CarriageCreate(props){
    const [routes, setRoutes] = useState([]);
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://localhost:5001/employee')
            .then(response => response.json())
            .then(data =>  setRoutes);

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    return (
        <Create title ='Create Carriage' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <SelectInput  source='trainId' />
                <SelectInput  source='guide1Id' choices={routes}/>
                <SelectInput  source='guide2Id' choices={routes}/>
                <SelectInput source="type" choices={[
                    { id: 'standart', name: 'Standart' },
                    { id: 'Express', name: 'Express' },
                ]} />
            </SimpleForm>
        </Create>
    )
}

export default  CarriageCreate;