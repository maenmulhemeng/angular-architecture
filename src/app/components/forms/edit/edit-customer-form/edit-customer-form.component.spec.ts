import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Customer } from 'src/app/service-layer/model/CustomerModel';

import { EditCustomerFormComponent } from './edit-customer-form.component';

describe('EditCustomerFormComponent', () => {
  let component: EditCustomerFormComponent;
  let fixture: ComponentFixture<EditCustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustomerFormComponent ],
      imports:[ReactiveFormsModule,AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomerFormComponent);
    component = fixture.componentInstance;
    component.customer =new Customer({firstname:"Maen", lastname:"Mulhem"});
    component.customer.id=1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit on Update button clicked', () => {
    spyOn(component.UPDATE_CUSTOMER, 'emit');
    component.emitUpdate();
    expect(component.UPDATE_CUSTOMER.emit).toHaveBeenCalled();
  });
});
