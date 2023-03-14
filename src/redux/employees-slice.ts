import {createSlice} from '@reduxjs/toolkit';
import { Employee } from '../model/Employee';
import { Company } from '../service/Company';
import { CompanyFirebase } from '../service/CompanyFirebase';
import { codeActions } from '../redux/codeSlice';
const company = new CompanyFirebase();
const initialState: {employees: Employee[]} = {
    employees: []
}
const employeesSlice = createSlice({
    initialState,
    name: "company",
    reducers: {
       setEmployees: (state, data) => {
        state.employees = data.payload;
       }
    }
})

export const employeesReducer = employeesSlice.reducer;
const actions = employeesSlice.actions;
const codeAct = codeActions.setCode;
export const employeesActions: any = {
    addEmployee : (empl: Employee)=> {
        return async (dispatch: any) => {
            try {
                await company.addEmployee(empl);
                getAllAndDispatch(dispatch);
            } catch(e) {
                dispatch(codeAct('Authorization error'));
            }
        }
    },
    updateEmployee : (empl: Employee)=> {
        return async (dispatch: any) => {
            try {
                await company.updateEmployee(empl);
                getAllAndDispatch(dispatch);
            } catch(e) {
                dispatch(codeAct('Authorization error'));
            }
        }
    },
    removeEmployee : (id: number)=> {
        return async (dispatch: any) => {
            try {
                await company.removeEmployee(id);
                getAllAndDispatch(dispatch);
            } catch(e) {
                dispatch(codeAct('Authorization error'));
        }
    }
},
    getEmployees: ()=> {
        return async (dispatch: any) => {
            getAllAndDispatch(dispatch);
        }
    },
    addBulkEmployees: (employeesAr: Employee[]) => {
        return async (dispatch: any) => {
            try {
                employeesAr.forEach(async (empl) => await company.addEmployee(empl));
                getAllAndDispatch(dispatch);
            } catch(e) {
                dispatch(codeAct('Authorization error'));
        }
    }
},

}

async function getAllAndDispatch(dispatch: any) {
    try {
        const employees = await company.getAllEmployees();
        dispatch(actions.setEmployees(employees));
        dispatch(codeAct('OK'));
    } catch(e) {
        dispatch(codeAct('Unknown Error'));
    }
}