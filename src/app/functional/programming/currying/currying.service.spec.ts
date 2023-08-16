import { TestBed } from '@angular/core/testing';

import { CurryingService } from './currying.service';

describe('CurryingService', () => {
  let service: CurryingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurryingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('CurryingService::curryin_function', () => {
    expect(service.curryin_function(1)(2)).toEqual(3);
  });

  it('CurryingService::sum_function', () => {
    expect(service.sum_function(6)(2)).toEqual(8);
  });

});
