import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

import { Bank } from 'src/app/service-layer/model/BankModel';
import { Customer } from 'src/app/service-layer/model/CustomerModel';

@Component({
  selector: 'app-add-customer-to-bank-form',
  templateUrl: './add-customer-to-bank-form.component.html',
  styleUrls: ['./add-customer-to-bank-form.component.scss']
})
export class AddCustomerToBankFormComponent implements OnInit {
  // properties

  @Output() UPDATE_BANK = new EventEmitter<Bank>();
  @Output() SELECT_CUSTOMER = new EventEmitter<Customer>();
  @Input() customers:Customer[] = []
  @Input() bank:Bank;
  

  // constructors
  constructor() { 
     
  }

  // Settters and Getters
  // Lifecycles
  ngOnInit(): void {
  
  }
  getBankCustomers(){
    return this.bank? this.bank.customers:[];
  }
  emitSelect(e){
    //console.log(this.customers[e.target.value])
    this.SELECT_CUSTOMER.emit(this.customers[e.target.value]);
  }
  // Methods
  emitUpdate(){
    //console.log(this.bank)
    this.UPDATE_BANK.emit(this.bank);
    
  }

}
