import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = new Product('', '');
  @Output() output = new EventEmitter<Product>();
  mensaje = '';
  products: Product[] = [];

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getExampleService()
    .subscribe(products => {
      this.products = products;
    })
  }

  actionClick() {
    this.mensaje = 'Mensaje-Click'
  }

  actionOutPutClick() {
    this.output.emit(this.product) 
  }


}
