import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBankListComponent } from './index-bank-list.component';

describe('IndexBankListComponent', () => {
  let component: IndexBankListComponent;
  let fixture: ComponentFixture<IndexBankListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexBankListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
