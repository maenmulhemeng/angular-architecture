import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/service-layer/model/CustomerModel';

@Component({
  selector: 'app-admin-customer-list',
  templateUrl: './admin-customer-list.component.html',
  styleUrls: ['./admin-customer-list.component.scss']
})
export class AdminCustomerListComponent implements OnInit {

      // properties
      @Input() customers: Customer[];

      // constructors
      constructor() {
       
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
