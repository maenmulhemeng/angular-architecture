import { Bank } from "./BankModel";
import { Customer } from "./CustomerModel";
import { Employee } from "./EmployeeModel";

export class ModelsFactory {
   static counter:number = 0; 
   static createTestBank(){
        return new Bank({title:"Ziraat"+ModelsFactory.counter++,address:"Turkey"})
   }
   static createTestBanks(){
    const bank1:Bank = ModelsFactory.createTestBank();
    bank1.id=1;
    const bank2:Bank = ModelsFactory.createTestBank();
    bank2.id=2;
    const bank3:Bank = ModelsFactory.createTestBank();
    bank2.id=3;
    return [bank1,bank2,bank3];
    }

    static createTestCustomer(){
        return new Customer({firstname:"Maen"+this.counter++, lastname:"Mulhem"});
    }
   
    static createTestCustomers(){
        const c1:Customer = ModelsFactory.createTestCustomer();
        c1.id = 1;
        const c2:Customer = ModelsFactory.createTestCustomer();
        c2.id = 2;
        const c3:Customer = ModelsFactory.createTestCustomer();
        c3.id = 3;
        return [c1,c2,c3]
    }

    static createTestEmployee(){
        return new Employee({firstname:"Maen"+this.counter++, lastname:"Mulhem"});
    }
   
    static createTestEmployees(){
        const c1:Customer = ModelsFactory.createTestEmployee();
        c1.id = 1;
        const c2:Customer = ModelsFactory.createTestEmployee();
        c2.id = 2;
        const c3:Customer = ModelsFactory.createTestEmployee();
        c3.id = 3;
        return [c1,c2,c3]
    }
     
}