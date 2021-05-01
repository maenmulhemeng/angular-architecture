import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Bank } from 'src/app/service-layer/model/BankModel';

import { EditBankFormComponent } from './edit-bank-form.component';

describe('EditBankFormComponent', () => {
  let component: EditBankFormComponent;
  let fixture: ComponentFixture<EditBankFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBankFormComponent ],
      imports:[ReactiveFormsModule,AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBankFormComponent);
    component = fixture.componentInstance;
    component.bank =new Bank({title:"Ziraat", address:"Turkey"});
    component.bank.id=1;
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
