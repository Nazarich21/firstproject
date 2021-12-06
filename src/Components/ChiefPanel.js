import React from 'react';
import {Admin,Resource} from 'react-admin';
import resProvider from "ra-data-simple-rest";
import {fetchUtils} from "ra-core";
import EmployeeList from "./Crud/Employee/EmployeeEdit";
import EmployeeCreate from "./Crud/Employee/EmployeeCreate";
import EmployeeEdit from "./Crud/Employee/EmployeeEdit";
import UserList from "./Crud/User/UserList";
import UserCreate from "./Crud/User/UserCreate";
import UserEdit from "./Crud/User/UserEdit";
import TestList from "./TestList";
import StationList from "./Crud/Station/StationList";
import StationCr from "./Crud/Station/StationCr";
import StationEdit from "./Crud/Station/StationEdit"
import RouteList from "./Crud/Route/RouteList";
import RouteCreate from "./Crud/Route/RouteCreate";
import RouteEdit from "./Crud/Route/RouteEdit";
import RouteStationList from "./Crud/RouteStation/RouteStationList";
import RouteStationCreate from "./Crud/RouteStation/RouteStationCreate";
import RouteStationEdit from "./Crud/RouteStation/RouteStationEdit"
import TrainList from "./Crud/Train/TrainList";
import TrainCreate from "./Crud/Train/TrainCreate";
import TrainEdit from "./Crud/Train/TrainEdit";
import CarriageList from "./Crud/Carriage/CarriageList";
import CarriageEdit from "./Crud/Carriage/CarriageEdit";
import CarriageCreate from "./Crud/Carriage/CarriageCreate";


function ChiefPanel() {
    return (
        <Admin dataProvider={resProvider('https://localhost:5001',fetchUtils.fetchJson, 'X-Total-Count')}>
            <Resource name='Employee' list={TestList} create={EmployeeCreate} edit={EmployeeEdit}/>
            <Resource name='Station' list={StationList} create={StationCr} edit={StationEdit}/>
            <Resource name='Route' list={RouteList} create={RouteCreate} edit={RouteEdit}/>
            <Resource name='RouteStation' list={RouteStationList} create={RouteStationCreate} edit={RouteStationEdit}/>
            <Resource name='Train' list={TrainList} create={TrainCreate} edit={TrainEdit}/>
            <Resource name='Carriage' list={CarriageList} create={CarriageEdit} edit={CarriageCreate}/>
        </Admin>

    );
}


export default ChiefPanel;