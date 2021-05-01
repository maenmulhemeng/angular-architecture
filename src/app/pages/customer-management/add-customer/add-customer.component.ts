import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service-layer/customer/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  
  // Methods
  onAdd(e){
    //console.log(e)
    this.customerService.addCustomer(e);
  }

}
