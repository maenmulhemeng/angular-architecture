import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Employee } from '../model/EmployeeModel';
import { ModelsFactory } from '../model/ModelsFactory';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientModule]});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Clear employees', ()=>{
    // Act 
    service.setEmployees([]);
    // Assert
    expect(service.getEmployees().length).toBe(0);
  })

  it('Add a employee', ()=>{
    // Arrange
    const employee:Employee = ModelsFactory.createTestEmployee();
    employee.id=1;
    // Act
    service.addEmployee(employee)
    // Assert
    expect(service.getEmployee(1)).toBe(employee);
  })
  it('Delete a employee', ()=>{
    // Arrange
    //service.setEmployees([]);
    const employee1:Employee = ModelsFactory.createTestEmployee();
    employee1.id=1;
    const employee2:Employee = ModelsFactory.createTestEmployee();
    employee2.id=2;
    service.setEmployees([employee1,employee2]);

    // Act
    service.deleteEmployee(1);
    // Assert
    expect(service.getEmployee(1)).toBeUndefined();
    expect(service.getEmployees().length).toBe(1); 
  })
  it('Update a employee', ()=>{
    // Arrange
    //service.setEmployees([]);
    const employees:Employee[] = ModelsFactory.createTestEmployees();
    service.setEmployees(employees);
    const employee1:Employee =  ModelsFactory.createTestEmployee();
    employee1.id = 1;
    employee1.firstname="new firstname";
    employee1.lastname = "new lastname";
    

    const employee2:Employee =  ModelsFactory.createTestEmployee();
    employee2.id = 1;
    employee2.firstname="other firstname";
    employee2.lastname = "other lastname";
   

    // Act
    service.updateEmployee(employee1);
    // Assert
    expect(service.getEmployee(1).lastname).toBe("new lastname");
    expect(service.getEmployee(1).firstname).toBe("new firstname");
    expect(service.getEmployee(1)).toBe(employee1);
    
    service.updateEmployee(employee2);
    expect(service.getEmployee(1).lastname).toBe("other lastname");
    expect(service.getEmployee(1).firstname).toBe("other firstname");
    expect(service.getEmployee(1)).toBe(employee2);

  })


});
