import {Employee} from "../model/Employee"
import employeeConfig from '../config/employee-config.json'
import { getRandomNumber, getElement, getRandomDate} from "../utils/random"

const today: number = new Date().getFullYear();

export function createNewEmployee() {
    const { minValueId,
            maxValueId,
            arDepartmentNames,
            minSalary,
            maxSalary,
            minBirthYear,
            maxBirthYear } = employeeConfig;    
    const id: number = getRandomNumber(minValueId, maxValueId);
    const name: string = 'name' + id;
    const birthDate: string = getRandomDate(minBirthYear, maxBirthYear).toISOString().slice(0, 10);
    const department: string = getElement(arDepartmentNames);
    const salary: number = getRandomNumber(minSalary, maxSalary);

    const employee: Employee = {id, name, birthDate, department, salary};
    return employee;   
}

function getAge(fullDate: string) :number {
    return today - new Date(fullDate).getFullYear();
}

type statType = {min: number, max: number, average: number};
export function getAgeStatistics(employees: Employee[]): statType {
    const ageInitial: number = getAge(employees[0].birthDate);
    const ageStat = {min: ageInitial, max: ageInitial, average: 0};
    return employees.reduce((res, cur) => {
        const curAge = getAge(cur.birthDate)
        if(curAge < res.min) {
            res.min = curAge;
        } else if(curAge > res.max) {
            res.max = curAge;
        }
        res.average += Math.round(curAge / employees.length);
        return res;
    }, ageStat);
}

export function getSalaryStatistics(employees: Employee[]): statType {
    const salaryInitial = employees[0].salary;
    const salaryStat = {min: salaryInitial, max: salaryInitial, average: 0};
    return employees.reduce((res, cur) => {
        const curSalary = cur.salary;
        if(curSalary < res.min) {
            res.min = curSalary; 
        } else if(curSalary > res.max) {
            res.max = curSalary;
        }
        res.average += Math.round(curSalary / employees.length);
        return res;        
    }, salaryStat);
}