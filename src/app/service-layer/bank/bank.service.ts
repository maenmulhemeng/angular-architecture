import { Injectable } from '@angular/core';
import { Bank } from '../model/BankModel';



@Injectable({
  providedIn: 'root'
})
export class BankService {
  private banks:Bank[] = [];

  constructor() { }

  // setters
  setBanks(banks:Bank[]){
    this.banks = banks;
  }
  getBanksCounts(){
    return this.banks.length;
  }
  // Methods
  fetchBanks(){
    return this.banks;
  }
  addBank(bank:Bank){
    this.banks.push(bank);
    //console.log(this.banks)addCustomer 
  }
  getBank(id){
    return this.banks.find(b => b.id == id);
  }
  updateBank(bank:Bank){
    this.banks[this.banks.findIndex(b=>b.id==bank.id)] = bank;
    //this.setBanks(this.banks.map(b => b.id == bank.id? bank:b))
  }
  deleteBank(id:number){
    const index = this.banks.findIndex(b => b.id == id);
    if (index > -1){
      this.banks.splice(index,1);
    }
  }
}
