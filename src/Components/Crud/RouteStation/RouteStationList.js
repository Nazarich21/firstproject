import React from 'react';
import {List, Datagrid, TextField,EditButton,DeleteButton ,DateField} from "react-admin";



function RouteList (props) {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='Id'/>
                <TextField source='stationId'/>
                <TextField order='lastStationId'/>
                <DateField source="departureTime" showTime />
                <DateField source="arrivalTime" showTime />
                <EditButton basepath='/train' />
                <DeleteButton basepath='/train' />
            </Datagrid>
        </List>
    );
}

export default RouteList;