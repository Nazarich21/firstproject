import React from 'react';
import {List, Datagrid, TextField,EditButton,DeleteButton ,DateField} from "react-admin";



function CarriageList (props) {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='trainId'/>
                <TextField source='type'/>
                <TextField source='guide1Id'/>
                <TextField source='guide2Id'/>
                <EditButton basepath='/route' />
                <DeleteButton basepath='/route' />
            </Datagrid>
        </List>
    );
}

export default CarriageList;