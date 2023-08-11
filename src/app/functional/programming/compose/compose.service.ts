import { Injectable } from '@angular/core';

type IncrementValue = (x: number) => number;
type ToString = (x: number) => string;
type IncrementAndThenToString = (x: number) => string;

type Compose = (
  f: (x: number) => string,
  g: (x: number) => number
) => (x: number) => string;

type ComposeB = <A, B, C> (
  f: (x: B) => C,
  g: (x: A) => B
) => (x: A) => C;


@Injectable({
  providedIn: 'root'
})
export class ComposeService {

  constructor() { }

  tostring : ToString = x => `${x}`;

  incrementA: IncrementValue = x => x + 1;
  
  compose_function_hard_code: IncrementAndThenToString = x => this.tostring(this.incrementA(x)); 

  private _compose_function = (f: Function, g: Function) => (x: number) => f(g(x));
  compose_function: IncrementAndThenToString = this._compose_function(this.tostring, this.incrementA);

  private _compose_function_a : Compose = (f, g) => x => f(g(x));
  compose_function_a: IncrementAndThenToString = this._compose_function_a(this.tostring, this.incrementA)

  private _compose_function_b : ComposeB = (f, g) => x => f(g(x));
  compose_function_b: IncrementAndThenToString = this._compose_function_b(this.tostring, this.incrementA)

}
