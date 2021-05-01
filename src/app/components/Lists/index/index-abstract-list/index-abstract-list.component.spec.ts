import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAbstractListComponent } from './index-abstract-list.component';

describe('IndexAbstractListComponent', () => {
  let component: IndexAbstractListComponent;
  let fixture: ComponentFixture<IndexAbstractListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexAbstractListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAbstractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
