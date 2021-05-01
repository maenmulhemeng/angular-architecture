import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminAbstractListComponent } from './Lists/admin/admin-abstract-list/admin-abstract-list.component';
import { IndexAbstractListComponent } from './Lists/index/index-abstract-list/index-abstract-list.component';
import { AdminBankListComponent } from './Lists/admin/admin-bank-list/admin-bank-list.component';
import { IndexBankListComponent } from './Lists/index/index-bank-list/index-bank-list.component';
import { AddBankFormComponent } from './forms/add/add-bank-form/add-bank-form.component';
import { EditBankFormComponent } from './forms/edit/edit-bank-form/edit-bank-form.component';

import { AddEmployeeFormComponent } from './forms/add/add-employee-form/add-employee-form.component';
import { IndexEmployeeListComponent } from './Lists/index/index-employee-list/index-employee-list.component';
import { EditEmployeeFormComponent } from './forms/edit/edit-employee-form/edit-employee-form.component';
import { AppRoutingModule } from '../app-routing.module';

import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddCustomerFormComponent } from './forms/add/add-customer-form/add-customer-form.component';
import { EditCustomerFormComponent } from './forms/edit/edit-customer-form/edit-customer-form.component';
import { AddCustomerToBankFormComponent } from './forms/add/add-customer-to-bank-form/add-customer-to-bank-form.component';
import { FormsModule } from '@angular/forms';

const material = [
  MatSliderModule,
  MatTabsModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule
]
const customer = [AddCustomerFormComponent, EditCustomerFormComponent]
const bank = [AdminBankListComponent,
  IndexBankListComponent,
  AddBankFormComponent,
  EditBankFormComponent,
  AddCustomerToBankFormComponent]

const employee = [ IndexEmployeeListComponent,
  AddEmployeeFormComponent,
  EditEmployeeFormComponent]
  
@NgModule({
  declarations: [AdminAbstractListComponent,
    IndexAbstractListComponent,
    ...bank,
    ...customer,
    ...employee
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ...material
  ],
  exports:[AdminAbstractListComponent,
    IndexAbstractListComponent,
    ...bank,
    ...customer,
    ...employee,
    ...material]
})
export class ComponentsModule { }
