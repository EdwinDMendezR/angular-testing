import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';
import { MasterService } from './master.service';

describe('ValueService', () => {
    let service: MasterService;
    let valueServiceSpy: jasmine.SpyObj<ValueService>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('ValueService', ['getValue'])
        TestBed.configureTestingModule({
            providers: [
                MasterService,
                { private: ValueService, useValue: spy }
            ]
        });
        service = TestBed.inject(MasterService);
        valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
    });

    it('', () => {
        expect(service).toBeTruthy();
    })


});
