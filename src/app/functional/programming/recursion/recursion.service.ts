import { Injectable } from '@angular/core';


type SumAll = (xs: number[]) => number;

@Injectable({
  providedIn: 'root'
})
export class RecursionService {

  constructor() { }

  sum_all: SumAll = xs => {
    if(xs.length === 0) return 0;
    const [head, ...rest] = xs;
    return head + this.sum_all(rest);
  }

}
