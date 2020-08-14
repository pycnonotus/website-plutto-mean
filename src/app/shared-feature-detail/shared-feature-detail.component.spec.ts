import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFeatureDetailComponent } from './shared-feature-detail.component';

describe('SharedFeatureDetailComponent', () => {
  let component: SharedFeatureDetailComponent;
  let fixture: ComponentFixture<SharedFeatureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedFeatureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFeatureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
