import React from 'react';
import {List, Datagrid, TextField,EditButton,DeleteButton } from "react-admin";



function StationList (props) {
    return(
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='name'/>
                <EditButton basepath='/station' />
                <DeleteButton basepath='/station' />
            </Datagrid>
        </List>
    );
}

export default StationList ;