import { TestBed } from '@angular/core/testing';

import { EitherService } from './either.service';

fdescribe('EitherService', () => {
  let service: EitherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EitherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('EitherService::divide_two', () => {
    expect(service.divide_two(2)).toEqual({_tag: 'Right', right: 1});
    expect(service.divide_two(0)).toEqual({_tag: 'Left', left: 'cannot divede by zero'});
    expect(service.divide_two(1)).toEqual({_tag: 'Left', left: 'num is not even'});
  });

});
