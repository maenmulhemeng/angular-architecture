import { Injectable } from '@angular/core';
import { Employee } from '../model/EmployeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees:Employee[] = 
  [
    new Employee ({firstname:"Ziraat",lastname:"Turkey"}),
    new Employee ({firstname:"RBC",lastname:"Canada"})
  ];

  constructor() { }

  // setters
  setEmployees(employees:Employee[]){
    this.employees = employees;
  }
  getEmployees(){
    return this.employees;
  }
  // Methods
  fetchEmployees(){
    return this.employees;
  }
  addEmployee(employee:Employee){
    this.employees.push(employee);
    //console.log(this.employees)
  }
  getEmployee(id){
    return this.employees.find(b => b.id == id);
  }
  updateEmployee(employee:Employee){
    this.setEmployees(this.employees.map(b => b.id == employee.id? employee:b))
  }
  deleteEmployee(id:number){
    const index = this.employees.findIndex(b => b.id == id);
    if (index > -1){
      this.employees.splice(index,1);
    }
  }
}
