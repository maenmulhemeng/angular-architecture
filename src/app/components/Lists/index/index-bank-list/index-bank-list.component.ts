import { Component, Input, OnInit } from '@angular/core';
import { BankService } from 'src/app/service-layer/bank/bank.service';
import { Bank } from 'src/app/service-layer/model/BankModel';



@Component({
  selector: 'app-index-bank-list',
  templateUrl: './index-bank-list.component.html',
  styleUrls: ['./index-bank-list.component.scss']
})
export class IndexBankListComponent implements OnInit {
  // properties
  @Input() banks: Bank[];

 

  // Settters and Getters
  getBanks(){
    return this.banks;
  }
  setBanks(banks:Bank[]){
    this.banks = banks;
  }

  // Lifecycles
  ngOnInit(): void {
    
  }

  // Methods
}
