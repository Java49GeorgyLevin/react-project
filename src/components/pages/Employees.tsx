import React from "react";
import { useSelector } from "react-redux";
import { Box, List, ListItem, Typography } from "@mui/material";
import { Employee } from "../../model/Employee";
import {DataGrid,GridColumns} from '@mui/x-data-grid'
import './table.css'

export const Employees: React.FC = () => {
    const columns = React.useRef<GridColumns>([
        {field: 'id', headerClassName: 'header', headerName: 'ID', flex: 1, headerAlign: 'center', align: 'center'},
        {field: 'name', headerClassName: 'header', headerName: 'Employee Name', flex: 1, headerAlign: 'center', align: 'center'},
        {field: 'birthDate', headerClassName: 'header', headerName: 'Date of Burth', flex: 1, headerAlign: 'center', align: 'center'},
        {field: 'department', headerClassName: 'header', headerName: 'Department', flex: 1, headerAlign: 'center', align: 'center'},
        {field: 'salary', headerClassName: 'header', headerName: 'Salary (NIS)', flex: 0.8, type: 'number', headerAlign: 'center', align: 'center'}
    ])
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    return employees.length == 0 ?
    <Box>
        <Typography>No an one employee</Typography>
    </Box> 
    :    
    <Box sx={{height: '80vh', width: '80vw'}}>
        <DataGrid columns={columns.current} rows={employees}/>
    </Box>
}
