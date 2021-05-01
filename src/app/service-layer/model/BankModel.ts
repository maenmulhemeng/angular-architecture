import { Injectable } from "@angular/core";
import { Customer } from "./CustomerModel";

@Injectable({
    providedIn: 'root'
  })

export class Bank {
    static currentId:number = 0;
    constructor({title,address}){
        this.title= title;
        this.address = address;
        this.id = Bank.currentId++;
        this.customers = []
    }
    
     id:number = -1;
     title:string = "";
     address:String = "";
     customers:Customer[] =[]
    
     addCustomer(c:Customer){
        this.customers.push(c);
     }
     deleteCutomer(id:number){
         this.customers = this.customers.filter(c=>c.id != id);
     }
     
     
}