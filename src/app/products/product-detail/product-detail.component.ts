import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  id: number;
  // @Input() product: Product;
  // constructor(private productService: ProductService) { }
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.product = this.productService.getProduct(this.id);
        }
      );
  }
  onAddToShoppingList() {
    this.productService.addInfoToShoppingList(this.product.info);
  }
  onEditProduct() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteProduct() {
    this.productService.deleteProduct(this.id);
    this.router.navigate(['/products']);
  }

}
