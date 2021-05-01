import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/service-layer/model/CustomerModel';

@Component({
  selector: 'app-add-customer-form',
  templateUrl: './add-customer-form.component.html',
  styleUrls: ['./add-customer-form.component.scss']
})
export class AddCustomerFormComponent implements OnInit {
    // properties
    @Output() ADD_CUSTOMER = new EventEmitter<Customer>();

    customerForm = this.fb.group({
      firstname:['',Validators.required], 
      lastname:['']
    })

    // constructors
    constructor(private fb: FormBuilder) { 
    }

    // Settters and Getters
    // Lifecycles
    ngOnInit(): void {
    }

    // Methods
    emitAdd(){
      //console.log(this.customerForm.value)
      this.ADD_CUSTOMER.emit(new Customer(this.customerForm.value));

    }

}
