import { TestBed } from '@angular/core/testing';

import { OptionService } from './option.service';

describe('OptionService', () => {
  let service: OptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('OptionService::compose_function', () => {
    expect(service.compose_function(2)).toEqual({_tag: 'Some', value: Infinity});
  });

  it('OptionService::compose_function', () => {
    expect(service.compose_function(9)).toEqual({_tag: 'Some', value: Infinity});
  });


});
