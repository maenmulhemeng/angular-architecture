import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBankListComponent } from './admin-bank-list.component';

describe('AdminBankListComponent', () => {
  let component: AdminBankListComponent;
  let fixture: ComponentFixture<AdminBankListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBankListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
