import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
  let service: MasterService;
  let value: ValueService;

  beforeEach(() => {
    value = new ValueService();
    service = new MasterService(value);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Mock', () => {
    const valueMock = { getValue: () => "XD" };
    const serviceMock = new MasterService(valueMock as ValueService);
    expect(serviceMock.getValue()).toBe('XD');
  });

  it('Mock', () => {
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue'])
    valueServiceSpy.getValue.and.returnValue('SpyValue');
    const masterService = new MasterService(valueServiceSpy);
    expect(masterService.getValue()).toBe('SpyValue');
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
  });

});
