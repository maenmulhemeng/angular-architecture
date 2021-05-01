import { Component, Input, OnInit } from '@angular/core';
import { Bank } from 'src/app/service-layer/model/BankModel';

@Component({
  selector: 'app-admin-bank-list',
  templateUrl: './admin-bank-list.component.html',
  styleUrls: ['./admin-bank-list.component.scss']
})
export class AdminBankListComponent implements OnInit {

      // properties
    @Input() banks: Bank[];

    // constructors
    constructor() {
     
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
