import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { IndexBankComponent } from './index-bank.component';

describe('IndexBankComponent', () => {
  let component: IndexBankComponent;
  let fixture: ComponentFixture<IndexBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AppRoutingModule,ComponentsModule],
      declarations: [ IndexBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
