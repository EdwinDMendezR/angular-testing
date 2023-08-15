import { Injectable } from '@angular/core';

type Sum = (a: number)=> (b: number) => number;

@Injectable({
  providedIn: 'root'
})
export class CurryingService {

  constructor() { }

  curryin_function(a: number) {
    return function(b: number) {
      return a + b;
    }
  }

  sum_function: Sum = a => b => a + b;


}
