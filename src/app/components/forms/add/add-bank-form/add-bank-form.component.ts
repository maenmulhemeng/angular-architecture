import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Bank } from 'src/app/service-layer/model/BankModel';



@Component({
  selector: 'app-add-bank-form',
  templateUrl: './add-bank-form.component.html',
  styleUrls: ['./add-bank-form.component.scss']
})
export class AddBankFormComponent implements OnInit {
  // properties
  @Output() ADD_BANK = new EventEmitter<Bank>();
  bankForm = this.fb.group({
    title:['',Validators.required], 
    address:['']
  })

  // constructors
  constructor(private fb: FormBuilder) { 
  }

  // Lifecycles
  ngOnInit(): void {
  }

  // Methods
  emitAdd(){
    this.ADD_BANK.emit(new Bank(this.bankForm.value));
  }
}
