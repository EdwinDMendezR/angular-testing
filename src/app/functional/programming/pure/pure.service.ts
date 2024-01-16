import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PureService {

  constructor() { }

  pure_function = (x: number) => x + 1;

  impure_function = () => new Date().toLocaleTimeString();

}
