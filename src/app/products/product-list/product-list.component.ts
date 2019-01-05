import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
// @Output() productWasSelected = new EventEmitter<Product>();
  products: Product[];
  subscription: Subscription;
  constructor(private productService: ProductService,
    private router: Router ,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.productService.productChanged
    .subscribe(
      (product: Product[]) => {
        this.products = product;
      }
    );
   this.products = this.productService.getProducts();
  }
  //   onProductSelected(product: Product) {
  //   this.productWasSelected.emit(product);
  // }
  onNewProduct() {
   this.router.navigate(['new'], {relativeTo: this.route});
  }

}
