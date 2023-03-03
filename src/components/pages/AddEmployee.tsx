import React from 'react';
import {useDispatch} from 'react-redux';
import { employeesActions } from '../../redux/employees-slice';
import { EmployeeForm } from '../forms/EmployeeForm';
export const AddEmployee: React.FC = () => {
    const dispatch = useDispatch();
    return <EmployeeForm  submitFn={(employee) =>
     {dispatch(employeesActions.addEmployee(employee));
     return true;}}/>
}