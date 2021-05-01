import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { Bank } from 'src/app/service-layer/model/BankModel';

import { EditBankComponent } from './edit-bank.component';

describe('EditBankComponent', () => {
  let component: EditBankComponent;
  let fixture: ComponentFixture<EditBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AppRoutingModule,ComponentsModule],
      declarations: [ EditBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBankComponent);
    component = fixture.componentInstance;
    component.bank = new Bank({title:'Zirrat',address:'Turkey'});
    component.bank.id = 1;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
