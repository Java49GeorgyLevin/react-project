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

type ageType = {ageMin: number, ageMax: number, ageAverage: number};
export function getAgeStatistics(employees: Employee[]): ageType {
    const ageInitial: number = getAge(employees[0].birthDate);
    const ageStat = {ageMin: ageInitial, ageMax: ageInitial, ageAverage: 0};
    return employees.reduce((res, cur) => {
        const curAge = getAge(cur.birthDate)
        if(curAge < res.ageMin) {
            res.ageMin = curAge;
        } else if(curAge > res.ageMax) {
            res.ageMax = curAge;
        }
        res.ageAverage += Math.round(curAge / employees.length);
        return res;
    }, ageStat);
}

type salaryType = {salaryMin: number, salaryMax: number, salaryAverage: number};
export function getSalaryStatistics(employees: Employee[]): salaryType {
    const salaryInitial = employees[0].salary;
    const salaryStat = {salaryMin: salaryInitial, salaryMax: salaryInitial, salaryAverage: 0};
    return employees.reduce((res, cur) => {
        const curSalary = cur.salary;
        if(curSalary < res.salaryMin) {
            res.salaryMin = curSalary; 
        } else if(curSalary > res.salaryMax) {
            res.salaryMax = curSalary;
        }
        res.salaryAverage += Math.round(curSalary / employees.length);
        return res;        
    }, salaryStat);
}