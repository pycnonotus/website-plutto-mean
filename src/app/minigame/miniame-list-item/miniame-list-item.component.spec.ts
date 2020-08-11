import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniameListItemComponent } from './miniame-list-item.component';

describe('MiniameListItemComponent', () => {
  let component: MiniameListItemComponent;
  let fixture: ComponentFixture<MiniameListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniameListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniameListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
