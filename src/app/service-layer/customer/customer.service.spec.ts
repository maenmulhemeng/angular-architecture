import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Customer } from '../model/CustomerModel';
import { ModelsFactory } from '../model/ModelsFactory';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientModule]});
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Clear customers', ()=>{
    // Act 
    service.setCustomers([]);
    // Assert
    expect(service.getCustomers().length).toBe(0);
  })

  it('Add a customer', ()=>{
    // Arrange
    const customer:Customer = ModelsFactory.createTestCustomer();
    customer.id=1;
    // Act
    service.addCustomer(customer)
    // Assert
    expect(service.getCustomer(1)).toBe(customer);
  })
  it('Delete a customer', ()=>{
    // Arrange
    //service.setCustomers([]);
    const customer1:Customer = ModelsFactory.createTestCustomer();
    customer1.id=1;
    const customer2:Customer = ModelsFactory.createTestCustomer();
    customer2.id=2;
    service.setCustomers([customer1,customer2]);

    // Act
    service.deleteCustomer(1);
    // Assert
    expect(service.getCustomer(1)).toBeUndefined();
    expect(service.getCustomers().length).toBe(1); 
  })
  it('Update a customer', ()=>{
    // Arrange
    //service.setCustomers([]);
    const customers:Customer[] = ModelsFactory.createTestCustomers();
    service.setCustomers(customers);
    const customer1:Customer =  ModelsFactory.createTestCustomer();
    customer1.id = 1;
    customer1.firstname="new firstname";
    customer1.lastname = "new lastname";
    

    const customer2:Customer =  ModelsFactory.createTestCustomer();
    customer2.id = 1;
    customer2.firstname="other firstname";
    customer2.lastname = "other lastname";
   

    // Act
    service.updateCustomer(customer1);
    // Assert
    expect(service.getCustomer(1).lastname).toBe("new lastname");
    expect(service.getCustomer(1).firstname).toBe("new firstname");
    expect(service.getCustomer(1)).toEqual(customer1);
    
    service.updateCustomer(customer2);
    expect(service.getCustomer(1).lastname).toBe("other lastname");
    expect(service.getCustomer(1).firstname).toBe("other firstname");
    expect(service.getCustomer(1)).toEqual(customer2);

  })



});
