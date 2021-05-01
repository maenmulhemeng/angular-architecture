import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBankComponent } from './add-bank/add-bank.component';
import { EditBankComponent } from './edit-bank/edit-bank.component';
import { AdminBankComponent } from './admin-bank/admin-bank.component';
import { IndexBankComponent } from './index-bank/index-bank.component';
import { ViewBankComponent } from './view-bank/view-bank.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { AddCustomerToBankComponent } from './add-customer-to-bank/add-customer-to-bank.component';

@NgModule({
  declarations: [
    AddBankComponent,
    EditBankComponent,
    AdminBankComponent,
    IndexBankComponent,
    ViewBankComponent,
    AddCustomerToBankComponent,
  ],
  imports: [
    ComponentsModule,
    AppRoutingModule,
    CommonModule
  ],
  exports:[ComponentsModule]
})
export class BankManagementModule { }
