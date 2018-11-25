import { Product } from './product.model';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Information } from '../common/info.model';
import { ShoppingListService } from '../shopping-list/shopping.service';
@Injectable()
export class ProductService implements OnInit {
productSelected = new EventEmitter<Product>();
   private products: Product[] = [
        // tslint:disable-next-line:max-line-length
        new Product('Product'
        // tslint:disable-next-line:max-line-length
        , 'Rolex Watch', 'http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/17114/b/blackwayfer-polowatch35-wallet1._lime-combo-of-watch-wallet-sunglasses-for-men.jpg',
        [
                new Information('price', 90),
                new Information('model', 209)
        ]),
        // tslint:disable-next-line:max-line-length
        new Product('Another Product', 'same display', 'http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/17114/b/blackwayfer-polowatch35-wallet1._lime-combo-of-watch-wallet-sunglasses-for-men.jpg',
        [
                new Information('price', 90),
                new Information('model', 209)
        ] )];
        ngOnInit() {}
constructor(private slService: ShoppingListService) {}
getProducts() {
return this.products.slice();
}
addInfoToShoppingList(info: Information[]) {
        this.slService.addInfos(info);
}
}
