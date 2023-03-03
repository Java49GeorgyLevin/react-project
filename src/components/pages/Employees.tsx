import React, { ReactNode, useRef, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Employee } from '../../model/Employee';
import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import { Delete, Edit, PersonAdd, TimeToLeave } from '@mui/icons-material';
import './table.css'
import { employeesActions } from '../../redux/employees-slice';
import { EmployeeForm } from '../forms/EmployeeForm';
import { DialogType } from '../../model/DialogType';
import { AlertDialog } from '../AlertDialog';

export const Employees: React.FC = () => {
    const dispatch = useDispatch();
    const authUser = useSelector<any, string>(state => state.auth.authenticated);    
    const [flEdit, setFlEdit] = useState<boolean>(false);
    const [flAdd, setFlAdd] = useState<boolean>(false);
    const paramsId = useRef<number>();
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    const currentEmployee = useRef<Employee>();
    const columns = React.useRef<GridColumns>([
        {
            field: 'name', headerClassName: 'header', headerName: 'Employee Name',
            flex: 1, headerAlign: 'center', align: 'center'
        },
        {
            field: 'birthDate', headerName: 'Date of Birth', flex: 1, headerClassName: 'header',
            type: "date", headerAlign: 'center', align: 'center'
        },
        {
            field: 'department', headerName: 'Department', headerClassName: 'header',
            flex: 1, headerAlign: 'center', align: 'center'
        },
        {
            field: 'salary', headerName: "Salary (NIS)", headerClassName: 'header',
            flex: 0.7, type: "number", headerAlign: 'center', align: 'center'
        },
        {
            field: 'actions', type: "actions", getActions: (params) => {
                return authUser.includes('admin') ? [
                    <GridActionsCellItem label="remove" icon={<Delete />}
                        onClick={() => {
                            paramsId.current = +params.id;
                            removeEmployee();
                        }}/>,
                    <GridActionsCellItem label="update" icon={<Edit />}
                        onClick={() => {
                            paramsId.current = +params.id;
                            setFlEdit(true)
                        }} />
                ] : [];
            }
        }

    ])
    const [open, setOpen] = useState<boolean>(false);
    const title = useRef<string>('');
    const content = useRef<string>('');
    const confirmationFn= useRef<(isOK: boolean) => void>((isOK) => {});

    function removeEmployee(): void {
        setOpen(true);
        title.current = 'Delete the employee?';
        content.current = getEmployee()!.name.toString();
        confirmationFn.current = actualDelete;
    }

    function actualDelete(isOK: boolean) {
        if(isOK) {
            dispatch(employeesActions.removeEmployee(paramsId.current));
        }
        setOpen(false);
    }
    function actualUpdate(isOK: boolean) {
        if(isOK) {
            dispatch(employeesActions.updateEmployee(currentEmployee.current));
        }
        setOpen(false);
    }

    function actualAdd(isOK: boolean) {
        if(isOK) {
            dispatch(employeesActions.addEmployee(currentEmployee.current));
        }
        setOpen(false);
    }

    function getEmployee() {
        return employees.find(empl => empl.id == paramsId.current);           
    }
    
    function getComponent(): ReactNode {
        let res: ReactNode = <Box sx={{ height: "70vh", width: "80vw" }}>
                <DataGrid columns={columns.current} rows={employees}/>
                {authUser.includes("admin") && <IconButton onClick={() => 
                setFlAdd(true)}>
                <PersonAdd/></IconButton>}
        </Box>
        if(flEdit) {
            res =<EmployeeForm submitFn={function (empl: Employee): boolean {
                currentEmployee.current = empl;
                setOpen(true);
                title.current = "Edit the employee?";
                content.current = empl.name.toString();
                confirmationFn.current = actualUpdate;
                setFlEdit(false);
                return true;
            } } employeeUpdate = {getEmployee()}/>


        } else if(flAdd) {
            res = <EmployeeForm submitFn={function (empl: Employee): boolean {
                currentEmployee.current = empl;
                setOpen(true);
                title.current = "Add the employee?";
                content.current = empl.name.toString();
                confirmationFn.current = actualAdd;
                setFlAdd(false);
                return true;
            }}/>
        }
        return res;
    }
    return <Box sx={{ height: "80vh", width: "80vw" }}>
        {getComponent()}
        <AlertDialog open={open} title={title.current} content={content.current}
        confirmationFn={confirmationFn.current}/>
    </Box>
}