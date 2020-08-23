import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliedItemComponent } from './slied-item.component';

describe('SliedItemComponent', () => {
  let component: SliedItemComponent;
  let fixture: ComponentFixture<SliedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
