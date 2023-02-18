import React from "react";
import { getSalaryStatistics } from "../../service/EmployeesService";
import './table.css'
import { Statistics } from "../Statistics"

export const SalaryStatistics: React.FC = () => {
    const title: string = 'Salary Statistics';
    return <Statistics foo={getSalaryStatistics} title={title}/>
}