import { Component, OnInit } from '@angular/core';
import { Information } from '../common/info.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  infos: Information[]  = [new Information('Adidas', 39), new Information('Nike', 40) ];
  constructor() { }

  ngOnInit() {
  }

}
