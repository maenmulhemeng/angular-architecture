import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/service-layer/bank/bank.service';
import { Bank } from 'src/app/service-layer/model/BankModel';



@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.scss']
})
export class AddBankComponent implements OnInit {
  
  constructor(private bankService:BankService){

  }
  ngOnInit(): void {
  }

  // Methods
  onAdd(e){  
    console.log(e)
    this.bankService.addBank(e);
  }

}
