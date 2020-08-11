import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniameListComponent } from './miniame-list.component';

describe('MiniameListComponent', () => {
  let component: MiniameListComponent;
  let fixture: ComponentFixture<MiniameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
