import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPaypalComponent } from './pay-paypal.component';

describe('PayPaypalComponent', () => {
  let component: PayPaypalComponent;
  let fixture: ComponentFixture<PayPaypalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayPaypalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
