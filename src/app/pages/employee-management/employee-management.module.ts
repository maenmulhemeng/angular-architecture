import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { IndexEmployeeComponent } from './index-employee/index-employee.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    EditEmployeeComponent,
    AddEmployeeComponent,
    IndexEmployeeComponent,
    AdminEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    
  ]
})
export class EmployeeManagementModule { }
