import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCustomerListComponent } from './index-customer-list.component';

describe('IndexCustomerListComponent', () => {
  let component: IndexCustomerListComponent;
  let fixture: ComponentFixture<IndexCustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCustomerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
