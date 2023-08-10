import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  /**beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });*/

  beforeEach(() => {
    service = new ValueService();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('ValueService::getValue', () => {
    it('should return', () => {
      expect(service.getValue()).toEqual('StringValue');
      service.setValue('Observable::NewString')
      expect(service.getValue()).toEqual('Observable::NewString');
    });

    /**it('should return Promise', (doneFunction) => {
        service.getPromiseValue()
        .then(
          (value) => {
            expect(value).toBe('Promise::Value');
            doneFunction();
        })
    });

    it('should return Promise', async() => {
      const resultado = await service.getPromiseValue();
      expect(resultado).toBe('Promise::Value')
    });**/


  });


});
