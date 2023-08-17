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
  @Output() outputProduct = new EventEmitter<Product>();
  mensaje = '';
  products: Product[] = [];
  limit = 10;
  offset = 0;
  status: 'loading' | 'success' | 'error' | 'init' = 'init';

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
    //this.getAllProductsPaginacion();
  }

  getAllProducts() {
    this.productService.getExampleService()
    .subscribe(products => {
      this.products = products;
    })
  }

  getAllProductsPaginacion() {
    this.status = 'loading';
    this.productService.getExampleParams(this.limit, this.offset)
    .subscribe({
      next: (products) => {
        this.products = [...this.products, ...products]
        this.offset += this.limit;
        this.status = 'success';  
      },
      error: error => {
        //this.products = [];
        //this.status = 'error';
        setTimeout(() => {
          this.products = [];
          this.status = 'error';
        }, 3000);
      }
    })
  }

  actionClick() {
    this.mensaje = 'Mensaje-Click'
  }

  actionOutPutClick() {
    this.outputProduct.emit(this.product) 
  }

}
