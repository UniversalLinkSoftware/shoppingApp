import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    // tslint:disable-next-line:max-line-length
    new Product('A Sample Product', 'A product to display', 'http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/17114/b/blackwayfer-polowatch35-wallet1._lime-combo-of-watch-wallet-sunglasses-for-men.jpg'),
    // tslint:disable-next-line:max-line-length
    new Product('A Sample Product', 'A product to display', 'http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/17114/b/blackwayfer-polowatch35-wallet1._lime-combo-of-watch-wallet-sunglasses-for-men.jpg')];
  constructor() { }

  ngOnInit() {
  }

}
