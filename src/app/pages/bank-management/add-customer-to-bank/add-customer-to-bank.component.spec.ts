import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { AddCustomerToBankComponent } from './add-customer-to-bank.component';

describe('AddCustomerToBankComponent', () => {
  let component: AddCustomerToBankComponent;
  let fixture: ComponentFixture<AddCustomerToBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AppRoutingModule,ComponentsModule],
      declarations: [ AddCustomerToBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerToBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
