import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCheckDialogComponent } from './user-check-dialog.component';

describe('UserCheckDialogComponent', () => {
  let component: UserCheckDialogComponent;
  let fixture: ComponentFixture<UserCheckDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCheckDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCheckDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
