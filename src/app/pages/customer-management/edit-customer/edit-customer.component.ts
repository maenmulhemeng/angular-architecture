import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/service-layer/customer/customer.service';
import { Customer } from 'src/app/service-layer/model/CustomerModel';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  id:string;
  customer:Customer;
  
  // constructors
  constructor(private customerService: CustomerService,
    private route: ActivatedRoute) { 
      const id = this.route.snapshot.paramMap.get('id');    
      if(id){
        this.customer  = this.customerService.getCustomer(id);
      }
      }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  onUpdate(e:Customer){
    //console.log(e)
    this.customer,this.customerService.updateCustomer(e);
    
  }
}
