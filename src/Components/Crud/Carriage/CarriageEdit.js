import React, {useEffect, useState} from 'react';
import {Edit, SimpleForm, TextInput, SelectInput,BooleanInput } from "react-admin";


function CarriageEdit(props){
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
        <Edit title ='Edit User' {...props}>
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
        </Edit>
    )
}

export default CarriageEdit;