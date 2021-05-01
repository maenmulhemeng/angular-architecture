import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AddBankFormComponent } from './add-bank-form.component';

describe('AddBankFormComponent', () => {
  let component: AddBankFormComponent;
  let fixture: ComponentFixture<AddBankFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBankFormComponent],
      imports:[ReactiveFormsModule,AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBankFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit on Add button clicked', () => {
    spyOn(component.ADD_BANK, 'emit');
    component.emitAdd();
    expect(component.ADD_BANK.emit).toHaveBeenCalled();
  });
});
