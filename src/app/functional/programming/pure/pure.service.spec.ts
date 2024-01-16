import { TestBed } from '@angular/core/testing';

import { PureService } from './pure.service';

fdescribe('PureService', () => {
  let service: PureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('pure::function', () => {
    expect(service.pure_function(3)).toEqual(4);
  });
  
  it('impure::function', () => {
    expect(service.impure_function()).not.toBeNull();
  });

  it('impure::function', () => {

    const s = function(a: number) {
      return function(b: number) {
        return a + b;
      }
    }
    const x = (a:number) => (b: number) => a + b;

  });



});
