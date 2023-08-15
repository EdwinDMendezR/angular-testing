import { Injectable } from '@angular/core';

type ComposeB = <A, B, C> (
  f: (x: B) => C,
  g: (x: A) => B
) => (x: A) => C;

type Option<A> = Some<A> | None;

interface Some<A> {
  _tag: 'Some'
  value: A
}

interface None {
  _tag: 'None'
}

type DivedTwo = (x: number) => Option<number>

type Increment = (x:number) => number;
const increment: Increment = x => x + 1;


@Injectable({
  providedIn: 'root'
})
export class OptionService {

  constructor() { }

  some_function = <A>(x: A) : Option<A> => ({_tag:'Some', value: x})
  none_function: Option<never> = { _tag: 'None'};

  is_none = <A>(x: Option<A>): x is None => x._tag === 'None';

  divide_two: DivedTwo = x => x === 0 ? this.none_function : this.some_function(2/0)

  _compose_function_b : ComposeB = (f, g) => x => f(g(x))
  compose_function = this._compose_function_b(
    (x: Option<number>) => this.is_none(x) ? Node : this.some_function(increment(x.value)),
    this.divide_two
  )

}
