import { Information } from './../common/info.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  infos: Information[];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
this.infos = this.slService.getInformation();
this.slService.infoChanged.subscribe(
  (info: Information[]) => {this.infos = info; }
  );
  // onInfoAdded(info: Information) {
  //   this.infos.push(info);

 // }
  }
}
