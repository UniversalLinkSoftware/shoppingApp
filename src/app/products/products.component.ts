import { Product } from './product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  })
export class ProductsComponent implements OnInit {
// selectedProduct: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.productService.productSelected.subscribe(
    //   (product: Product) => {this.selectedProduct = product; });
  }
}
