import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from 'src/app/service-layer/bank/bank.service';
import { Bank } from 'src/app/service-layer/model/BankModel';


@Component({
  selector: 'app-edit-bank',
  templateUrl: './edit-bank.component.html',
  styleUrls: ['./edit-bank.component.scss']
})
export class EditBankComponent implements OnInit {
  id:string;
  bank:Bank;
  // constructors
   constructor(private bankService: BankService,
    private route: ActivatedRoute) { 
      const id = this.route.snapshot.paramMap.get('id');
      
      this.bank  = this.bankService.getBank(id);
     
  }

 ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id');
 }

 onUpdate(e){
   console.log(e)
   this.bankService.updateBank(e);
 }

}
