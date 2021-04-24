import { TestBed } from '@angular/core/testing';

import { HourBasisService } from './hour-basis.service';

describe('HourBasisService', () => {
  let service: HourBasisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HourBasisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
