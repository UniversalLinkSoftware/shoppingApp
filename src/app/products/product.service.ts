import { Product } from './product.model';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Information } from '../common/info.model';
import { ShoppingListService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';
@Injectable()
export class ProductService implements OnInit {
// productSelected = new EventEmitter<Product>();
productChanged = new Subject<Product[]>();
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
getProduct(index: number) {
return this.products[index];
}
addInfoToShoppingList(info: Information[]) {
        this.slService.addInfos(info);
}

setProducts(products: Product[]) {
        this.products = products;
        this.productChanged.next(this.products.slice());
      }
getProducts() {
        console.log(this.products.slice());
        return this.products.slice();
        }
addProduct(product: Product) {
                console.log(product);
                this.products.push(product);
                this.productChanged.next(this.products.slice());
              }

updateProduct(index: number, newProduct: Product) {
                this.products[index] = newProduct;
                this.productChanged.next(this.products.slice());
              }

deleteProduct(index: number) {
                this.products.splice(index, 1);
                this.productChanged.next(this.products.slice());
              }
}
