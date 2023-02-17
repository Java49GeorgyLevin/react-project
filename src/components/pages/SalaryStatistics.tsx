import React from "react";
import { getSalaryStatistics } from "../../service/EmployeesService";
import {Box, Typography} from "@mui/material";
import { useSelector } from "react-redux";
import { Employee } from "../../model/Employee";
import './table.css'
import { Statistics } from "../Statistics"

export const SalaryStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    const title: string = 'Salary Statistics';

    return employees.length == 0 ?
    <Box>
        <Typography>No an one employee</Typography>
    </Box> 
    :
    <Statistics stat={getSalaryStatistics(employees)} title={title}/>
}