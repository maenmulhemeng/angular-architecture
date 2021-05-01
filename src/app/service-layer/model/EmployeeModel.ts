export class Employee {
    static currentId:number = 0;
    constructor({firstname,lastname}){
        this.firstname= firstname;
        this.lastname = lastname;
        this.id = Employee.currentId++;
    }
    
     id:number = -1;
     firstname:string = "";
     lastname:String = "";
}