import React from "react";
import { getSalaryStatistics } from "../../service/EmployeesService";
import {Box, Typography} from "@mui/material";
import { useSelector } from "react-redux";
import { Employee } from "../../model/Employee";

export const SalaryStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    return employees.length == 0 ?
    <Box>
        <Typography>No an one employee</Typography>
    </Box> 
    :
    <Box>
        <Typography>{JSON.stringify(getSalaryStatistics(employees))}</Typography>
    </Box>
}