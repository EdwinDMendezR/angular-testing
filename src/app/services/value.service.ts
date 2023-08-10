import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  private value = 'StringValue';

  constructor() { }

  getValue() {
    return this.value;
  }

  setValue(value: string) {
    this.value = value;
  }

  getObservableValue() {
    return of('Observable::String');
  }

  getPromiseValue(){
    return Promise.resolve('Promise::Value');
  }

}
