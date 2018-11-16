import { Product } from './product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
selectedProduct: Product;
  constructor() { }

  ngOnInit() {
  }

}
