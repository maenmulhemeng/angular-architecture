import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service-layer/customer/customer.service';
import { Customer } from 'src/app/service-layer/model/CustomerModel';

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.scss']
})
export class AdminCustomerComponent implements OnInit {

  // properties
  private customers: Customer[];

  // constructors
  constructor(private customerService: CustomerService) {
    this.setCustomers(this.customerService.fetchCustomers());
    }

  // Settters and Getters
  getCustomers(){
    console.log(this.customers)
    return this.customers;
  }
  setCustomers(customers:Customer[]){
    this.customers = customers;
  }

  // Lifecycles
  ngOnInit(): void {
    
  }

  // Methods
  onDelete(id){
    this.customerService.deleteCustomer(id)
  }
}
