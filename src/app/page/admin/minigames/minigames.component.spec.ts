import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinigamesComponent } from './minigames.component';

describe('MinigamesComponent', () => {
  let component: MinigamesComponent;
  let fixture: ComponentFixture<MinigamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinigamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinigamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
