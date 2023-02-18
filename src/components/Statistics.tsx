import React from "react"
import { GridColumns, DataGrid } from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material"
import { useSelector } from "react-redux";
import { Employee } from "../model/Employee";

export type StatisticsProps = {foo: Function, title: string};
export const Statistics: React.FC<StatisticsProps> = ({foo, title}) => {
    const columns = React.useRef<GridColumns> ([
        {field: 'min', headerName: 'Minimal Value', headerClassName: 'header', flex: 1, headerAlign: 'center' , align: 'center'},
        {field: 'max', headerName: 'Maximal Value', headerClassName: 'header', flex: 1, headerAlign: 'center' , align: 'center'},
        {field: 'average', headerName: 'Average Value', headerClassName: 'header', flex: 1, headerAlign: 'center' , align: 'center'}
    ])

    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    return employees.length == 0 ?
    <Box>
        <Typography>No an one employee</Typography>
    </Box> 
    :    
    <Box>
        <Typography align='center'>{title}</Typography>
     
        <Box sx={{height: '80vh', width: '80vw'}}>
            <DataGrid columns={columns.current} rows={[{id: 'id', ...foo(employees)}]}/>
        </Box>
    </Box>
}