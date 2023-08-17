import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-componenta',
  templateUrl: './componenta.component.html',
  styleUrls: ['./componenta.component.scss']
})
export class ComponentaComponent implements OnInit {

  product: Product = new Product('1234', 'AAAA')
  products: Product[] = [
    new Product('1111', 'AAAA'),
    new Product('2222', 'BBBB')
  ];

  outputProduct: Product | null = null;

  constructor() {}

  ngOnInit(): void {
  }

  choose(product: Product) {
    this.outputProduct = product;
  }


}
