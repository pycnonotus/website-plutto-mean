import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniameListDetilComponent } from './miniame-list-detil.component';

describe('MiniameListDetilComponent', () => {
  let component: MiniameListDetilComponent;
  let fixture: ComponentFixture<MiniameListDetilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniameListDetilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniameListDetilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
