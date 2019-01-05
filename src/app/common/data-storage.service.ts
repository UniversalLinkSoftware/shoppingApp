import { Product } from './../products/product.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map} from 'rxjs/operators';
import 'rxjs';
import { ProductService } from '../products/product.service';




@Injectable()
export class DataStorageService {
  constructor(private http: Http, private productService: ProductService) {}

  storeProducts() {
       return this.http.put('https://shopping-ang7.firebaseio.com/products.json', this.productService.getProducts());
  }

  getProducts() {
    this.http.get('https://shopping-ang7.firebaseio.com/products.json').pipe(
      map(
        (response: Response) => {
          const products: Product[] = response.json();
          // tslint:disable-next-line:prefer-const
          for (let product of products) {
            if (!product['info']) {
                product['info'] = [];
            }
          }
          return products;
        }
      ))
      .subscribe(
        (products: Product[]) => {
          this.productService.setProducts(products);
        }
      );
  }
}
