import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from 'src/app/service-layer/bank/bank.service';
import { CustomerService } from 'src/app/service-layer/customer/customer.service';
import { Bank } from 'src/app/service-layer/model/BankModel';
import { Customer } from 'src/app/service-layer/model/CustomerModel';

@Component({
  selector: 'app-add-customer-to-bank',
  templateUrl: './add-customer-to-bank.component.html',
  styleUrls: ['./add-customer-to-bank.component.scss']
})
export class AddCustomerToBankComponent implements OnInit {

  customers:Customer[] = []
  
  bank:Bank;
  

  // constructors
  constructor(private bankService: BankService,
    private customerService:CustomerService,
    private route: ActivatedRoute) { 
     
  }
  bindCustomers(){
    return this.customers.filter(c=> !this.bank.customers.find(bc=>bc.id == c.id))
  }

  // Settters and Getters
  // Lifecycles
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(this.bankService.getBank(id));
    this.bank = this.bankService.getBank(id);
   // this.bankForm.setValue(this.bank);
    this.customers = this.customerService.getCustomers();
  }
  
  onUpdate(e){
    console.log("asd",e)
    this.bankService.updateBank(e);
  }
  onSelect(e){
    console.log(this.bank)
    this.bank.addCustomer(this.customerService.getCustomer(e.id));
    

  }
}
