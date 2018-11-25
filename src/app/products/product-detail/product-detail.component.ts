import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  onAddToShoppingList() {
    this.productService.addInfoToShoppingList(this.product.info);
  }

}
