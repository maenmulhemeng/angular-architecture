import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Bank } from 'src/app/service-layer/model/BankModel';

@Component({
  selector: 'app-edit-bank-form',
  templateUrl: './edit-bank-form.component.html',
  styleUrls: ['./edit-bank-form.component.scss']
})
export class EditBankFormComponent implements OnInit {
    // properties

    @Input() bank:Bank;
    @Output() UPDATE_BANK = new EventEmitter<Bank>();
    bankForm = this.fb.group({
      id:'',
      title:['',Validators.required], 
      address:[''],
      customers:[]
    })

    // constructors
    constructor(private fb: FormBuilder) { 
       
    }

    // Settters and Getters
    // Lifecycles
    ngOnInit(): void {
      this.bankForm.setValue(this.bank);
    }

    // Methods
    emitUpdate(){
     
      this.UPDATE_BANK.emit(this.bankForm.value);
    }

}
