import React from 'react';
import {List, Datagrid, TextField,EditButton,DeleteButton ,DateField} from "react-admin";



function TrainList (props) {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='routeId'/>
                <DateField source="departureDate" showTime />
                <TextField source='driverId'/>
                <TextField source='driverAssistId'/>
                <TextField source='trainmasterId'/>
                <TextField source='type'/>
                <TextField source='status'/>
                <TextField source='frequency'/>
                <EditButton basepath='/route' />
                <DeleteButton basepath='/route' />
            </Datagrid>
        </List>
    );
}

export default TrainList;