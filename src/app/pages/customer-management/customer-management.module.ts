import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { IndexCustomerComponent } from './index-customer/index-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    AddCustomerComponent,
    EditCustomerComponent,
    AdminCustomerComponent,
    IndexCustomerComponent,
    ViewCustomerComponent
  ],
  imports: [
    ComponentsModule,
    AppRoutingModule,
    CommonModule
  ],
  exports:[ComponentsModule]
})
export class CustomerManagementModule { }
