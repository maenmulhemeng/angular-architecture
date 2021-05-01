import { Injectable } from '@angular/core';
import { Customer } from '../model/CustomerModel';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers:Customer[] = [];

  constructor() { }

  // setters
  setCustomers(customers:Customer[]){
    this.customers = customers;
  }
  getCustomers(){
    return this.customers;
  }
  // Methods
  fetchCustomers(){
    return this.customers;
  }
  addCustomer(customer:Customer){
    this.customers.push(customer);
    //console.log(this.customers)
  }
  getCustomer(id){
    const index  =this.customers.findIndex(b => b.id == id);
    return this.customers[index];
  }
  updateCustomer(customer:Customer){
    const index = this.customers.findIndex(c=>c.id == customer.id);
    //console.log(index)
    Object.assign(this.customers[index],customer);
  }
  deleteCustomer(id:number){
    const index = this.customers.findIndex(b => b.id == id);
    if (index > -1){
      this.customers.splice(index,1);
    }
  }
}
