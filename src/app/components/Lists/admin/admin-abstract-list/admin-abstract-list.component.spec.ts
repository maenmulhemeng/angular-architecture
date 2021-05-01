import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAbstractListComponent } from './admin-abstract-list.component';

describe('AdminAbstractListComponent', () => {
  let component: AdminAbstractListComponent;
  let fixture: ComponentFixture<AdminAbstractListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAbstractListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAbstractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
