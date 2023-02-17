import React from "react";
import { getSalaryStatistics } from "../../service/EmployeesService";
import {Box, Typography} from "@mui/material";
import { useSelector } from "react-redux";
import { Employee } from "../../model/Employee";
import { DataGrid, GridColumns } from "@mui/x-data-grid"
import './table.css'

export const SalaryStatistics: React.FC = () => {
    const columns = React.useRef<GridColumns> ([
        {field: 'salaryMin', headerName: 'Min Salary', headerClassName: 'header', flex: 1, headerAlign: 'center' , align: 'center'},
        {field: 'salaryMax', headerName: 'Max Salary', headerClassName: 'header', flex: 1, headerAlign: 'center' , align: 'center'},
        {field: 'salaryAverage', headerName: 'Average Salary', headerClassName: 'header', flex: 1, headerAlign: 'center' , align: 'center'}
    ])
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    const stat = (employees.length != 0) ? (getSalaryStatistics(employees)) : {};

    return employees.length == 0 ?
    <Box>
        <Typography>No an one employee</Typography>
    </Box> 
    :
    <Box sx={{height: '80vh', width: '80vw'}}>
        <DataGrid columns={columns.current} rows={[{id: 'id', ...stat}]}/>
    </Box>
}