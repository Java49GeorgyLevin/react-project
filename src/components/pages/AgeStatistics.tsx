import { Typography, Box } from "@mui/material"
import { useSelector } from "react-redux"
import { getAgeStatistics } from "../../service/EmployeesService"
import { Employee } from "../../model/Employee"
import React from "react"
import { DataGrid, GridColumns } from "@mui/x-data-grid"
import './table.css'

export const AgeStatistics: React.FC = () => {
    const columns = React.useRef<GridColumns> ([
        {field: 'ageMin', headerName: 'Min Age', headerClassName: 'header', flex: 1, headerAlign: 'center' , align: 'center'},
        {field: 'ageMax', headerName: 'Max Age', headerClassName: 'header', flex: 1, headerAlign: 'center' , align: 'center'},
        {field: 'ageAverage', headerName: 'Average Age', headerClassName: 'header', flex: 1, headerAlign: 'center' , align: 'center'}
    ])
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    const stat = (employees.length != 0) ? (getAgeStatistics(employees)) : {};
    return employees.length == 0 ?
    <Box>
        <Typography>No an one employee</Typography>
    </Box> 
    :
    <Box sx={{height: '80vh', width: '80vw'}}>
                <DataGrid columns={columns.current} rows={[{id: 'id', ...stat}]}/>
    </Box>
}