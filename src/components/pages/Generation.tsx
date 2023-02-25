import { Button, InputLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Company } from "../../service/Company";
import { createRandomEmployee } from "../../service/EmployeesService";
import { employeesActions } from "../../redux/employees-slice";
import { useDispatch } from "react-redux";
import { Employee } from "../../model/Employee";
const minAmount = 1;
const maxAmount = 50;

export const Generation: React.FC = () => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);

    function handlerAmount(event: any) {
        setAmount(+event.target.value);
    }
    function onSubmitFn(event: any) {
        event.preventDefault();
        for(let i = 0;i < amount;i++) {
            const newEmployee: Employee = createRandomEmployee();
            dispatch(employeesActions.addEmployee(newEmployee));
        }
        document.querySelector('form')!.reset();
    }

    return <Box>
        <form onSubmit={onSubmitFn}>
            <TextField type='text' required fullWidth label="Amount new employees" helperText='Input amount new employees'
            onChange={handlerAmount} inputProps={{
                min: minAmount,
                max: maxAmount
            }}>
            </TextField>
            <Button type='submit'>Submit</Button>
        </form>
    </Box>
}