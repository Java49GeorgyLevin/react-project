import { getAgeStatistics } from "../../service/EmployeesService"
import React from "react"
import './table.css'
import { Statistics } from "../Statistics"

export const AgeStatistics: React.FC = () => {
    const title: string = 'Age Statistics';
    return <Statistics foo={getAgeStatistics} title={title}/>
}