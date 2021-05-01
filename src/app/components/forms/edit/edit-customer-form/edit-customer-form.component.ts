import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Customer } from 'src/app/service-layer/model/CustomerModel';

@Component({
  selector: 'app-edit-customer-form',
  templateUrl: './edit-customer-form.component.html',
  styleUrls: ['./edit-customer-form.component.scss']
})
export class EditCustomerFormComponent implements OnInit {
    // properties
    @Input() customer:Customer;
    @Output() UPDATE_CUSTOMER = new EventEmitter<Customer>();
    customerForm = this.fb.group({
      id:'',
      firstname:['',Validators.required], 
      lastname:['']
    })

    // constructors
    constructor(private fb: FormBuilder) { 
       
    }

    // Settters and Getters
    // Lifecycles
    ngOnInit(): void {
      //console.log(this.customerService.getCustomer(id));
      this.customerForm.setValue(this.customer);
    }

    // Methods
    emitUpdate(){
     // console.log(e)
      this.UPDATE_CUSTOMER.emit(this.customerForm.value);
    }

}
