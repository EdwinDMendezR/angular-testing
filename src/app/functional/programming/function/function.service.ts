import { Injectable } from '@angular/core';

type CustomType = (x: number) => number;
type ConvertirNumberToString = (x: number) => string;

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor() { }

  increment = () => 1;

  incrementA = (x: number) => x + 1;

  incrementB = (x: number) => {
    return x + 1;
  };
  
  usingType: CustomType = x => x + 1; 

  convertNumberToString: ConvertirNumberToString = (x: number) => `${x}`;
  
}
