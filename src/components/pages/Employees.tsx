import React from "react";
import { useSelector } from "react-redux";
import { Box, List, ListItem, Typography } from "@mui/material";
import { Employee } from "../../model/Employee";
export const Employees: React.FC = () => {

    const employees = useSelector<any, Employee[]>(state => state.company.employees)

    return <Box>
            <List>
                {listEmployees(employees)}
            </List>
        </Box>
}

function listEmployees(employees: Employee[]): React.ReactNode {
    return employees.map((empl, index) => <ListItem key={index}><Typography>{JSON.stringify(empl)}</Typography></ListItem>
    )
}
