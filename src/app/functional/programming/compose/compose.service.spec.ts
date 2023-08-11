import { TestBed } from '@angular/core/testing';

import { ComposeService } from './compose.service';

fdescribe('ComposeService', () => {
  let service: ComposeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('ComposeService::compose_function', () => {
    expect(service.compose_function(2)).toEqual('3');
  });

});
