import { Typography, Box } from "@mui/material"
import { useSelector } from "react-redux"
import { getAgeStatistics } from "../../service/EmployeesService"
import { Employee } from "../../model/Employee"
import React from "react"
import './table.css'
import { Statistics } from "../Statistics"

export const AgeStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    const title: string = 'Age Statistics';
    return employees.length == 0 ?
    <Box>
        <Typography>No an one employee</Typography>
    </Box> 
    :
    <Statistics stat={getAgeStatistics(employees)} title={title}/>
}