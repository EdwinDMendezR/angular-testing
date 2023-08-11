import { TestBed } from '@angular/core/testing';

import { FunctionService } from './function.service';

describe('FunctionService', () => {
  let service: FunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionService);
  });

  it('FunctionService::increment', () => {
    expect(service.increment()).toEqual(1);
  });

  it('FunctionService::incrementA', () => {
    expect(service.incrementA(1)).toEqual(2);
  });

  it('FunctionService::incrementB', () => {
    expect(service.incrementB(1)).toEqual(2);
  });

  it('FunctionService::Type', () => {
    type CustomType = (x: number) => number;
    const usingType: CustomType = x => x + 1; 
    expect(usingType(1)).toEqual(2);
  });

  it('FunctionService::incrementA', () => {
    expect(service.usingType(3)).toEqual(4);
  });

  it('FunctionService::convertNumberToString', () => {
    expect(service.convertNumberToString(3)).toEqual('3');
  });


});
