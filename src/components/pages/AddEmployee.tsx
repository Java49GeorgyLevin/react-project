import React from "react";
import { Button, Box } from "@mui/material";
import { createNewEmployee } from "../../service/EmployeesService";
import { employeesActions } from "../../react/employeesSlice"; 
import { useDispatch } from "react-redux";

export const AddEmployee: React.FC = () => {
    const dispatch = useDispatch();

     return <Box>
            <Button onClick={() => dispatch(employeesActions.addEmployee(createNewEmployee()))}>Add a employee</Button>
        </Box>
}

