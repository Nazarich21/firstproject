import React from 'react';
import {Create, SimpleForm, TextInput, SelectInput, BooleanInput,EmailField} from "react-admin";

const UserCreate = (props) => {
    return (
       <Create title ='Create User' {...props}>
           <SimpleForm>
               <EmailField source='email' />
               <TextInput source='password'/>
               <BooleanInput label="Blocked" source="status" />
               <SelectInput source="role" choices={[
                   { id: 'admin', name: 'Admin' },
                   { id: 'manager', name: 'Manager' },
                   { id: 'chief', name: 'Chief' },
                   { id: 'passenger', name: 'Passenger' },
               ]} />
           </SimpleForm>
       </Create>
    );
};

export default UserCreate;