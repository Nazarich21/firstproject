import React from 'react';
import {List, Datagrid, TextField,EditButton,DeleteButton ,DateField} from "react-admin";



function RouteList (props) {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='firstStationId'/>
                <DateField source="departureTime" showTime />
                <DateField source="arrivalTime" showTime />
                <TextField source='lastStationId'/>
                <EditButton basepath='/route' />
                <DeleteButton basepath='/route' />
            </Datagrid>
        </List>
    );
}

export default RouteList;