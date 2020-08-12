import { TestBed } from '@angular/core/testing';

import { SurvivalService } from './survival.service';

describe('SurvivalService', () => {
  let service: SurvivalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurvivalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
