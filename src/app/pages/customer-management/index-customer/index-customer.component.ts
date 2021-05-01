import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service-layer/customer/customer.service';
import { Customer } from 'src/app/service-layer/model/CustomerModel';

@Component({
  selector: 'app-index-customer',
  templateUrl: './index-customer.component.html',
  styleUrls: ['./index-customer.component.scss']
})
export class IndexCustomerComponent implements OnInit {
 // properties
 private customers: Customer[];

 // constructors
 constructor(private customerService: CustomerService) {
   this.setCustomers(this.customerService.fetchCustomers());
 }

 // Settters and Getters
 getCustomers(){
   return this.customers;
 }
 setCustomers(customers:Customer[]){
   this.customers = customers;
 }

 // Lifecycles
 ngOnInit(): void {
   
 }

 // Methods
}
