import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Bank } from 'src/app/service-layer/model/BankModel';
import { ModelsFactory } from 'src/app/service-layer/model/ModelsFactory';

import { AddCustomerToBankFormComponent } from './add-customer-to-bank-form.component';

describe('AddCustomerToBankFormComponent', () => {
  let component: AddCustomerToBankFormComponent;
  let fixture: ComponentFixture<AddCustomerToBankFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerToBankFormComponent ],
      imports:[ReactiveFormsModule,AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerToBankFormComponent);
    component = fixture.componentInstance;
    component.customers = ModelsFactory.createTestCustomers();
    component.bank = ModelsFactory.createTestBank();
    component.bank.id = 1;
    component.bank.customers = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit on Update button clicked', () => {
    spyOn(component.UPDATE_BANK, 'emit');
    component.emitUpdate();
    expect(component.UPDATE_BANK.emit).toHaveBeenCalled();
  });
});
