import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinigamesAdminComponent } from './minigames-admin.component';

describe('MinigamesAdminComponent', () => {
  let component: MinigamesAdminComponent;
  let fixture: ComponentFixture<MinigamesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinigamesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinigamesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
