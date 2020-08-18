import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBuyComponent } from './shop-buy.component';

describe('ShopBuyComponent', () => {
  let component: ShopBuyComponent;
  let fixture: ComponentFixture<ShopBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
