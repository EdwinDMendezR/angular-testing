import { TestBed } from '@angular/core/testing';

import { ComposeService } from './compose.service';

describe('ComposeService', () => {
  let service: ComposeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('ComposeService::compose_function', () => {
    expect(service.compose_function_hard_code(2)).toEqual('3');
  });

  it('ComposeService::compose_function', () => {
    expect(service.compose_function(5)).toEqual('6');
  });

  it('ComposeService::compose_function_a', () => {
    expect(service.compose_function_a(5)).toEqual('6');
  });

  it('ComposeService::compose_function_a', () => {
    expect(service.compose_function_b(5)).toEqual('6');
  });

});
