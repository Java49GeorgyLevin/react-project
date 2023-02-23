import { Employee } from "../model/Employee";

export class Company {
    private employees: Employee[] = [];  
    addEmployee(empl: Employee): void {
        this.employees.push(empl);
    }
    updateEmployee(id: number): void {
        const empl = this.employees.find(e => e.id == id);
        if (empl != null) {
            const factor: number = empl.salary < 20000 ? 1.1 : 0.9;
            const copyEmpl: Employee = {...empl, salary: empl.salary * factor};
            const index = this.employees.findIndex(e => e.id == id);
            this.employees[index] = copyEmpl;
        }
    }
    getEmployee(id: number): Employee | null {
        const index: number = this.employees.findIndex(e => e.id === id);
        return index < 0 ? null : this.employees[index];
    }
    removeEmployee(id: number): void {
        const index: number = this.employees.findIndex(e => e.id === id);
        index >=0 && this.employees.splice(index, 1);

    }
    getAllEmployees(): Employee[] {
        return this.employees.slice();
    }
}