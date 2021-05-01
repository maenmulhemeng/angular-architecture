import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
export class Customer {
    static currentId:number = 0;
    constructor({firstname,lastname}){
        this.firstname= firstname;
        this.lastname = lastname;
        this.id = Customer.currentId++;
    }
    
     id:number = -1;
     firstname:string = "";
     lastname:String = "";
     
     /*update(c:Customer){
      this.id = c.id;
      this.firstname = c.firstname;
      this.lastname = c.lastname;
     }*/
}