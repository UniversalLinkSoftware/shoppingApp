import { Product } from './../../product.model';
import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() productSelected = new EventEmitter<void>();
  constructor() { }

  onSelected() {
    this.productSelected.emit();
  }
  ngOnInit() {
  }

}
