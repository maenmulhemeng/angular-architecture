import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/service-layer/bank/bank.service';
import { Bank } from 'src/app/service-layer/model/BankModel';


@Component({
  selector: 'app-admin-bank',
  templateUrl: './admin-bank.component.html',
  styleUrls: ['./admin-bank.component.scss']
})
export class AdminBankComponent implements OnInit {
 // properties
 banks: Bank[];

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
 onDelete(id){
  this.bankService.deleteBank(id)
 }
}
