import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/service-layer/bank/bank.service';
import { Bank } from 'src/app/service-layer/model/BankModel';



@Component({
  selector: 'app-index-bank',
  templateUrl: './index-bank.component.html',
  styleUrls: ['./index-bank.component.scss']
})
export class IndexBankComponent implements OnInit {
  // properties
  private banks: Bank[];

  // constructors
  constructor(private bankService: BankService) {
    this.setBanks(this.bankService.fetchBanks());
  }

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
