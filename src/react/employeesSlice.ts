import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../model/Employee";

const initialState: {employees: Array<Employee>} = {
    employees: []
}

const employeesSlice = createSlice({
    initialState,
    name: "company",
    reducers: {
        addEmployee: (state, data) => {
            state.employees.push(data.payload)}
        }
    }
)

export const employeesActions = employeesSlice.actions;
export const employeesReduser = employeesSlice.reducer