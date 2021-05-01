import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEmployeeListComponent } from './index-employee-list.component';

describe('IndexEmployeeListComponent', () => {
  let component: IndexEmployeeListComponent;
  let fixture: ComponentFixture<IndexEmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexEmployeeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
