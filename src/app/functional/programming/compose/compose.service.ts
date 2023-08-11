import { Injectable } from '@angular/core';

type IncrementValue = (x: number) => number;
type ToString = (x: number) => string;
type IncrementAndThenToString = (x: number) => string;

@Injectable({
  providedIn: 'root'
})
export class ComposeService {

  constructor() { }

  tostring : ToString = x => `${x}`;

  incrementA: IncrementValue = x => x + 1;
  
  compose_function: IncrementAndThenToString = x => this.tostring(this.incrementA(x)); 

}
