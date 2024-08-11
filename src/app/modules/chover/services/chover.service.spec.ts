import { TestBed } from '@angular/core/testing';

import { ChoverService } from './chover.service';

describe('ChoverService', () => {
  let service: ChoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
