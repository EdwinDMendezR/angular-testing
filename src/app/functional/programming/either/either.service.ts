import { Injectable } from '@angular/core';


type Either<E, A> = Left<E> | Right<A>

interface Left<E> {
  _tag: 'Left'
  left: E
}

interface Right<A> {
  _tag: 'Right'
  right: A
}

@Injectable({
  providedIn: 'root'
})
export class EitherService {

  constructor() { }

  left = <E, A=never>(e: E): Either<E, A> => ({
    _tag: 'Left',
    left: e
  })

  righ = <A, E=never>(a: A): Either<E, A> => ({
    _tag: 'Right',
    right: a
  })

  divide_two(num: number): Either<string, number> {
    if(num === 0) {
      return this.left('cannot divede by zero');
    } else if (num % 2 !==0) {
      return this.left('num is not even');
    } else {
      return this.righ(2/num);
    }
  }

}
