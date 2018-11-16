import { Product } from './../product.model';
import { Component, OnInit , EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Output() productWasSelected = new EventEmitter<Product>();
  products: Product[] = [
    // tslint:disable-next-line:max-line-length
    new Product('Product', 'Rolex Watch', 'http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/17114/b/blackwayfer-polowatch35-wallet1._lime-combo-of-watch-wallet-sunglasses-for-men.jpg'),
    // tslint:disable-next-line:max-line-length
    new Product('Another Product', 'same display', 'http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/17114/b/blackwayfer-polowatch35-wallet1._lime-combo-of-watch-wallet-sunglasses-for-men.jpg')];
  constructor() { }

  ngOnInit() {
  }
    onProductSelected(product: Product) {
    this.productWasSelected.emit(product);
  }

}
