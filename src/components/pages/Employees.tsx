import React, { useState } from 'react';
import {Box, Button, List, ListItem, Typography} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Employee } from '../../model/Employee';
import {DataGrid, GridActionsCellItem, GridColumns} from '@mui/x-data-grid';
import {Delete, Edit, PersonAdd} from '@mui/icons-material';
import './table.css'
import { employeesActions } from '../../redux/employees-slice';
import { EmployeeForm } from '../forms/EmployeeForm';
import { AddEmployee } from './AddEmployee';
export const Employees: React.FC = () => {
const dispatch = useDispatch();
const authUser = useSelector<any, string>(state => state.auth.authenticated);
const[flEdit, setFlEdit] = useState<boolean>(false);
const[flAdd, setFlAdd] = useState<boolean>(false);
const editEmployee = React.useRef<Employee>();
    const columns = React.useRef<GridColumns>([
        {field: 'name', headerClassName:'header', headerName: 'Employee Name',
         flex: 1, headerAlign: 'center', align: 'center' },
        {field: 'birthDate', headerName: 'Date of Birth', flex: 1,headerClassName:'header',
         type:"date",headerAlign: 'center',align: 'center'},
        {field: 'department', headerName: 'Department',headerClassName:'header',
         flex: 1,headerAlign: 'center',align: 'center'},
        {field: 'salary', headerName: "Salary (NIS)", headerClassName:'header',
        flex: 0.7, type: "number",headerAlign: 'center', align: 'center'},
        {field: 'actions', type: "actions",getActions: (params) => {
            return authUser.includes('admin') ? [
                <GridActionsCellItem label="remove" icon={<Delete/>}
                    onClick={() =>
                        dispatch(employeesActions.removeEmployee(+params.id))
                    }/>,
                <GridActionsCellItem label="update" icon={<Edit/>}
                    onClick={() => {
                        const empl = employees.find(e => e.id == params.id);
                        if(empl) {
                            editEmployee.current = {...empl};
                        }                     
                        setFlEdit(true);
                    }}/>,
                <GridActionsCellItem label='add' icon={<PersonAdd/>}
                    onClick={() => {
                        setFlAdd(true);
                         }}
                         />  
            ] : [];
        }}
    ]);

    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    console.log(editEmployee);
    return (flEdit == false && flAdd == false) ?
    <Box sx={{height: "80vh", width: "80vw"}}>
        <DataGrid columns={columns.current} rows={employees}/>
    </Box> : flEdit == true ?

    <Box sx={{height: "80vh", width: "80vw"}}>
        <EmployeeForm submitFn={(empl) => 
            {dispatch(employeesActions.updateEmployee(empl));
            return true}} 
        employeeUpdate = {editEmployee.current}
        />
        <Button onClick={() => setFlEdit(false)}>Back to the List Employees</Button>
    </Box> :

    <Box sx={{height: "80vh", width: "80vw"}}>
       <EmployeeForm submitFn={(empl) => 
            {dispatch(employeesActions.addEmployee(empl));
            return true}} 
       />
       <Button onClick={() => setFlAdd(false)}>Back to the List Employees</Button>
    </Box>
}
// function getListItems(employees: Employee[]): React.ReactNode {
//     return employees.map((empl, index) => <ListItem key={index}><Typography>{JSON.stringify(empl)}</Typography></ListItem>)
// }