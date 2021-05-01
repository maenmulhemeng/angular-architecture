import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Bank } from '../model/BankModel';
import { Customer } from '../model/CustomerModel';
import { ModelsFactory } from '../model/ModelsFactory';

import { BankService } from './bank.service';

describe('BankService', () => {
  let service: BankService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientModule]});
    service = TestBed.inject(BankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Clear banks', ()=>{
    // Act 
    service.setBanks([]);
    // Assert
    expect(service.getBanksCounts()).toBe(0);
  })

  it('Add a bank', ()=>{
    // Arrange
    const bank:Bank = ModelsFactory.createTestBank();
    bank.id=1;
    // Act
    service.addBank(bank)
    // Assert
    expect(service.getBank(1)).toBe(bank);
  })
  it('Delete a bank', ()=>{
    // Arrange
    //service.setBanks([]);
    const bank1:Bank = ModelsFactory.createTestBank();
    bank1.id=1;
    const bank2:Bank = ModelsFactory.createTestBank();
    bank2.id=2;
    service.setBanks([bank1,bank2]);

    // Act
    service.deleteBank(1);
    // Assert
    expect(service.getBank(1)).toBeUndefined();
    expect(service.getBanksCounts()).toBe(1); 
  })
  it('Update a bank', ()=>{
    // Arrange
    //service.setBanks([]);
    const banks:Bank[] = ModelsFactory.createTestBanks();
    service.setBanks(banks);
    const bank1:Bank =  ModelsFactory.createTestBank();
    bank1.id = 1;
    bank1.title="new title";
    bank1.address = "new address";
    bank1.customers = []

    const bank2:Bank =  ModelsFactory.createTestBank();
    bank2.id = 1;
    bank2.title="other title";
    bank2.address = "other address";
   

    // Act
    service.updateBank(bank1);
    // Assert
    expect(service.getBank(1).address).toBe("new address");
    expect(service.getBank(1).title).toBe("new title");
    expect(service.getBank(1)).toBe(bank1);
    
    service.updateBank(bank2);
    expect(service.getBank(1).address).toBe("other address");
    expect(service.getBank(1).title).toBe("other title");
    expect(service.getBank(1)).toBe(bank2);

  })

  it('add a customer to a bank', ()=>{
    const bank:Bank = ModelsFactory.createTestBank();
    const c1:Customer = ModelsFactory.createTestCustomer();
    const c2:Customer = ModelsFactory.createTestCustomer();

    
    bank.addCustomer(c1);
    bank.addCustomer(c2);
    expect(bank.customers.length).toBe(2);
  })

  it ('delete a customer from the bank', ()=>{
    const bank:Bank = ModelsFactory.createTestBank();
    bank.customers= ModelsFactory.createTestCustomers();
    const len = bank.customers.length;
    bank.deleteCutomer(1);
    expect(bank.customers.length).toBe(len-1);
    bank.deleteCutomer(2);
    bank.deleteCutomer(3);
    bank.deleteCutomer(4); // it is not there
    expect(bank.customers.length).toBe(len-3);
    
  })


});
