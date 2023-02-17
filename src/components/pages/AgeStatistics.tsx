import { Typography, Box } from "@mui/material"
import { useSelector } from "react-redux"
import { getAgeStatistics } from "../../service/EmployeesService"
import { Employee } from "../../model/Employee"
import React from "react"

export const AgeStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    return employees.length == 0 ?
    <Box>
        <Typography>No an one employee</Typography>
    </Box> 
    :
    <Box>
        <Typography>{JSON.stringify(getAgeStatistics(employees))}</Typography>
    </Box>
}